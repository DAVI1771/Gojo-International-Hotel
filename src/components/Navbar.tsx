import React from 'react'

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          Gojo International Hotel
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <li><a className="hover:text-white transition" href="#about">About</a></li>
          <li><a className="hover:text-white transition" href="#rooms">Rooms</a></li>
          <li><a className="hover:text-white transition" href="#amenities">Amenities</a></li>
          <li><a className="hover:text-white transition" href="#dining">Dining</a></li>
          <li><a className="hover:text-white transition" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
