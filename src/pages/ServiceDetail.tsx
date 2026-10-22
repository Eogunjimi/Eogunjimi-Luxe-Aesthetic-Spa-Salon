import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowRight, Check, Clock, MessageCircle, Users } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { StarRating } from "../components/ui/StarRating";
import { FAQSection } from "../components/home/FAQSection";
import { getTreatmentBySlug, treatments } from "../data/treatments";
import { faqs, testimonials } from "../data/content";
import { whatsappLink } from "../data/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../utils/schema";

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const treatment = getTreatmentBySlug(slug);
  const path = `/treatments/${slug}`;

  useSeo({
    title: treatment?.seoTitle ?? "Treatments | Luxe Aesthetics Spa Saloon",
    description:
      treatment?.seoDescription ?? "Explore luxury treatments at Luxe Aesthetics Spa Saloon.",
    path,
    image: treatment?.image,
    type: "website",
    schema: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Treatments", path: "/treatments" },
        { name: treatment?.name ?? "Treatment", path },
      ]),
      ...(treatment
        ? [
            serviceSchema({
              name: treatment.name,
              description: treatment.description,
              path,
              category: treatment.category,
              image: treatment.image,
            }),
            faqSchema(faqs),
          ]
        : []),
    ],
  });

  if (!treatment) return <Navigate to="/treatments" replace />;

  const related = treatments.filter((t) => t.slug !== treatment.slug && t.category === treatment.category).slice(0, 3);
  const relevantTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-dark pt-32">
        <img src={treatment.image} alt={treatment.name} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/10" />
        <Container className="relative pb-20">
          <Reveal>
            <Link to="/treatments" className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-light hover:text-gold">
              ← Back to Treatments
            </Link>
            <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              {treatment.category}
            </span>
            <h1 className="max-w-2xl text-[34px] font-medium leading-tight text-ivory sm:text-[50px]">{treatment.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{treatment.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/contact" size="lg" icon={<ArrowRight size={16} />}>
                Book Now
              </Button>
              <Button href={whatsappLink(`Hi, I'd like to book ${treatment.name}.`)} variant="secondary" size="lg" icon={<MessageCircle size={16} />} className="border-cream/30 text-cream hover:border-gold-light hover:text-gold-light">
                WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-ivory py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-medium text-ink sm:text-3xl">About This Treatment</h2>
                <p className="mt-5 leading-relaxed text-ink/65">{treatment.description}</p>
              </Reveal>

              <Reveal delay={0.08}>
                <h3 className="mt-12 text-xl font-medium text-ink">Key Benefits</h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {treatment.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-2xl bg-cream/50 p-4 text-sm text-ink/70">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gold/20 p-6">
                    <Clock className="text-gold-dark" size={20} />
                    <h4 className="mt-3 font-medium text-ink">Treatment Duration</h4>
                    <p className="mt-1 text-sm text-ink/60">{treatment.duration}</p>
                  </div>
                  <div className="rounded-2xl border border-gold/20 p-6">
                    <Users className="text-gold-dark" size={20} />
                    <h4 className="mt-3 font-medium text-ink">Ideal Candidate</h4>
                    <p className="mt-1 text-sm text-ink/60">{treatment.idealFor}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="mt-12 text-xl font-medium text-ink">How It Works</h3>
                <ol className="mt-5 space-y-4">
                  {["Consultation to understand your goals", "Personalized treatment plan design", "Treatment performed by a certified specialist", "Aftercare guidance for lasting results"].map(
                    (step, i) => (
                      <li key={step} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold-dark">
                          {i + 1}
                        </span>
                        <p className="text-sm text-ink/65">{step}</p>
                      </li>
                    )
                  )}
                </ol>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div>
              <Reveal delay={0.1}>
                <div className="sticky top-28 rounded-3xl bg-ink p-8 text-cream shadow-luxe">
                  <h3 className="font-display text-2xl italic text-gold-light">Ready to Begin?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    Book a consultation and let our specialists design a treatment plan tailored to you.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button to="/contact" className="w-full">
                      Book Now
                    </Button>
                    <Button href={whatsappLink(`Hi, I'd like to know more about ${treatment.name}.`)} variant="secondary" className="w-full border-cream/25 text-cream hover:border-gold-light hover:text-gold-light">
                      Ask on WhatsApp
                    </Button>
                  </div>
                  <div className="mt-6 space-y-3 border-t border-cream/10 pt-6 text-xs text-cream/60">
                    <p className="flex justify-between"><span>Duration</span><span className="text-cream/90">{treatment.duration}</span></p>
                    <p className="flex justify-between"><span>Category</span><span className="text-cream/90">{treatment.category}</span></p>
                    <p className="flex justify-between"><span>Availability</span><span className="text-cream/90">Open 24 Hours</span></p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-cream/40 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Gallery" title={`Inside ${treatment.name}`} />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {treatment.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.06} direction="scale">
                <img src={src} alt={`${treatment.name} ${i + 1}`} className="aspect-[4/5] w-full rounded-2xl object-cover" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Client Reviews" title="What Clients Are Saying" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relevantTestimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5">
                  <StarRating rating={t.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-ink/8 pt-4">
                    <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-cream/40 py-20 sm:py-24">
          <Container>
            <SectionHeading eyebrow="You Might Also Like" title="Related Treatments" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  to={`/treatments/${t.slug}`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1.5 hover:shadow-luxe-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-ink">{t.name}</h3>
                    <p className="mt-1 text-sm text-ink/55">{t.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FAQSection />
    </>
  );
}
