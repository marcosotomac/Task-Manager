"use client";
import { useRouter } from "next/navigation";
import { Calendar, ChevronRight, Clock } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string | null;
  createdAt: string;
}

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return { date: "Fecha no válida", time: "--:--" };
      }
      return {
        date: date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        time: date.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
    } catch {
      return { date: "Fecha no válida", time: "--:--" };
    }
  };

  const formattedDate = formatDate(task.createdAt);

  return (
    <div
      onClick={() => router.push("/tasks/edit/" + task.id)}
      className="group relative bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl p-6 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-400/5"
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {task.title}
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1" />
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {task.description}
        </p>

        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-500 text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {formattedDate.date}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {formattedDate.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
