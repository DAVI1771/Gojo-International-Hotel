import { motion } from 'framer-motion'

const highlights = [
  { title: 'Ethiopian Fine Dining', description: 'Authentic flavors elevated with contemporary presentation.' },
  { title: 'International Cuisine', description: 'A curated selection of global dishes prepared by expert chefs.' },
  { title: 'Signature Cocktails', description: 'Handcrafted drinks featuring local and international spirits.' },
  { title: 'Private Dining', description: 'Intimate spaces perfect for special occasions and business meetings.' },
]

export default function Dining() {
  return (
    <section id="dining" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Culinary Experience
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Exceptional
              <span className="text-gold"> Dining</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              At Gojo International Hotel, dining is an experience. Our restaurants and bars celebrate both the rich culinary heritage of Ethiopia and the finest international cuisine, served in elegant surroundings.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-gold pl-4"
                >
                  <h3 className="font-semibold text-cream mb-1">{item.title}</h3>
                  <p className="text-cream/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Fine dining experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-playfair text-2xl font-bold">Open Daily</p>
              <p className="text-sm">6:30 AM – 11:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
