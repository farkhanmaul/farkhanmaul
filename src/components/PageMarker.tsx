export default function PageMarker() {
  return (
    <div className="absolute bottom-12 left-12">
      <div className="flex items-center gap-4">
        <div className="w-16 h-px bg-zinc-500"></div>
        <span className="text-zinc-400 text-sm font-mono">01</span>
      </div>
    </div>
  );
}