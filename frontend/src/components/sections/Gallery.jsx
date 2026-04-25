import { motion } from "framer-motion";
import { GALLERY } from "../../data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F2EFE9]" data-testid="gallery-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="overline mb-5">Gallery</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A3626] leading-[1.05] max-w-2xl" data-testid="gallery-headline">
              Moments from the forest, captured.
            </h2>
          </div>
          <a href={`https://www.instagram.com/silentwald_resorts/`} target="_blank" rel="noreferrer" className="btn-accent" data-testid="instagram-link">
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {GALLERY.map((src, i) => {
            // Bento sizing
            const span = [
              "md:col-span-2 md:row-span-2",
              "",
              "",
              "md:col-span-2",
              "",
              "md:col-span-2",
              "",
              "",
              "",
            ][i] || "";
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.08 }}
                className={`overflow-hidden aspect-square ${span} group`}
                data-testid={`gallery-image-${i}`}
              >
                <img
                  src={src}
                  alt={`Silent Wald gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
