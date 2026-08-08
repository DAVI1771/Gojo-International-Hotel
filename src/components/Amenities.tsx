import React from 'react'

const items = ['Infinity Pool', 'Luxury Spa', 'Fitness Center', 'Airport Shuttle', 'Conference Halls', 'Free High-Speed Wi‑Fi']

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">Amenities</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <li key={item} className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Amenities
