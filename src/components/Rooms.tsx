import { motion } from 'framer-motion'
import { Wifi, Coffee, Bath, Maximize } from 'lucide-react'

const rooms = [
  {
    name: 'Deluxe Room',
    price: 180,
    description: 'Elegant comfort with city views and premium amenities for the discerning traveler.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    amenities: ['King Bed', 'City View', 'Free Wi-Fi', 'Mini Bar'],
  },
  {
    name: 'Executive Suite',
    price: 280,
    description: 'Spacious living area with separate lounge, ideal for business and leisure.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    amenities: ['Living Area', 'Work Desk', 'Premium Bath', 'Butler Service'],
  },
  {
    name: 'Presidential Suite',
    price: 520,
    description: 'The pinnacle of luxury with panoramic views and exclusive privileges.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    amenities: ['Panoramic View', 'Private Terrace', 'Jacuzzi', '24/7 Butler'],
  },
  {
    name: 'Family Room',
    price: 240,
    description: 'Thoughtfully designed for families seeking comfort and togetherness.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: ['Two Beds', 'Connecting Option', 'Kids Amenities', 'Lounge'],
  },
]

export default function Rooms() {
  return (
    <section id="rooms" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-4"
          >
            Accommodation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl font-bold text-cream mb-4"
          >
            Rooms & Suites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 max-w-2xl mx-auto text-lg"
          >
            Each room is a sanctuary of calm, designed with meticulous attention to detail and the finest materials.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-navy-light rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="font-playfair text-2xl font-bold text-cream">{room.name}</h3>
                  <p className="text-gold font-semibold">
                    ${room.price}
                    <span className="text-cream/60 text-sm font-normal"> / night</span>
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-cream/70 mb-5 leading-relaxed">{room.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 bg-navy rounded-full text-cream/80 border border-gold/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold font-medium hover:text-gold-light transition-colors group/btn"
                >
                  View Details
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
