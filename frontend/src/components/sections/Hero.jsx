import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO_IMAGE, SITE } from "../../data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[680px] w-full overflow-hidden"
      data-testid="hero-section"
    >
      <motion.img
        src={HERO_IMAGE}
        alt="Silent Wald — forest sanctuary"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="overline text-[#D4AC78] mb-6"
          data-testid="hero-overline"
        >
          Established {SITE.established} · Shamirpet, Hyderabad
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.1 }}
          className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] max-w-[1100px] tracking-tight"
          data-testid="hero-headline"
        >
          Where silence <em className="italic text-[#D4AC78]">meets</em>
          <br /> luxury, in the heart
          <br /> of the forest.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-white/80 text-base md:text-lg max-w-xl mt-8 leading-relaxed"
        >
          250 acres of canopy, cottages, and celebrations — a quarter-century-old
          retreat for weddings, getaways, and corporate gatherings just outside Hyderabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a href="#contact" className="btn-primary !bg-[#B88645] hover:!bg-[#9C7036]" data-testid="hero-book-cta">
            Plan your visit
          </a>
          <a href="#stay" className="btn-ghost" data-testid="hero-explore-cta">
            Explore the estate
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.8, duration: 0.6, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white text-xs uppercase tracking-[0.25em] flex flex-col items-center gap-3"
        data-testid="hero-scroll-indicator"
      >
        Scroll
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
