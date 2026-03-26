export interface TimelineItemProps {
  year: string;
  event: string;
}

export function TimelineItem({ year, event }: TimelineItemProps) {
  return (
    <div className="flex gap-6 mb-8 last:mb-0">
      <div className="flex-shrink-0 w-20">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] text-white font-medium rounded-full text-sm">
          {year}
        </span>
      </div>
      <div className="flex-1 pt-1">
        <p className="text-gray-600">{event}</p>
      </div>
    </div>
  );
}
