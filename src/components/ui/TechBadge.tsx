interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <div className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm backdrop-blur-sm">
      {name}
    </div>
  );
}