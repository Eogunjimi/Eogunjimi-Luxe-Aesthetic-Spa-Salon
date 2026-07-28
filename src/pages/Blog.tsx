import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { InstagramGallery } from "../components/home/InstagramGallery";
import { heroImages } from "../data/images";
import { blogCategories, blogPosts } from "../data/content";

const topics = ["Skincare", "Body Contouring", "Facials", "Hair Care", "Wellness", "Anti-Aging"];

export default function Blog() {
  useSeo(
    "Luxury Wellness & Aesthetic Journal | Luxe Aesthetics Spa Saloon",
    "Expert insights on skincare, body contouring, wellness and beauty from Luxe Aesthetics Spa Saloon in Port Harcourt & Warri."
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  const filtered = useMemo(() => {
    return rest.filter((post) => {
      const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category, rest]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pt-40 pb-24">
        <img src={heroImages.blog} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark to-dark" />
        <Container className="relative text-center">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              <span className="h-px w-8 bg-current opacity-60" /> The Journal <span className="h-px w-8 bg-current opacity-60" />
            </span>
            <h1 className="mx-auto max-w-2xl text-[34px] font-medium leading-tight text-ivory sm:text-[48px]">
              Luxury Wellness &amp; Aesthetic Journal
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-cream/70">
              Helping you make informed decisions about your skin, body, wellness and beauty.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-9 flex max-w-md items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md ring-1 ring-white/15">
              <Search size={18} className="text-cream/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the blog..."
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {topics.map((t) => (
                <span key={t} className="rounded-full border border-cream/15 px-4 py-1.5 text-xs text-cream/60">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured article */}
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-[32px] bg-white shadow-luxe-sm ring-1 ring-ink/5 lg:grid-cols-2"
            >
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{featured.category}</span>
                <h2 className="mt-4 text-2xl font-medium leading-tight text-ink sm:text-3xl">{featured.title}</h2>
                <p className="mt-4 text-ink/60">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-xs text-ink/45">
                  <span>{featured.readTime}</span>
                  <span>•</span>
                  <span>Updated {featured.date}</span>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  Read Article <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Category grid */}
      <section className="bg-cream/40 py-16">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setCategory("All")}
              className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all ${
                category === "All" ? "border-gold bg-gold text-white" : "border-ink/15 text-ink/60 hover:border-gold hover:text-gold-dark"
              }`}
            >
              All
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all ${
                  category === cat ? "border-gold bg-gold text-white" : "border-ink/15 text-ink/60 hover:border-gold hover:text-gold-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest articles */}
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Fresh Insights" title="Latest Articles" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">{post.category}</span>
                    <h3 className="mt-3 flex-1 text-lg font-medium leading-snug text-ink">{post.title}</h3>
                    <p className="mt-2 text-sm text-ink/55 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4 text-xs text-ink/45">
                      <span>{post.readTime}</span>
                      <span className="font-semibold text-gold-dark">Read More →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-ink/50">No articles match your search just yet.</p>
            )}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="bg-ink py-20 sm:py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-medium text-ivory sm:text-4xl">Get Expert Beauty Tips Every Month</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full flex-1 rounded-full border border-cream/20 bg-white/5 px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold-light focus:outline-none"
              />
              <Button type="submit" size="md" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </Reveal>
        </Container>
      </section>

      <InstagramGallery />

      <section className="bg-cream/50 py-20 sm:py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink sm:text-3xl">Ready to Transform Your Confidence?</h2>
            <div className="mt-7 flex justify-center">
              <Button to="/contact" size="lg" icon={<ArrowRight size={16} />}>
                Book Consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
