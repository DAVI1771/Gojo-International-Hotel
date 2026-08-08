import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-slate-300 leading-relaxed">
            Gojo International Hotel is crafted for discerning travelers who value exceptional service,
            sophisticated spaces, and premium comfort. From curated suites to bespoke experiences,
            every detail is designed to make your stay extraordinary.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-700 p-8 bg-slate-900">
          <p className="text-slate-300">
            "Our mission is simple: to make every guest feel at home while surrounded by world-class luxury."
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
