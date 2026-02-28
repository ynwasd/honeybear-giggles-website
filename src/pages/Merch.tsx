import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { MERCH_ITEMS } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const MerchPage = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Header />
      <main className="pt-24">
        {/* Promo Banner */}
        <div className="bg-secondary text-secondary-foreground text-center py-3 px-4">
          <span className="font-display tracking-widest text-sm">🔥 NEW DROP — LIMITED RUN AVAILABLE NOW 🔥</span>
        </div>

        <section className="section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl sm:text-8xl tracking-wider text-primary neon-text mb-4"
          >
            MERCH
          </motion.h1>
          <p className="text-accent-foreground/60 max-w-md mx-auto">
            Rep Honeybear Giggles. Look good doing it.
          </p>
        </section>

        <section className="pb-20 px-4 sm:px-6">
          <div className="container-tight">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MERCH_ITEMS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.buyUrl}
                  variants={fadeUp}
                  custom={i}
                  className="group block"
                >
                  <div className="aspect-square rounded-lg bg-accent-foreground/5 border border-accent-foreground/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-all card-glow">
                    <span className="font-display text-5xl text-accent-foreground/8">{item.category.toUpperCase()}</span>
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-display tracking-widest px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-display tracking-widest text-sm text-primary flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4" />
                        BUY NOW
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="font-display tracking-wider text-accent-foreground group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-sm text-secondary font-bold">${item.price}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent-foreground/20 group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MerchPage;
