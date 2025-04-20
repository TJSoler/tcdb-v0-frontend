interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface CareerTimelineProps {
  events: TimelineEvent[]
}

export function CareerTimeline({ events }: CareerTimelineProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-black mb-6 tracking-tight">CAREER TIMELINE</h2>
      <div className="relative border-l-4 border-black pl-8 ml-4">
        {events.map((event, index) => (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-12 w-8 h-8 bg-neon-green border-4 border-black flex items-center justify-center font-bold text-black">
              {index + 1}
            </div>
            <div className="border-2 border-black bg-white p-4">
              <div className="bg-black text-white inline-block px-2 py-1 text-sm font-bold mb-2">{event.year}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
