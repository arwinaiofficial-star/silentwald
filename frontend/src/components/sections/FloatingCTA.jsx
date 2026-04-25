import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { SITE } from "../../data/site";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
          data-testid="floating-cta"
        >
          <AnimatePresence>
            {open && (
              <>
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.05 }}
                  href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Silent%20Wald%2C%20I'd%20like%20to%20enquire%20about%20a%20visit.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white pl-5 pr-6 py-3 rounded-full shadow-lg flex items-center gap-3 text-sm font-medium hover:scale-[1.02] transition-transform"
                  data-testid="floating-whatsapp"
                >
                  <MessageCircle size={18} /> WhatsApp us
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  href={`tel:${SITE.phone}`}
                  className="bg-[#1A3626] text-[#F9F6F0] pl-5 pr-6 py-3 rounded-full shadow-lg flex items-center gap-3 text-sm font-medium hover:scale-[1.02] transition-transform"
                  data-testid="floating-call"
                >
                  <Phone size={18} /> Call us
                </motion.a>
              </>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="bg-[#B88645] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-[#9C7036] transition-colors"
            aria-label={open ? "Close" : "Open contact"}
            data-testid="floating-toggle"
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
