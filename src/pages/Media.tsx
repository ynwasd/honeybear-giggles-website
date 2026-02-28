import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { VIDEOS, PHOTO_PLACEHOLDERS } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const MediaPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

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
            MEDIA
          </motion.h1>
        </section>

        {/* Videos */}
        <section className="pb-16 px-4 sm:px-6">
          <div className="container-tight">
            <h2 className="font-display text-3xl tracking-widest text-secondary mb-6">VIDEOS</h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VIDEOS.map((v, i) => (
                <motion.div key={v.id} variants={fadeUp} custom={i}>
                  {activeVideo === v.id ? (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveVideo(v.id)}
                      className="w-full aspect-video rounded-lg overflow-hidden bg-accent-foreground/5 border border-accent-foreground/10 relative group cursor-pointer card-glow text-left"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-accent/50 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                  <p className="text-sm text-accent-foreground/70 mt-2 font-display tracking-wider">{v.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Photos */}
        <section className="pb-20 px-4 sm:px-6">
          <div className="container-tight">
            <h2 className="font-display text-3xl tracking-widest text-secondary mb-6">PHOTOS</h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {PHOTO_PLACEHOLDERS.map((p, i) => (
                <motion.button
                  key={p.id}
                  variants={fadeUp}
                  custom={i}
                  onClick={() => setLightboxIdx(i)}
                  className={`rounded-lg overflow-hidden bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/30 transition-all group card-glow ${
                    i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center text-accent-foreground/10 font-display text-2xl group-hover:text-primary/20 transition-colors">
                    📸
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-8"
            onClick={() => setLightboxIdx(null)}
          >
            <button className="absolute top-6 right-6 text-accent-foreground/60 hover:text-primary transition-colors" onClick={() => setLightboxIdx(null)}>
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-2xl aspect-square bg-accent-foreground/5 rounded-lg flex items-center justify-center border border-accent-foreground/10">
              <span className="font-display text-4xl text-accent-foreground/20">
                PHOTO {lightboxIdx + 1}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MediaPage;
