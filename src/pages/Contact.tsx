import { useState, type ReactNode } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { InstagramIcon, FacebookIcon } from "../components/ui/SocialIcons";
import { heroImages } from "../data/images";
import { business, whatsappLink } from "../data/business";
import { treatments } from "../data/treatments";

const timeSlots = ["Morning (8am - 12pm)", "Afternoon (12pm - 4pm)", "Evening (4pm - 8pm)", "Night (8pm - 12am)", "Late Night / Early Morning"];

export default function Contact() {
  useSeo(
    "Book an Appointment | Luxe Aesthetics Spa Saloon",
    "Book your appointment or consultation at Luxe Aesthetics Spa Saloon in Port Harcourt or Warri. Call, WhatsApp or fill our luxury booking form — open 24 hours."
  );

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Book Your Visit to Luxe Aesthetics"
        description="Reach out via our booking form, phone, or WhatsApp — our team is available 24 hours a day to help you plan your visit."
        image={heroImages.contact}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="rounded-[32px] bg-white p-8 shadow-luxe-sm ring-1 ring-ink/5 sm:p-12">
                <SectionHeading align="left" eyebrow="Booking Form" title="Reserve Your Appointment" className="mx-0" />

                {submitted ? (
                  <div className="mt-10 rounded-2xl bg-cream/60 p-8 text-center">
                    <p className="text-lg font-medium text-ink">Thank you! 🎉</p>
                    <p className="mt-2 text-sm text-ink/60">
                      Your request has been received. Our team will reach out shortly to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
                  >
                    <Field label="Full Name" required>
                      <input required type="text" placeholder="Jane Doe" className={inputClass} />
                    </Field>
                    <Field label="Phone Number" required>
                      <input required type="tel" placeholder="+234 800 000 0000" className={inputClass} />
                    </Field>
                    <Field label="Email Address" required>
                      <input required type="email" placeholder="jane@email.com" className={inputClass} />
                    </Field>
                    <Field label="Treatment Interested In">
                      <select className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Select a treatment
                        </option>
                        {treatments.map((t) => (
                          <option key={t.slug} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred Date">
                      <input type="date" className={inputClass} />
                    </Field>
                    <Field label="Preferred Time">
                      <select className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Message" full>
                      <textarea rows={4} placeholder="Tell us about your goals..." className={inputClass} />
                    </Field>

                    <div className="sm:col-span-2">
                      <Button type="submit" size="lg" className="w-full sm:w-auto" icon={<Send size={15} />}>
                        Submit Booking Request
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <div className="rounded-[32px] bg-ink p-8 text-cream shadow-luxe sm:p-10">
                  <h3 className="font-display text-2xl italic text-gold-light">Contact Information</h3>

                  <div className="mt-7 space-y-5 text-sm">
                    <a href={business.phoneHref} className="flex items-center gap-3 text-cream/80 hover:text-gold-light">
                      <Phone size={17} className="text-gold-light" /> {business.phone}
                    </a>
                    <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-cream/80 hover:text-gold-light">
                      <Mail size={17} className="text-gold-light" /> {business.email}
                    </a>
                    <div className="flex items-center gap-3 text-cream/80">
                      <Clock size={17} className="text-gold-light" /> {business.hours}
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button href={whatsappLink()} className="flex-1" icon={<MessageCircle size={15} />}>
                      WhatsApp
                    </Button>
                    <a
                      href={business.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 hover:border-gold-light hover:text-gold-light"
                    >
                      <InstagramIcon width={17} height={17} />
                    </a>
                    <a
                      href={business.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 hover:border-gold-light hover:text-gold-light"
                    >
                      <FacebookIcon width={17} height={17} />
                    </a>
                  </div>
                </div>
              </Reveal>

              {business.locations.map((loc, i) => (
                <Reveal key={loc.id} delay={0.14 + i * 0.08}>
                  <div className="mt-6 rounded-[32px] border border-gold/20 bg-white p-8">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      <MapPin size={14} /> {loc.city} Location
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">{loc.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-gold-dark hover:text-gold"
                    >
                      Get Directions →
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-cream/40 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Find Us" title="Visit Our Locations" />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {business.locations.map((loc) => (
              <Reveal key={loc.id}>
                <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-ink/5">
                  <iframe
                    title={`Map to Luxe Aesthetics ${loc.city}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
                    className="h-80 w-full border-0"
                    loading="lazy"
                  />
                  <div className="bg-white p-5">
                    <p className="font-medium text-ink">{loc.city}, {loc.state}</p>
                    <p className="text-sm text-ink/55">{loc.address}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/12 bg-ivory/60 px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

function Field({
  label,
  children,
  required,
  full,
}: {
  label: string;
  children: ReactNode;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`block text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block font-medium text-ink/75">
        {label} {required && <span className="text-gold-dark">*</span>}
      </span>
      {children}
    </label>
  );
}
