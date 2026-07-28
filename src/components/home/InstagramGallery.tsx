import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { InstagramIcon } from "../ui/SocialIcons";
import { instagramPosts } from "../../data/content";
import { business } from "../../data/business";

export function InstagramGallery() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionHeading eyebrow="Follow The Journey" title="@luxe_aesthetics.spa.saloon
 on Instagram" className="mx-auto" />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {instagramPosts.map((src, i) => (
            <Reveal key={i} delay={i * 0.04} direction="scale">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <img src={src} alt="Luxe Aesthetics Instagram post" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/40">
                  <InstagramIcon className="h-6 w-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={business.social.instagram} variant="secondary" size="md" icon={<ArrowUpRight size={15} />}>
            Follow Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
