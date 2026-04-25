import { Instagram, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "../../data/site";

export default function Footer() {
  return (
    <footer className="bg-[#1A3626] text-[#F9F6F0] pt-24 pb-10 relative overflow-hidden" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl md:text-4xl mb-6">
              Silent <em className="italic text-[#D4AC78]">Wald</em>
            </div>
            <p className="text-[#F9F6F0]/65 leading-relaxed max-w-md mb-6">
              A 250-acre forest sanctuary on the outskirts of Hyderabad, hosting weddings,
              corporate retreats, and quiet weekends since {SITE.established}.
            </p>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-[#D4AC78] transition-colors" data-testid="footer-instagram">
              <Instagram size={18} /> @silentwald_resorts
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="overline mb-5 !text-[#D4AC78]">Explore</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#F9F6F0]/75 hover:text-[#D4AC78] transition-colors text-sm" data-testid={`footer-${l.label.toLowerCase()}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="overline mb-5 !text-[#D4AC78]">Visit</div>
            <p className="text-[#F9F6F0]/75 leading-relaxed text-sm mb-4 flex gap-3">
              <MapPin size={16} className="shrink-0 mt-1" /> {SITE.address}
            </p>
            <div className="space-y-2 text-sm text-[#F9F6F0]/75">
              <div><a href={`tel:${SITE.phone}`} className="hover:text-[#D4AC78]">{SITE.phone}</a></div>
              <div><a href={`mailto:${SITE.email}`} className="hover:text-[#D4AC78]">{SITE.email}</a></div>
            </div>
          </div>
        </div>

        {/* Massive watermark */}
        <div className="border-t border-[#F9F6F0]/15 pt-10 pb-2">
          <div className="font-serif text-[20vw] md:text-[18vw] leading-[0.85] text-[#F9F6F0]/8 select-none -mb-12 md:-mb-20 tracking-tight">
            silentwald
          </div>
        </div>

        <div className="border-t border-[#F9F6F0]/15 pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#F9F6F0]/50">
          <div>© {new Date().getFullYear()} Silent Wald Resort. All rights reserved.</div>
          <div>Designed with care for the forest.</div>
        </div>
      </div>
    </footer>
  );
}
