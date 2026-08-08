import React from 'react'

const rooms = [
  { name: 'Deluxe Suite', detail: 'King bed, skyline view, private lounge.' },
  { name: 'Executive Room', detail: 'Business-ready with smart workspace.' },
  { name: 'Presidential Suite', detail: 'Ultimate luxury with personal concierge.' },
]

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <article key={room.name} className="rounded-xl border border-slate-700 p-6 bg-slate-800">
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <p className="text-slate-300">{room.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
