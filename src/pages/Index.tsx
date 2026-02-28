import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ticket, Play, ArrowRight, Star, Mail, ChevronRight } from "lucide-react";
import { BRAND, ANNOUNCEMENT, TOUR_DATES, MERCH_ITEMS, VIDEOS, PRESS_QUOTES } from "@/data/content";
import { GetTicketsModal } from "@/components/GetTicketsModal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import bioImg from "@/assets/comedian-bio.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const [ticketsOpen, setTicketsOpen] = useState(false);
  const upcomingShows = TOUR_DATES.filter((d) => !d.soldOut).slice(0, 4);
  const featuredMerch = MERCH_ITEMS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Announcement Banner */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-secondary text-secondary-foreground">
        <div className="container-tight flex items-center justify-center gap-3 py-2 px-4">
          <span className="text-xs sm:text-sm font-bold">{ANNOUNCEMENT.text}</span>
          <a href={ANNOUNCEMENT.link} className="text-xs font-display tracking-wider text-primary hover:underline flex items-center gap-1">
            {ANNOUNCEMENT.linkText} <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-24 pt-24">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-wider neon-text text-primary leading-none mb-4"
          >
            HONEYBEAR<br />GIGGLES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-accent-foreground/80 mb-8 font-body"
          >
            {BRAND.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setTicketsOpen(true)}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-display text-lg tracking-widest hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Ticket className="w-5 h-5" />
              SEE TOUR DATES
            </button>
            <a
              href="#media"
              className="border border-accent-foreground/30 text-accent-foreground px-8 py-3.5 rounded-md font-display text-lg tracking-widest hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              WATCH NOW
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Bio */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp} custom={0} className="order-2 md:order-1">
              <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-foreground mb-4">
                WHO IS <span className="text-primary">HONEYBEAR?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {BRAND.bio}
              </p>
              <Link
                to="/booking"
                className="font-display tracking-wider text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
              >
                BOOK FOR YOUR EVENT <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden card-glow">
                <img src={bioImg} alt="Honeybear Giggles performing" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tour Preview */}
      <section className="section-padding bg-accent">
        <div className="container-tight">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl sm:text-5xl tracking-wider text-accent-foreground text-center mb-10">
              UPCOMING <span className="text-primary">SHOWS</span>
            </motion.h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {upcomingShows.map((show, i) => (
                <motion.div
                  key={show.id}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex items-center justify-between p-4 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-center min-w-[60px]">
                      <span className="font-display text-lg text-primary tracking-wider">{show.date}</span>
                    </div>
                    <div>
                      <p className="font-display text-lg tracking-wide text-accent-foreground">{show.city}</p>
                      <p className="text-xs text-accent-foreground/50">{show.venue}</p>
                    </div>
                  </div>
                  <a
                    href={show.ticketUrl}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-display text-xs tracking-widest hover:bg-primary/80 transition-all hover:scale-105 flex items-center gap-1.5 shrink-0"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    TICKETS
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/tour" className="font-display tracking-widest text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5">
                SEE ALL DATES <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Media */}
      <section id="media" className="section-padding bg-background">
        <div className="container-tight">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl sm:text-5xl tracking-wider text-foreground text-center mb-10">
              WATCH <span className="text-primary">HONEYBEAR</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="aspect-video rounded-lg overflow-hidden card-glow mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEOS[0].youtubeId}`}
                title={VIDEOS[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-3">
              {VIDEOS.slice(1, 4).map((v, i) => (
                <motion.div key={v.id} variants={fadeUp} custom={i + 2}>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted relative group cursor-pointer card-glow">
                    <img
                      src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-accent/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-display tracking-wider">{v.title}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/media" className="font-display tracking-widest text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5">
                ALL MEDIA <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Merch Spotlight */}
      <section className="section-padding bg-accent">
        <div className="container-tight">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl sm:text-5xl tracking-wider text-accent-foreground text-center mb-10">
              GET THE <span className="text-secondary">MERCH</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredMerch.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.buyUrl}
                  variants={fadeUp}
                  custom={i + 1}
                  className="group block"
                >
                  <div className="aspect-square rounded-lg bg-accent-foreground/5 border border-accent-foreground/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-all">
                    <span className="font-display text-4xl text-accent-foreground/10">{item.category.toUpperCase()}</span>
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-display tracking-widest px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <p className="font-display tracking-wider text-accent-foreground">{item.name}</p>
                    <p className="text-sm text-primary font-bold">${item.price}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/merch" className="font-display tracking-widest text-sm text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1.5">
                SHOP ALL <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="section-padding bg-background spotlight-sweep">
        <div className="container-tight">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PRESS_QUOTES.map((q, i) => (
              <motion.blockquote
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-center p-6"
              >
                <Star className="w-4 h-4 text-secondary mx-auto mb-3" />
                <p className="text-foreground italic text-sm leading-relaxed mb-3">"{q.quote}"</p>
                <cite className="text-primary font-display tracking-wider text-xs not-italic">— {q.source}</cite>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Gallery Placeholder */}
      <section className="section-padding bg-accent">
        <div className="container-tight">
          <h2 className="font-display text-4xl tracking-wider text-accent-foreground text-center mb-8">
            FOLLOW <span className="text-primary">@HONEYBEARGIGGLES</span>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md bg-accent-foreground/5 border border-accent-foreground/10 flex items-center justify-center">
                <span className="text-accent-foreground/10 font-display text-xs">POST {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-xl mx-auto text-center">
          <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl tracking-wider text-foreground mb-3">
            DON'T MISS A <span className="text-primary">THING</span>
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Tour announcements, exclusive content, and behind-the-scenes nonsense. Straight to your inbox.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-muted border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-display tracking-widest text-sm hover:bg-primary/90 transition-all hover:scale-105"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <GetTicketsModal open={ticketsOpen} onOpenChange={setTicketsOpen} />
    </div>
  );
};

export default Index;
