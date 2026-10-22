import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { blogPosts } from "../data/content";
import { articleSchema, breadcrumbSchema } from "../utils/schema";

function parseDate(dateStr: string): string {
  // Accepts "July 2026" — returns first of month as ISO date.
  const d = new Date(Date.parse(`${dateStr} 1`));
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const path = `/blog/${slug}`;

  useSeo({
    title: post ? `${post.title} | Luxe Aesthetics Journal` : "Luxe Aesthetics Journal",
    description: post?.excerpt ?? "Read the latest wellness and beauty insights from Luxe Aesthetics Spa Saloon.",
    path,
    image: post?.image,
    type: "article",
    schema: post
      ? [
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            path,
            image: post.image,
            datePublished: parseDate(post.date),
            authorName: "Dr. Eve Ejaife",
          }),
        ]
      : [],
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const paragraphs = [
    `${post.excerpt} At Luxe Aesthetics Spa Saloon, our specialists take a personalized approach to every client, ensuring you fully understand what to expect before, during and after your treatment.`,
    "Before booking, it's important to have a short consultation with one of our specialists. This allows us to assess your unique goals, skin or body condition, and lifestyle — and to recommend the treatment plan that will deliver the safest, most effective results for you.",
    "Every treatment at Luxe Aesthetics is performed using premium, medical-grade equipment and products, by certified professionals who prioritize your comfort, safety and results above all else.",
    "Aftercare matters just as much as the treatment itself. Our team will walk you through simple, effective aftercare steps to protect and prolong your results — because your journey with us doesn't end when you leave the treatment room.",
  ];

  return (
    <article className="bg-ivory pt-32">
      <Container size="narrow">
        <Reveal>
          <Link to="/blog" className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark hover:text-gold">
            ← Back to Journal
          </Link>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{post.category}</span>
          <h1 className="mt-3 text-[32px] font-medium leading-tight text-ink sm:text-[44px]">{post.title}</h1>
          <div className="mt-5 flex items-center gap-4 text-xs text-ink/45">
            <span>{post.readTime}</span>
            <span>•</span>
            <span>Updated {post.date}</span>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={0.1}>
        <Container className="mt-10">
          <img src={post.image} alt={post.title} className="aspect-[16/9] w-full rounded-[32px] object-cover shadow-luxe-sm" />
        </Container>
      </Reveal>

      <Container size="narrow" className="py-16">
        <Reveal delay={0.15}>
          <div className="prose-luxe space-y-6 text-[17px] leading-relaxed text-ink/70">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl bg-cream/50 p-10 text-center">
            <h3 className="text-xl font-medium text-ink">Ready to experience it yourself?</h3>
            <Button to="/contact" icon={<ArrowRight size={15} />}>
              Book Consultation
            </Button>
          </div>
        </Reveal>
      </Container>

      <section className="bg-cream/30 py-20">
        <Container>
          <h2 className="text-center text-2xl font-medium text-ink">More From The Journal</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1.5 hover:shadow-luxe-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-dark">{p.category}</span>
                  <h3 className="mt-2 font-medium text-ink">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
