import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Smartphone, Globe, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const webPackages = [
  {
    name: 'Basic',
    tagline: 'Ideal For Small Businesses & Startups',
    price: 'Starting From KES 8,000',
    highlight: false,
    features: [
      '3-page professional website',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Social media integration',
      '1 month support',
    ],
  },
  {
    name: 'Standard',
    tagline: 'Ideal For Growing Businesses',
    price: 'Starting From KES 15,000',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      'Up to 8 necessary pages',
      'Blog integration',
      'Advanced SEO optimization',
      'Admin dashboard',
      '3 months support',
    ],
  },
  {
    name: 'Premium',
    tagline: 'Ideal For Large Businesses & Organizations',
    price: 'Starting From KES 27,000',
    highlight: false,
    features: [
      'Everything in Standard',
      'Unlimited pages (custom design)',
      'Advanced admin dashboard',
      'API integrations',
      'Booking system',
      'Payment integration',
      'Priority support',
      '5 months maintenance',
    ],
  },
];

const appPackages = [
  {
    name: 'Basic App',
    icon: Smartphone,
    desc: 'Simple business app',
    details: 'Perfect for showcasing your business, displaying products, and connecting with customers on mobile.',
    features: ['Android or iOS', 'UI/UX design', 'Push notifications', '3 core screens', '1 month support'],
  },
  {
    name: 'Standard App',
    icon: Smartphone,
    desc: 'Business + user dashboard',
    details: 'Full-featured app with user authentication, personalized dashboards, and data management.',
    features: ['Android & iOS', 'User login & accounts', 'Custom dashboard', 'API integration', '3 months support'],
    highlight: true,
  },
  {
    name: 'Premium App',
    icon: Smartphone,
    desc: 'Enterprise-level application',
    details: 'Advanced integrations, multi-role dashboards, payment systems, and scalable architecture.',
    features: ['Android & iOS', 'Multi-role system', 'Payment integration', 'Admin panel', 'Advanced analytics', '5 months support'],
  },
];

export default function Services() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="section-title text-white mb-4">Services & Pricing</h1>
            <div className="gold-line" />
            <p className="text-white/50 mt-6 text-lg leading-relaxed">
              Transparent, competitive pricing for professional web and mobile solutions tailored to your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Web Packages */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-center gap-3 mb-12 justify-center">
            <Globe size={24} className="text-gold-300" />
            <h2 className="font-display text-3xl font-bold text-white">Website Development Packages</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {webPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 120}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                    pkg.highlight
                      ? 'border-2 border-gold-300 shadow-2xl'
                      : 'glass-card'
                  }`}
                  style={pkg.highlight ? { background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.06) 100%)' } : {}}
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="btn-gold text-xs px-4 py-1.5 rounded-full flex items-center gap-1">
                        <Star size={12} /> {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                    <p className="text-white/50 text-sm">{pkg.tagline}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <p className="text-gold-300 font-bold text-xl">{pkg.price}</p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={16} className="text-gold-300 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={pkg.highlight ? 'btn-gold w-full justify-center' : 'btn-outline w-full justify-center'}
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* App Packages */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-center gap-3 mb-12 justify-center">
            <Smartphone size={24} className="text-gold-300" />
            <h2 className="font-display text-3xl font-bold text-white">Mobile App Development</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {appPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 120}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                    pkg.highlight ? 'border-2 border-gold-300' : 'glass-card'
                  }`}
                  style={pkg.highlight ? { background: 'rgba(212,175,55,0.07)' } : {}}
                >
                  <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.12)' }}>
                    <pkg.icon size={22} className="text-gold-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-gold-300 text-sm font-medium mb-3">{pkg.desc}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{pkg.details}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-white/70 text-sm">
                        <Check size={14} className="text-gold-300 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl glass-card max-w-md mx-auto w-full">
              <p className="text-white/60 text-sm">Need something custom or enterprise-scale?</p>
              <Link to="/contact" className="btn-gold">
                Request Custom Quote <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark border-t border-gold-300/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Not Sure Which Package Is Right For You?
            </h2>
            <p className="text-white/50 mb-8">
              Book a free consultation and we'll help you choose the best solution for your goals and budget.
            </p>
            <Link to="/contact" className="btn-gold">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
