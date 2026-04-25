import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { AMENITIES } from "../../data/site";

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-24 md:py-32 bg-[#1A3626] text-[#F9F6F0]" data-testid="amenities-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="overline mb-5 !text-[#D4AC78]">Amenities</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]" data-testid="amenities-headline">
              Everything the day needs. Nothing it doesn't.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[#F9F6F0]/70 text-base md:text-lg leading-relaxed">
              From the lawn that hosts seven hundred to the bonfire that hosts eight, every Silent Wald amenity is built
              for the way Hyderabad actually celebrates — generously, late into the night, and with food at the centre.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#2C4F3B]">
          {AMENITIES.map((a, i) => {
            const Icon = Icons[a.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="bg-[#1A3626] p-8 md:p-10 hover:bg-[#2C4F3B] transition-colors duration-500 group"
                data-testid={`amenity-${a.title.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`}
              >
                <Icon size={28} className="text-[#D4AC78] mb-6 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-serif text-2xl mb-2">{a.title}</h3>
                <p className="text-sm text-[#F9F6F0]/65 leading-relaxed">{a.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
