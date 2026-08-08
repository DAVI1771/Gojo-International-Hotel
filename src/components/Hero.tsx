import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#334155,_#020617_70%)]" />
      <div className="relative z-10 text-center px-6">
        <p className="uppercase tracking-[0.3em] text-slate-300 text-xs mb-4">Welcome to Luxury</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl mx-auto leading-tight">
          Experience Timeless Elegance at Gojo International Hotel
        </h1>
        <p className="mt-6 text-slate-200 max-w-2xl mx-auto">
          A 5-star destination blending modern comfort, refined hospitality, and unforgettable city views.
        </p>
        <a
          href="#rooms"
          className="inline-block mt-8 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-200 transition"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  )
}

export default Hero
