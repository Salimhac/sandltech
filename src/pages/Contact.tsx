import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// ============ SIDOBE CONFIGURATION ============
// Replace with your credentials from Sidobe Console
const SIDOBE_SECRET_KEY = 'ClNjNYGZYqToZvstapHGEmDQtmhajWjIpNdrlNtKwWdUyVyqiv'; 
const YOUR_WHATSAPP = '254719622849';

// WhatsApp link for the button (opens WhatsApp app)
const WHATSAPP_NUMBER = '254700000000';
const WA_MESSAGE = encodeURIComponent(
  'Hello S&L Tech, I would like to inquire about your web and mobile development services.'
);

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@sltech.co.ke', href: 'mailto:info@sltech.co.ke' },
  { icon: Phone, label: 'Phone', value: '+254 700 000 000', href: 'tel:+254700000000' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+254 700 000 000', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}` },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri: 8am–6pm EAT', href: '#' },
];

const services = [
  'Website Development',
  'Website Redesign / Upgrade',
  'Website Maintenance',
  'Mobile App Development',
  'Digital Business Solution',
  'Other',
];

type FormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    fullName: '', company: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  // ============ HANDLE FORM SUBMISSION ============
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // Format the message for WhatsApp
      const message = `
📩 New Inquiry from ${form.fullName}
🏢 Company: ${form.company || 'Not provided'}
📧 Email: ${form.email}
📱 Phone: ${form.phone || 'Not provided'}
🛠 Service: ${form.service}
💬 Message: ${form.message}
      `.trim();

      // Send to Sidobe API - this sends DIRECTLY to your WhatsApp
      const response = await fetch('https://api.sidobe.com/wa/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secretKey: SIDOBE_SECRET_KEY,
          phone: YOUR_WHATSAPP, // Your WhatsApp number
          message: message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after successful submission
        setForm({
          fullName: '', company: '', email: '', phone: '', service: '', message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Sidobe Error:', errorData);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('⚠️ Failed to send message. Please try again or contact us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  // ============ RENDER ============
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-gold-300 text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
            <h1 className="section-title text-white mb-4">Contact Us</h1>
            <div className="gold-line" />
            <p className="text-white/50 mt-6 text-lg leading-relaxed">
              Have a project in mind? Send us a message and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <img src="/file_00000000e48881f49ed7be7ae578d96f.png" alt="S&L Tech" className="w-12 h-12 rounded-xl object-contain" />
                  <div>
                    <p className="text-white font-display font-bold text-lg">S&amp;L Tech</p>
                    <p className="text-white/40 text-xs">Your Business. Stronger Online.</p>
                  </div>
                </div>

                <ul className="space-y-6 mb-10">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex items-start gap-4 group"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-gold-300/20"
                          style={{ background: 'rgba(212,175,55,0.1)' }}>
                          <Icon size={18} className="text-gold-300" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs mb-0.5">{label}</p>
                          <p className="text-white text-sm font-medium group-hover:text-gold-300 transition-colors">{value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full justify-center py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={150}>
              <div className="glass-card rounded-2xl p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(212,175,55,0.12)', border: '2px solid rgba(212,175,55,0.3)' }}>
                      <CheckCircle2 size={40} className="text-gold-300" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Inquiry Sent!</h3>
                    <p className="text-white/50 max-w-sm leading-relaxed">
                      ✅ Your message has been sent directly to our team. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ fullName: '', company: '', email: '', phone: '', service: '', message: '' }); }}
                      className="btn-outline mt-2"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display text-2xl font-bold text-white mb-6">Send an Inquiry</h2>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-sm mb-2" htmlFor="fullName">Full Name *</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-300 transition-colors placeholder-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2" htmlFor="company">Company Name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-300 transition-colors placeholder-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-sm mb-2" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-300 transition-colors placeholder-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+254 700 000 000"
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-300 transition-colors placeholder-white/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2" htmlFor="service">Service Needed *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-300 transition-colors"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-brand-dark">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-300 transition-colors placeholder-white/20 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} /> Send Inquiry
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}