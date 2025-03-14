import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8 flex justify-center">
          <h1 className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text tracking-widest">
            404
          </h1>
          <AlertCircle className="absolute -right-2 top-0 text-red-500 dark:text-red-400 h-8 w-8 animate-bounce" />
        </div>

        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <Link
          href="/"
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#60a5fa] group"
        >
          <span className="relative inline-flex items-center gap-2 rounded-[0.6rem] bg-white dark:bg-gray-900 px-6 py-3 text-gray-900 dark:text-white transition-all duration-300 group-hover:bg-opacity-90">
            <Home 
              size={20} 
              className="transform-gpu transition-transform duration-500 ease-out group-hover:-translate-y-1" 
            />
            <span className="relative font-medium">
              Back to Home
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
