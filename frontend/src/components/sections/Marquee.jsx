import { motion } from "framer-motion";

const PHRASES = ["Forest Weddings", "Corporate Retreats", "Family Getaways", "Film Shoots", "Birthdays Under Stars", "Quiet Weekends"];

export default function Marquee() {
  const items = [...PHRASES, ...PHRASES];
  return (
    <section className="bg-[#1A3626] py-10 md:py-14 overflow-hidden border-y border-[#2C4F3B]" data-testid="marquee">
      <motion.div
        className="flex gap-16 whitespace-nowrap marquee-track"
        aria-hidden="true"
      >
        {items.map((p, i) => (
          <span key={i} className="font-serif italic text-4xl md:text-6xl text-[#F9F6F0]/70 inline-flex items-center gap-16">
            {p}
            <span className="w-2 h-2 rounded-full bg-[#B88645] inline-block" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
