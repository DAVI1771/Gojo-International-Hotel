import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream">
      <div className="container-custom section-padding pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">Gojo</h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Experience luxury without borders. World-class hospitality in the heart of Addis Ababa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#dining" className="hover:text-gold transition-colors">Dining</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>Bole Road, Addis Ababa</li>
              <li>+251 11 667 8900</li>
              <li>reservations@gojointernationalhotel.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-cream mb-5">Newsletter</h4>
            <p className="text-sm text-cream/60 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-navy border border-gold/20 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gold text-navy font-semibold rounded-full text-sm hover:bg-gold-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Gojo International Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
