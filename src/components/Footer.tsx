import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-6 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-6 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Gojo International Hotel. All rights reserved.</p>
        <p>Crafted with comfort and elegance.</p>
      </div>
    </footer>
  )
}

export default Footer
