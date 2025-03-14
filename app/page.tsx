import TaskCard from "@/components/TaskCard";
import Link from "next/link";
import { PlusCircle, Heart } from "lucide-react";

async function loadTasks() {
  const data = await fetch("http://localhost:3000/api/tasks");
  const tasks = await data.json();
  return tasks;
}

export default async function Home() {
  const tasks = await loadTasks();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text">
                Task Manager
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Organize your tasks efficiently</p>
            </div>
            <Link
              href="/new"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#60a5fa] group"
            >
              <span className="relative inline-flex items-center gap-2 rounded-[0.6rem] bg-white dark:bg-gray-900 px-6 py-3 text-gray-900 dark:text-white transition-all duration-300 group-hover:bg-opacity-90">
                <PlusCircle 
                  size={20} 
                  className="transform-gpu transition-transform duration-500 ease-out group-hover:rotate-[360deg]" 
                />
                <span className="relative font-medium">
                  New Task
                  <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
              </span>
            </Link>
          </div>

          {tasks.length === 0 ? (
            <div className="text-center py-12 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No tasks yet</p>
              <p className="text-gray-500 dark:text-gray-500 mt-2">Create your first task to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-sm">Developed with</span>
            <Heart size={16} className="text-red-500 dark:text-red-400 fill-red-500 dark:fill-red-400 animate-pulse" />
            <span className="text-sm">by</span>
            <a 
              href="https://github.com/marcosotomaceda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text hover:from-blue-600 hover:to-teal-600 dark:hover:from-blue-500 dark:hover:to-teal-500 transition-all duration-300"
            >
              Marco Soto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
