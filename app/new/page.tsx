"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, FormEvent, use } from "react";
import { Trash2, X, AlertTriangle, ArrowLeft } from "lucide-react";

interface Params {
  id?: string;
}

interface Task {
  title: string;
  description: string;
}

function NewPage({ params }: { params: Promise<Params> }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const resolvedParams = use(params);
  const isEditMode = Boolean(resolvedParams.id);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await fetch(`/api/tasks/${resolvedParams.id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  useEffect(() => {
    if (isEditMode) {
      fetch(`/api/tasks/${resolvedParams.id}`)
        .then((res) => res.json())
        .then((data: Task) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [resolvedParams, isEditMode]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditMode) {
      await fetch(`/api/tasks/${resolvedParams.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
    } else {
      await fetch(`/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
    }

    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
        <button
          onClick={() => router.push("/")}
          className="mb-6 sm:mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group self-start"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Back</span>
        </button>

        <div className="flex items-center justify-center flex-1">
          <form
            className="bg-gray-800/50 p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-2xl border border-gray-700"
            onSubmit={onSubmit}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              {isEditMode ? "Edit Task" : "New Task"}
            </h2>
            
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2" htmlFor="title">
                Task's title
              </label>
              <input
                id="title"
                name="title"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                type="text"
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2" htmlFor="description">
                Taks's description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="Enter the description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                {isEditMode ? "Edit" : "Create"}
              </button>
              
              {isEditMode && (
                <button
                  type="button"
                  className="px-4 sm:px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

        {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 max-w-md w-full border border-gray-700 shadow-xl mx-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <AlertTriangle className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">Confirm Delete</h3>
              </div>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <p className="text-gray-300 mb-2 text-sm sm:text-base">Are you sure you want to delete this task?</p>
              <p className="text-gray-400 text-xs sm:text-sm">This action cannot be undone.</p>
            </div>

            <div className="flex gap-2 sm:gap-3 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isDeleting ? (
                  <>
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="sm:inline">Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="sm:inline">Delete Task</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewPage;
