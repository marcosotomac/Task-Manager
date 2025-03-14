export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-700 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-blue-500 rounded-full animate-spin absolute top-0 border-t-transparent"></div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            Loading...
          </h2>
          <p className="text-gray-400 mt-2">Preparing your tasks</p>
        </div>
      </div>
    </div>
  );
}