import React from 'react'

const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Dining Experience</h2>
          <p className="text-slate-300 leading-relaxed">
            Enjoy a world of flavors at our signature restaurants. From gourmet international cuisine
            to handcrafted local specialties, every meal is prepared by renowned chefs.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6">
          <h3 className="font-semibold text-lg mb-2">Featured Venues</h3>
          <ul className="space-y-2 text-slate-300">
            <li>Skyline Rooftop Grill</li>
            <li>Zen Garden Sushi Bar</li>
            <li>The Imperial Breakfast Lounge</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Dining
