import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  'Website Development',
  'Website Redesign',
  'Website Maintenance',
  'Mobile App Development',
  'Digital Solutions',
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gold-300/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/file_00000000e48881f49ed7be7ae578d96f.png"
                alt="S&L Tech Logo"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <span className="font-display text-xl font-bold text-white">
                  S&amp;L <span className="gold-text">Tech</span>
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Building premium digital solutions that help businesses grow, scale, and succeed in the modern world.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-gold-300 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/50 hover:text-gold-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/50 hover:text-gold-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">info@sltech.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">+254 700 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 S&amp;L Tech. All Rights Reserved.
          </p>
          <p className="text-white/30 text-sm font-display italic">
            Your Business. Stronger Online.
          </p>
        </div>
      </div>
    </footer>
  );
}
