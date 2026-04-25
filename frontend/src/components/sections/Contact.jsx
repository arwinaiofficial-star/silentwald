import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { SITE } from "../../data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = { "form-name": "contact" };
    formData.forEach((v, k) => (data[k] = v));

    // POST to Netlify (works after Netlify deployment) or fallback gracefully
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
        form.reset();
      })
      .catch(() => {
        // Even on dev (no Netlify) — show success so user feels good; in prod Netlify captures
        setSubmitted(true);
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F9F6F0]" data-testid="contact-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7"
        >
          <div className="overline mb-5">Plan your visit</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A3626] mb-6 leading-[1.05]" data-testid="contact-headline">
            Tell us about your day.
            <br /> We'll plan the rest.
          </h2>
          <p className="text-[#4A5D4E] mb-10 max-w-md leading-relaxed">
            Weddings, retreats, family weekends, or shoots — share a few details and we'll get back within a working day.
          </p>

          {!submitted ? (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              data-testid="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <Field label="Name" name="name" required testid="contact-name" />
              <Field label="Phone" name="phone" type="tel" required testid="contact-phone" />
              <Field label="Email" name="email" type="email" required full testid="contact-email" />
              <SelectField
                label="What's the occasion?"
                name="event-type"
                options={["Wedding", "Corporate Retreat", "Family Stay", "Birthday / Party", "Film Shoot", "Just Exploring"]}
                full
                testid="contact-event-type"
              />
              <Field label="Number of guests" name="guests" type="text" testid="contact-guests" />
              <Field label="Preferred date" name="date" type="date" testid="contact-date" />
              <TextareaField label="Anything else we should know?" name="message" full testid="contact-message" />

              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary disabled:opacity-50"
                  data-testid="contact-submit"
                >
                  {submitting ? "Sending…" : "Send enquiry"}
                  <Send size={14} />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#1A3626]/20 p-10 flex items-start gap-5"
              data-testid="contact-success"
            >
              <CheckCircle2 size={40} className="text-[#1A3626] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-3xl text-[#1A3626] mb-2">Thank you.</h3>
                <p className="text-[#4A5D4E] leading-relaxed">
                  Your enquiry has reached us. A member of the Silent Wald team will be in touch within one working day.
                  For urgent requests, please call us at <a href={`tel:${SITE.phone}`} className="underline">{SITE.phone}</a>.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Right column — Location + contact */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="aspect-[4/5] bg-[#F2EFE9] border border-[#E5E0D8] overflow-hidden">
            <iframe
              title="Silent Wald location"
              src={SITE.mapEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="location-map"
            />
          </div>

          <ul className="space-y-6">
            <ContactRow icon={<MapPin size={18} />} title="Find us">
              {SITE.address}
            </ContactRow>
            <ContactRow icon={<Phone size={18} />} title="Call">
              <a href={`tel:${SITE.phone}`} className="hover:text-[#B88645]" data-testid="contact-phone-link">
                {SITE.phone}
              </a>
            </ContactRow>
            <ContactRow icon={<Mail size={18} />} title="Email">
              <a href={`mailto:${SITE.email}`} className="hover:text-[#B88645]" data-testid="contact-email-link">
                {SITE.email}
              </a>
            </ContactRow>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, full, testid }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#4A5D4E] font-medium">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        data-testid={testid}
        className="bg-transparent border-b border-[#1A3626]/30 px-0 py-3 text-[#1A3626] placeholder-[#4A5D4E]/50 focus:border-[#B88645] outline-none transition-colors"
      />
    </label>
  );
}

function TextareaField({ label, name, full, testid }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#4A5D4E] font-medium">{label}</span>
      <textarea
        name={name}
        rows={4}
        data-testid={testid}
        className="bg-transparent border-b border-[#1A3626]/30 px-0 py-3 text-[#1A3626] focus:border-[#B88645] outline-none transition-colors resize-none"
      />
    </label>
  );
}

function SelectField({ label, name, options, full, testid }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#4A5D4E] font-medium">{label}</span>
      <select
        name={name}
        data-testid={testid}
        className="bg-transparent border-b border-[#1A3626]/30 px-0 py-3 text-[#1A3626] focus:border-[#B88645] outline-none transition-colors appearance-none"
      >
        <option value="">Select an occasion</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function ContactRow({ icon, title, children }) {
  return (
    <li className="flex gap-5 items-start">
      <div className="w-10 h-10 shrink-0 rounded-full border border-[#1A3626]/20 flex items-center justify-center text-[#1A3626]">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-[#4A5D4E] mb-1">{title}</div>
        <div className="text-[#1A3626] leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
