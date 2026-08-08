import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app you would send this to a backend
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl font-bold text-navy mb-4"
          >
            Contact & Reservations
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-navy rounded-2xl p-8 md:p-10 text-cream h-full">
              <h3 className="font-playfair text-2xl font-bold mb-8">Visit Us</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-cream/70 text-sm leading-relaxed">
                      Bole Road, Near Bole International Airport<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+251116678900" className="text-cream/70 text-sm hover:text-gold transition-colors">
                      +251 11 667 8900
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:reservations@gojointernationalhotel.com" className="text-cream/70 text-sm hover:text-gold transition-colors">
                      reservations@gojointernationalhotel.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">WhatsApp</p>
                    <a href="https://wa.me/251911234567" className="text-cream/70 text-sm hover:text-gold transition-colors">
                      +251 911 234 567
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 aspect-video bg-navy-light rounded-xl overflow-hidden border border-gold/20">
                <iframe
                  title="Hotel Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.79!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTgnNDguMCJOIDM4wrA0NycyNC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-navy/5">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-6">Send a Reservation Request</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Check-in</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Check-out</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                    placeholder="Special requests or questions..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {submitted ? 'Request Sent ✓' : 'Send Request'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
