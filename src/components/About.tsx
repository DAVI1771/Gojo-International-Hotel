import { motion } from 'framer-motion'
import { Award, Globe, Heart } from 'lucide-react'

const features = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'International Standards',
    description: 'World-class service and facilities that meet the highest global hospitality benchmarks.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Warm Hospitality',
    description: 'Genuine Ethiopian warmth combined with refined international service excellence.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Award-Winning Comfort',
    description: 'Thoughtfully designed spaces that blend modern luxury with cultural authenticity.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Luxury hotel interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-cream p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-playfair text-3xl font-bold text-gold">15+</p>
              <p className="text-sm text-cream/80">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              A Sanctuary of
              <span className="text-gold"> Refined Luxury</span>
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              Nestled in the heart of Addis Ababa, Gojo International Hotel offers an unparalleled blend of contemporary elegance and authentic Ethiopian hospitality. Every detail has been carefully curated to ensure your stay is nothing short of extraordinary.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-10">
              From our meticulously designed rooms to our world-class dining experiences, we create moments that linger long after you depart.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-full flex items-center justify-center text-gold">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-1">{feature.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
