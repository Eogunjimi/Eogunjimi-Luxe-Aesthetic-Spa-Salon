import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  useSeo("Page Not Found | Luxe Aesthetics Spa Saloon");

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-ivory pt-24">
      <Container className="text-center">
        <span className="font-display text-7xl italic text-gold">404</span>
        <h1 className="mt-4 text-2xl font-medium text-ink">This page has wandered off for a spa day.</h1>
        <p className="mt-3 text-ink/60">Let's get you back to something beautiful.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
