export default function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-lg text-gray-400 animate-pulse">Loading...</div>
      </div>
    </div>
  );
}