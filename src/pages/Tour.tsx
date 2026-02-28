import { motion } from "framer-motion";
import { Ticket, MapPin, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { TOUR_DATES } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

// Group by month
const grouped = TOUR_DATES.reduce<Record<string, typeof TOUR_DATES>>((acc, d) => {
  if (!acc[d.month]) acc[d.month] = [];
  acc[d.month].push(d);
  return acc;
}, {});

const TourPage = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl sm:text-8xl tracking-wider text-primary neon-text mb-4"
          >
            TOUR DATES
          </motion.h1>
          <p className="text-accent-foreground/60 max-w-lg mx-auto">
            Catch Honeybear Giggles live. Every show is a one-of-a-kind experience.
          </p>
        </section>

        {/* Dates */}
        <section className="pb-20 px-4 sm:px-6">
          <div className="container-tight max-w-3xl mx-auto">
            {Object.entries(grouped).map(([month, dates]) => (
              <div key={month} className="mb-10">
                <h2 className="font-display text-2xl tracking-widest text-secondary mb-4">{month.toUpperCase()}</h2>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                  {dates.map((show, i) => (
                    <motion.div
                      key={show.id}
                      variants={fadeUp}
                      custom={i}
                      className="flex items-center justify-between p-4 sm:p-5 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                        <div className="text-center min-w-[70px]">
                          <span className="font-display text-lg text-primary tracking-wider">{show.date}</span>
                          <p className="text-[10px] text-accent-foreground/40 uppercase">{show.day}</p>
                        </div>
                        <div className="min-w-0">
                          <p className="font-display text-lg tracking-wide text-accent-foreground truncate">{show.city}</p>
                          <div className="flex items-center gap-1.5 text-xs text-accent-foreground/50">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span className="truncate">{show.venue}</span>
                          </div>
                        </div>
                      </div>
                      {show.soldOut ? (
                        <span className="bg-accent-foreground/10 text-accent-foreground/40 px-4 py-2 rounded-md font-display text-xs tracking-widest shrink-0">
                          SOLD OUT
                        </span>
                      ) : (
                        <a
                          href={show.ticketUrl}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-display text-xs tracking-widest hover:bg-primary/80 transition-all hover:scale-105 flex items-center gap-1.5 shrink-0"
                        >
                          <Ticket className="w-3.5 h-3.5" />
                          GET TICKETS
                        </a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="section-padding bg-background text-center">
          <div className="container-tight max-w-xl mx-auto">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl tracking-wider text-foreground mb-3">
              WANT HONEYBEAR AT <span className="text-primary">YOUR VENUE?</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Private events, festivals, corporate gigs — let's make it happen.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-display tracking-widest text-sm hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              BOOKING INQUIRY
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TourPage;
