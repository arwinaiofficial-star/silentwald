import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COTTAGES } from "../../data/site";

export default function Stay() {
  return (
    <section id="stay" className="relative py-24 md:py-32 bg-[#F2EFE9]" data-testid="stay-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="overline mb-5">The Stay</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A3626] leading-[1.05] max-w-2xl" data-testid="stay-headline">
              Cottages built around the trees, not the other way around.
            </h2>
          </div>
          <p className="text-[#4A5D4E] max-w-md text-base md:text-lg leading-relaxed">
            Three styles of stay — for couples, for groups, for whole families. Air-conditioned, kitchenette-equipped,
            and never further than a short walk from the lawn or the pool.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {COTTAGES.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group bg-white border border-[#E5E0D8] overflow-hidden flex flex-col"
              data-testid={`cottage-card-${i}`}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1A3626]">{c.name}</h3>
                  <ArrowUpRight className="text-[#B88645] mt-1 shrink-0" size={22} />
                </div>
                <p className="text-[#4A5D4E] leading-relaxed text-sm md:text-base">{c.desc}</p>
                <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#E5E0D8]">
                  {c.feat.map((f) => (
                    <li
                      key={f}
                      className="text-[11px] uppercase tracking-[0.12em] text-[#1A3626] bg-[#F2EFE9] px-3 py-1.5 rounded-full"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary" data-testid="stay-enquire-cta">
            Enquire about availability
          </a>
        </div>
      </div>
    </section>
  );
}
