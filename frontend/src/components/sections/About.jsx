import { motion } from "framer-motion";
import { ABOUT_IMAGES, SITE } from "../../data/site";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 bg-[#F9F6F0]" data-testid="about-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image stack — asymmetric */}
        <div className="lg:col-span-6 relative h-[560px] md:h-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute top-0 left-0 w-[72%] aspect-[4/5] overflow-hidden"
          >
            <img src={ABOUT_IMAGES[1]} alt="Silent Wald cottage" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 right-0 w-[60%] aspect-[4/3] overflow-hidden border-8 border-[#F9F6F0]"
          >
            <img src={ABOUT_IMAGES[0]} alt="Silent Wald grounds" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute -top-6 -left-6 hidden md:block">
            <div className="font-serif italic text-[#B88645]/30 text-[180px] leading-none select-none">W</div>
          </div>
        </div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-6"
        >
          <div className="overline mb-6">Our Story · Est. {SITE.established}</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1A3626] mb-8" data-testid="about-headline">
            A quarter century of quiet, kept by the forest.
          </h2>
          <p className="text-[#4A5D4E] text-base md:text-lg leading-relaxed mb-6">
            <em className="font-serif italic text-[#1A3626]">Wald</em> — German for forest. Twenty-five years ago, we began with a simple
            idea: protect a piece of land near Hyderabad, plant deeply, and let it grow into a place where people could exhale.
          </p>
          <p className="text-[#4A5D4E] text-base md:text-lg leading-relaxed mb-10">
            Today Silent Wald is {SITE.acres} acres of canopy, cottages, and celebrations — host to weddings remembered for
            decades, corporate retreats that re-set teams, and quiet weekends that re-set families. The trees, taller every year,
            do most of the work.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E0D8]">
            <Stat label="Acres of forest" value="250" />
            <Stat label="Years of stories" value="25+" />
            <Stat label="Guest capacity" value="700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div data-testid={`about-stat-${label.toLowerCase().replaceAll(" ", "-")}`}>
      <div className="font-serif text-4xl md:text-5xl text-[#1A3626] mb-2">{value}</div>
      <div className="text-xs uppercase tracking-[0.15em] text-[#4A5D4E]">{label}</div>
    </div>
  );
}
