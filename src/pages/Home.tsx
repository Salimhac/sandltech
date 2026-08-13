import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Globe, Smartphone, Wrench, RefreshCw,
  Zap, Shield, BarChart3, Headphones, Clock, Star, ChevronRight,
  Users, Trophy, Calendar, PhoneCall
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const stats = [
  { icon: Trophy, value: '25+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Calendar, value: '3+', label: 'Years Experience' },
  { icon: PhoneCall, value: '24/7', label: 'Support Available' },
];

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites built for speed, performance, and growth. From landing pages to full-featured platforms.',
  },
  {
    icon: RefreshCw,
    title: 'Website Upgrades',
    desc: 'Transform outdated websites into modern, responsive experiences that convert visitors into customers.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Security updates, bug fixes, optimization, and ongoing support — so your site always runs at its best.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Android and iOS applications tailored to your business needs with beautiful UI and smooth performance.',
  },
];

const whyUs = [
  { icon: Star, title: 'Professional Design', desc: 'Premium, industry-leading aesthetics that make your brand stand out.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'We deliver projects on time without compromising on quality.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Every solution is crafted to look perfect on all screen sizes.' },
  { icon: BarChart3, title: 'SEO Friendly', desc: 'Built for search engine visibility from the ground up.' },
  { icon: Shield, title: 'Scalable Solutions', desc: 'Architected to grow with your business as you scale.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'We stay with you long after launch with ongoing support.' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'We listen to your goals and understand your vision.' },
  { num: '02', title: 'Planning', desc: 'Strategic roadmap, timeline, and technology stack selection.' },
  { num: '03', title: 'Design', desc: 'Pixel-perfect UI/UX designs tailored to your brand.' },
  { num: '04', title: 'Development', desc: 'Clean, scalable code built to modern standards.' },
  { num: '05', title: 'Testing', desc: 'Rigorous QA across devices, browsers, and scenarios.' },
  { num: '06', title: 'Launch', desc: 'Smooth deployment with zero-downtime and full handover.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-black">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Tech workspace"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black" />
        </div>

        {/* Gold orb decorations */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-300 animate-pulse" />
                <span className="text-gold-300 text-sm font-medium">Premium Web & Mobile Development</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Professional Websites &{' '}
                <span className="gold-text">Mobile Apps</span>{' '}
                That Grow Your Business
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                We design, develop, upgrade, and maintain modern digital experiences that help businesses stand out and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-gold text-base">
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn-outline text-base">
                  View Portfolio
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                {['React & TypeScript', 'Android & iOS', 'SEO Optimized', 'Fast Delivery'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-white/40 text-sm">
                    <CheckCircle2 size={14} className="text-gold-300" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="glass-card rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 60px rgba(212,175,55,0.12)' }}>
                  <img
                    src="https://images.pexels.com/photos/5912327/pexels-photo-5912327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Dashboard mockup"
                    className="w-full h-72 object-cover opacity-80"
                  />
                  <div className="p-5 border-t border-gold-300/10">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="/file_00000000e48881f49ed7be7ae578d96f.png" alt="logo" className="w-8 h-8 rounded-lg object-contain" />
                      <div>
                        <p className="text-white text-sm font-semibold">S&L Tech Dashboard</p>
                        <p className="text-white/40 text-xs">Live project preview</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Responsive', 'Fast', 'Secure'].map((b) => (
                        <span key={b} className="text-center text-xs py-1.5 rounded-lg bg-gold-300/10 text-gold-300 font-medium">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-3 animate-float shadow-lg">
                  <p className="text-xs text-white/50">Project completed</p>
                  <p className="text-gold-300 font-bold text-sm">On time delivery</p>
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-lg" style={{ animationDelay: '1.5s' }}>
                  <p className="text-xs text-white/50">Client satisfaction</p>
                  <p className="text-gold-300 font-bold text-sm">100% Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-300 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gold-300/10 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <AnimatedSection key={label} delay={i * 100} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                    <Icon size={22} className="text-gold-300" />
                  </div>
                </div>
                <div className="font-display text-4xl font-bold gold-text mb-1">{value}</div>
                <div className="text-white/50 text-sm">{label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="section-title text-white mb-4">Our Core Services</h2>
            <div className="gold-line" />
            <p className="text-white/50 mt-6 max-w-xl mx-auto">
              From concept to launch, we deliver end-to-end digital solutions tailored to your business.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="glass-card-hover rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.12)' }}>
                    <Icon size={22} className="text-gold-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services & Pricing <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">Why S&L Tech</p>
            <h2 className="section-title text-white mb-4">Built For Your Success</h2>
            <div className="gold-line" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <div className="flex gap-4 p-6 rounded-2xl glass-card-hover">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.12)' }}>
                    <Icon size={18} className="text-gold-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="section-title text-white mb-4">Our Process</h2>
            <div className="gold-line" />
            <p className="text-white/50 mt-6 max-w-xl mx-auto">
              A proven, transparent 6-step process that takes your idea from concept to a live, polished product.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }, i) => (
              <AnimatedSection key={num} delay={i * 100}>
                <div className="relative glass-card-hover rounded-2xl p-6">
                  <div className="font-display text-5xl font-bold mb-4 leading-none"
                    style={{ color: 'rgba(212,175,55,0.12)' }}>
                    {num}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-300 opacity-60" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-12"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.04) 100%)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <div className="absolute inset-0 opacity-5"
                style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)' }} />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready To Build <span className="gold-text">Something Great?</span>
                </h2>
                <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                  Let's turn your vision into a powerful digital product. Get a free quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-gold text-base">
                    Get Started Today <ArrowRight size={18} />
                  </Link>
                  <Link to="/services" className="btn-outline text-base">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
