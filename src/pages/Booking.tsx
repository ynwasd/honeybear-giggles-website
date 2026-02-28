import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Download, Instagram, Youtube, Twitter } from "lucide-react";
import { BRAND } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const EVENT_TYPES = ["Club", "Corporate", "Private Event", "Festival", "Other"];

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", eventDate: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-accent-foreground/5 border border-accent-foreground/10 rounded-md px-4 py-3 text-sm text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

  return (
    <div className="min-h-screen bg-accent">
      <Header />
      <main className="pt-24">
        <section className="section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl sm:text-8xl tracking-wider text-primary neon-text mb-4"
          >
            BOOKING
          </motion.h1>
          <p className="text-accent-foreground/60 max-w-lg mx-auto">
            For live performances, corporate events, media appearances, and brand partnerships.
          </p>
        </section>

        <section className="pb-20 px-4 sm:px-6">
          <div className="container-tight max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-display text-3xl tracking-wider text-accent-foreground mb-2">MESSAGE SENT</h2>
                    <p className="text-accent-foreground/60 text-sm">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        className={inputClass}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        required
                        className={inputClass}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone"
                        className={inputClass}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <select
                        className={inputClass}
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        required
                      >
                        <option value="">Event Type *</option>
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="date"
                        placeholder="Event Date"
                        className={inputClass}
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Budget Range"
                        className={inputClass}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                    <textarea
                      placeholder="Tell us about your event *"
                      required
                      rows={5}
                      className={inputClass + " resize-none"}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-display tracking-widest text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      SEND INQUIRY
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="p-6 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10">
                  <h3 className="font-display text-xl tracking-wider text-accent-foreground mb-4">DIRECT CONTACT</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-accent-foreground/40 font-display tracking-widest">MANAGEMENT</p>
                      <p className="text-accent-foreground font-medium">{BRAND.managerName}</p>
                      <a href={`mailto:${BRAND.managerEmail}`} className="text-sm text-primary hover:underline flex items-center gap-1.5 mt-1">
                        <Mail className="w-3.5 h-3.5" /> {BRAND.managerEmail}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-accent-foreground/40 font-display tracking-widest">BOOKING AGENT</p>
                      <p className="text-accent-foreground font-medium">{BRAND.agentName}</p>
                      <a href={`mailto:${BRAND.agentEmail}`} className="text-sm text-primary hover:underline flex items-center gap-1.5 mt-1">
                        <Mail className="w-3.5 h-3.5" /> {BRAND.agentEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Press Kit */}
                <button className="w-full p-4 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/30 transition-all flex items-center justify-center gap-2 font-display tracking-widest text-sm text-accent-foreground hover:text-primary">
                  <Download className="w-4 h-4" />
                  DOWNLOAD PRESS / MEDIA KIT
                </button>

                {/* Social */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  {[
                    { icon: Instagram, url: BRAND.social.instagram },
                    { icon: Youtube, url: BRAND.social.youtube },
                    { icon: Twitter, url: BRAND.social.twitter },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-foreground/50 hover:text-primary transition-colors"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
