import { motion } from "framer-motion";
import { UtensilsCrossed, Soup, Wine, Cake } from "lucide-react";

const items = [
  { icon: UtensilsCrossed, title: "Multi-Cuisine", desc: "Hyderabadi, North Indian, Continental, Chinese — flexible menus from ₹500/plate." },
  { icon: Soup, title: "Live Counters", desc: "Tandoor, dosa, chaat, biryani, kababs — under the open sky." },
  { icon: Wine, title: "Bar & Mocktails", desc: "Alcohol permitted on-property; curated bar packages on request." },
  { icon: Cake, title: "Custom Cakes & Decor", desc: "We coordinate with trusted partners — or bring yours." },
];

export default function Dining() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F6F0] relative" data-testid="dining-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 aspect-[4/5] overflow-hidden"
        >
          <img
            src="/images/silentwald/exterior 2.jpeg"
            alt="Dining at Silent Wald"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="overline mb-5">Dining</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A3626] mb-8 leading-[1.05]" data-testid="dining-headline">
            Food, like the forest, takes its time.
          </h2>
          <p className="text-[#4A5D4E] text-base md:text-lg leading-relaxed mb-12 max-w-md">
            Our in-house kitchen handles everything from intimate sit-downs to grand banquets for 700, with live counters,
            multi-cuisine menus, and a relaxed view of timing — the way good evenings demand.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-[#E5E0D8]">
            {items.map((it) => (
              <div key={it.title} className="bg-[#F9F6F0] p-6">
                <it.icon size={22} className="text-[#B88645] mb-3" />
                <h3 className="font-serif text-xl text-[#1A3626] mb-1">{it.title}</h3>
                <p className="text-sm text-[#4A5D4E] leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
