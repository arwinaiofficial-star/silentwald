import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES } from "../../data/site";

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#F9F6F0]" data-testid="experiences-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <div className="overline mb-5">Experiences</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A3626] max-w-3xl mx-auto leading-[1.05]" data-testid="experiences-headline">
            One forest, four very different days.
          </h2>
        </div>

        <div className="space-y-6 md:space-y-10">
          {EXPERIENCES.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              data-testid={`experience-row-${i}`}
            >
              <div className="overflow-hidden aspect-[5/4] md:aspect-[4/3] group">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
              <div className="md:px-6 lg:px-12">
                <div className="overline mb-4">0{i + 1} / 0{EXPERIENCES.length}</div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A3626] mb-6 leading-tight">
                  {e.title}
                </h3>
                <p className="text-[#4A5D4E] text-base md:text-lg leading-relaxed mb-8">{e.blurb}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] font-medium text-[#1A3626] border-b border-[#1A3626] pb-1 hover:gap-5 transition-all"
                  data-testid={`experience-cta-${i}`}
                >
                  Plan {e.title.toLowerCase()} <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
