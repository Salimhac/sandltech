import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const values = [
  { title: 'Excellence', desc: 'We never settle for mediocrity. Every pixel, every line of code is crafted with precision.' },
  { title: 'Innovation', desc: 'We stay ahead of technology trends to deliver forward-thinking solutions.' },
  { title: 'Reliability', desc: 'You can count on us to deliver what we promise, when we promise it.' },
  { title: 'Transparency', desc: 'Open communication at every stage — no surprises, no hidden costs.' },
  { title: 'Client Success', desc: 'Your growth is our goal. We measure our success by yours.' },
];

const team = [
  { name: 'Founder & Lead Developer', desc: 'Full-stack developer with a passion for building impactful digital products.' },
  { name: 'UI/UX Designer', desc: 'Creating beautiful, intuitive interfaces that users love to interact with.' },
  { name: 'Mobile Developer', desc: 'Specialist in cross-platform mobile applications for Android and iOS.' },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Team at work"
            className="w-full h-full object-cover opacity-8"
            style={{ opacity: 0.07 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-4">About S&L Tech</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Building Digital Solutions That{' '}
                <span className="gold-text">Drive Results</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                S&L Tech is a modern technology company focused on helping businesses establish a powerful online presence through professional websites and mobile applications.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We combine creativity, technology, and strategy to build solutions that are visually stunning, highly functional, and designed for long-term success.
              </p>
              <Link to="/contact" className="btn-gold">
                Work With Us <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(212,175,55,0.08)' }}>
                  <img
                    src="https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Development team"
                    className="w-full h-72 object-cover opacity-70"
                  />
                  <div className="p-6 border-t border-gold-300/10">
                    <div className="flex items-center gap-4 mb-4">
                      <img src="/file_00000000e48881f49ed7be7ae578d96f.png" alt="S&L Tech Logo" className="w-10 h-10 rounded-xl object-contain" />
                      <div>
                        <p className="text-white font-semibold">S&L Tech</p>
                        <p className="text-white/40 text-sm">Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[['25+', 'Projects'], ['30+', 'Clients'], ['3+', 'Years'], ['24/7', 'Support']].map(([val, lbl]) => (
                        <div key={lbl} className="rounded-xl p-3 text-center" style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.15)' }}>
                          <p className="text-gold-300 font-bold font-display text-xl">{val}</p>
                          <p className="text-white/40 text-xs">{lbl}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.12)' }}>
                  <Target size={22} className="text-gold-300" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/60 leading-relaxed">
                  To empower businesses through innovative digital solutions — building websites and applications that are not just visually stunning, but strategically designed to drive growth, engagement, and lasting success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.12)' }}>
                  <Eye size={22} className="text-gold-300" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/60 leading-relaxed">
                  To become one of Africa's most trusted technology and software development companies — recognized for delivering world-class digital products that transform businesses and communities across the continent and beyond.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="section-title text-white mb-4">Our Core Values</h2>
            <div className="gold-line" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="glass-card-hover rounded-2xl p-6 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-gold-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">The People Behind</p>
            <h2 className="section-title text-white mb-4">Our Team</h2>
            <div className="gold-line" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map(({ name, desc }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <div className="glass-card-hover rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <img src="/file_00000000e48881f49ed7be7ae578d96f.png" alt="Team" className="w-10 h-10 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{name}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-black border-t border-gold-300/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Partner With S&amp;L Tech
            </h2>
            <p className="text-white/50 mb-8">
              Let's discuss your project and explore how we can help you achieve your digital goals.
            </p>
            <Link to="/contact" className="btn-gold">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
