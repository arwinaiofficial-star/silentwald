import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../data/site";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 md:py-32 bg-[#F2EFE9]" data-testid="faq-section">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="overline mb-5">FAQ</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A3626] leading-[1.05]" data-testid="faq-headline">
            Practical questions, honestly answered.
          </h2>
        </div>
        <div className="md:col-span-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#1A3626]/15">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className={`font-serif text-xl md:text-2xl transition-colors ${isOpen ? "text-[#B88645]" : "text-[#1A3626]"}`}>
                    {f.q}
                  </span>
                  <span className="mt-1 shrink-0 text-[#1A3626]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[#4A5D4E] leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
