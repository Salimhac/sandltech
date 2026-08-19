import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, ArrowRight, Globe, ShoppingCart, Building2, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = ['All', 'Business Websites', 'E-commerce', 'Corporate', 'Mobile Apps'];

const projects = [
  {
    id: 1,
    name: 'An Accomamodation Booking Website',
    category: 'Business Websites',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    desc: 'An innovative booking site connecting travelers to a curated selection of guest houses and bed-and-breakfast stays in Kenya.',
    image: 'https://images.pexels.com/photos/27624017/pexels-photo-27624017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    live: 'https://karibustayske.vercel.app/',
    case: '#',
    demo: true,
  },
  {
    id: 2,
    name: 'Property selling and rental website',
    category: 'E-commerce',
    tech: ['React', 'Node.js', 'Stripe'],
    desc: 'A comprehensive real estate platform facilitating property rentals and sales, equipped with integrated cost estimation tools.',
    image: 'https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    live: 'https://urbanspace-ke.vercel.app/',
    case: '#',
    demo: true,
  },
  {
    id: 3,
    name: 'Haven BNB',
    category: 'Business Websites',
    tech: ['React',  'TypeScript'],
    desc: 'A charming Kenyan guest house offering authentic local hospitality, modern comforts, and easy access to nearby attractions.',
    image: 'https://images.pexels.com/photos/34961503/pexels-photo-34961503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    live: 'https://haven-bnb.vercel.app/',
    case: '#',
    demo: true,
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  'All': <Globe size={16} />,
  'Business Websites': <Globe size={16} />,
  'E-commerce': <ShoppingCart size={16} />,
  'Corporate': <Building2 size={16} />,
  'Mobile Apps': <Smartphone size={16} />,
};

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="section-title text-white mb-4">Portfolio Showcase</h1>
            <div className="gold-line" />
            <p className="text-white/50 mt-6 text-lg leading-relaxed">
              A selection of the websites and applications we have built for businesses and organizations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-brand-dark border-y border-gold-300/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-gold-300 text-brand-black'
                    : 'glass-card text-white/60 hover:text-white'
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 100}>
                  <div className="glass-card-hover rounded-2xl overflow-hidden group">
                    <div className="relative overflow-hidden h-52">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 gap-3">
                        <a
                          href={project.live}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-300 text-brand-black text-sm font-semibold hover:bg-gold-200 transition-colors"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                        <a
                          href={project.case}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass-card text-white text-sm font-medium hover:border-gold-300/50 transition-colors border border-white/20"
                        >
                          <BookOpen size={14} /> Case Study
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                          <span className="text-gold-300 text-xs font-medium">{project.category}</span>
                        </div>
                        {project.demo && (
                          <span className="text-xs px-2 py-1 rounded-full bg-gold-300/10 text-gold-300 border border-gold-300/20">
                            Demo
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 text-sm mb-4 leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-white/30">
              <Globe size={48} className="mx-auto mb-4 opacity-30" />
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Demo Placeholders */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">Coming Soon</p>
            <h2 className="font-display text-3xl font-bold text-white">Featured Projects</h2>
            <div className="gold-line" />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n, i) => (
              <AnimatedSection key={n} delay={i * 100}>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="h-48 flex items-center justify-center border-b border-gold-300/10"
                    style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(26,26,26,0.8) 100%)' }}>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mx-auto mb-3">
                        <Globe size={24} className="text-gold-300/40" />
                      </div>
                      <p className="text-white/20 text-sm font-medium">Add Demo Later</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white/40 font-semibold mb-2">Demo Project {n}</h3>
                    <p className="text-white/20 text-sm mb-5">Project details will be added here once available.</p>
                    <div className="flex gap-3">
                      <button disabled className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-white/20 border border-white/10 cursor-not-allowed">
                        <ExternalLink size={12} /> Live Demo
                      </button>
                      <button disabled className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-white/20 border border-white/10 cursor-not-allowed">
                        <BookOpen size={12} /> Case Study
                      </button>
                    </div>
                  </div>
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
              Ready To Start Your Project?
            </h2>
            <p className="text-white/50 mb-8">
              Let's build something remarkable together. Get in touch and receive a free quote within 24 hours.
            </p>
            <Link to="/contact" className="btn-gold">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
