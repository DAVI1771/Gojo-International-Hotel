import { motion } from 'framer-motion'
import {
  Wifi,
  Waves,
  Sparkles,
  UtensilsCrossed,
  ConciergeBell,
  Dumbbell,
  Users,
  Plane,
} from 'lucide-react'

const amenities = [
  { icon: <Wifi className="w-7 h-7" />, title: 'Free High-Speed Wi-Fi' },
  { icon: <Waves className="w-7 h-7" />, title: 'Swimming Pool' },
  { icon: <Sparkles className="w-7 h-7" />, title: 'Spa & Wellness' },
  { icon: <UtensilsCrossed className="w-7 h-7" />, title: 'Restaurant & Bar' },
  { icon: <ConciergeBell className="w-7 h-7" />, title: '24/7 Room Service' },
  { icon: <Dumbbell className="w-7 h-7" />, title: 'Fitness Center' },
  { icon: <Users className="w-7 h-7" />, title: 'Conference Rooms' },
  { icon: <Plane className="w-7 h-7" />, title: 'Airport Shuttle' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-4"
          >
            Facilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl font-bold text-navy mb-4"
          >
            World-Class Amenities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy/70 max-w-2xl mx-auto text-lg"
          >
            Everything you need for a seamless and memorable stay, thoughtfully provided under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-white rounded-2xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-navy/5"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-navy rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-medium text-navy text-sm md:text-base leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
