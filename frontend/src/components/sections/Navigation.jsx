import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../../data/site";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F9F6F0]/85 backdrop-blur-xl border-b border-[#E5E0D8]"
          : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2" data-testid="brand-logo">
          <span className={`font-serif text-2xl md:text-3xl ${scrolled ? "text-[#1A3626]" : "text-white"}`}>
            Silent
          </span>
          <span className={`font-serif italic text-2xl md:text-3xl ${scrolled ? "text-[#B88645]" : "text-[#D4AC78]"}`}>
            Wald
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
                scrolled ? "text-[#1C1B1A] hover:text-[#B88645]" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-book-now"
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all ${
              scrolled
                ? "bg-[#1A3626] text-[#F9F6F0] hover:bg-[#2C4F3B]"
                : "bg-white text-[#1A3626] hover:bg-[#F9F6F0]"
            }`}
          >
            Plan Your Visit
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? "text-[#1A3626]" : "text-white"}`}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#F9F6F0] border-t border-[#E5E0D8] overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] text-[#1C1B1A]"
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </a>
              ))}
              <a href={`tel:${SITE.phone}`} className="btn-accent w-fit" data-testid="mobile-call">
                Call {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
