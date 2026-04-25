import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/site";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F6F0]" data-testid="testimonials-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="overline mb-5">Voices</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A3626] max-w-3xl mx-auto leading-[1.05]" data-testid="testimonials-headline">
            Twenty-five years.
            <br /> Thousands of nights remembered.
          </h2>
          <div className="flex items-center justify-center gap-2 mt-8 text-[#B88645]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#B88645" stroke="#B88645" size={18} />
            ))}
            <span className="ml-3 text-[#4A5D4E] text-sm uppercase tracking-[0.15em]">4.8 · 200+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white border border-[#E5E0D8] p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-500"
              data-testid={`testimonial-card-${i}`}
            >
              <div className="font-serif text-6xl text-[#B88645] leading-none">"</div>
              <blockquote className="text-[#1C1B1A] leading-relaxed text-base flex-1">{t.quote}</blockquote>
              <figcaption className="border-t border-[#E5E0D8] pt-4">
                <div className="font-medium text-[#1A3626]">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-[#4A5D4E] mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
