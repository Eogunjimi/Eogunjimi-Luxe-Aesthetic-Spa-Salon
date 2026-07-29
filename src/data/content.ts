import { stock } from "./images";
import { heroImages } from "./images";
import { reviewImages } from "./images"

export const testimonials = [
  {
    name: "Faithful Iwuanyanwu",
    role: "Google Review",
    rating: 5,
    quote:
      "Luxe Aesthetics is best Spa in Port harcourt. The environment is serene with top notch professional staff that delivers excellent services. I will recommend and always visit again and again.",
    image: reviewImages.review1,
    source: "Google",
  },
  {
    name: "Tamuno B.",
    role: "TripAdvisor Review",
    rating: 5,
    quote:
      "Best spa experience I've had — the fat melting sessions gave me visible results within weeks. Clean, professional, and genuinely caring staff.",
    image: stock.portraitsMale[0],
    source: "TripAdvisor",
  },
  {
    name: "Gbless Esere",
    role: "Facebook Review",
    rating: 5,
    quote:
      "Top notch services with lots of love.",
    image: reviewImages.review2,
    source: "Facebook",
  },
  {
    name: "Charming Oke.",
    role: "Google Review",
    rating: 5,
    quote:
      "So I got in this spa outfit in Port Harcourt for a facial and massage session, sincerely I got more than what I expected. The facials was 10/10 minus nothing. Massage session was great 👍.",
    image: reviewImages.review3,
    source: "Google",
  },
  {
    name: "Chapdee",
    role: "Google Review",
    rating: 5,
    quote:
      "It was an easy going experience, from examining my face and suggesting a facial treatment. The result was pretty good and the staffs were professional with their work, you should give them a try.",
    image: reviewImages.review4,
    source: "Google",
  },
  {
    name: "Joan Ebere",
    role: "Google Review",
    rating: 5,
    quote:
      "Luxe Aesthetics Spa exceeded my expectations. The Botox and dermal fillers gave me a youthful look. The spa’s calming atmosphere and skilled professionals make it the best place for cosmetic treatments. Truly a top-tier experience..",
    image: reviewImages.review5,
    source: "TripAdvisor",
  },
];

export const faqs = [
  {
    question: "Which treatments are right for me?",
    answer:
      "Every journey at Luxe Aesthetics begins with a personalized consultation. Our specialists assess your skin, body goals and lifestyle to recommend a treatment plan tailored specifically to you — never a one-size-fits-all approach.",
  },
  {
    question: "Are your treatments safe?",
    answer:
      "Absolutely. All our medical aesthetic treatments are performed by trained, certified professionals using premium, medical-grade equipment and products, following strict hygiene and safety protocols at every step.",
  },
  {
    question: "Do I need a consultation before booking?",
    answer:
      "For medical aesthetic treatments such as fat melting, body contouring and skin rejuvenation, we recommend a short consultation so we can understand your goals. Spa, salon and beauty services can typically be booked directly.",
  },
  {
    question: "How long does a treatment take?",
    answer:
      "Treatment times vary — a quick manicure may take 30 minutes, while a full body contouring or facial session can take up to 90 minutes. Your specialist will confirm timing when you book.",
  },
  {
    question: "Is there any downtime after treatment?",
    answer:
      "Most of our treatments have little to no downtime, allowing you to return to your day immediately. Where minor downtime is expected (such as certain medical aesthetic procedures), our team will guide you through aftercare.",
  },
  {
    question: "How much does treatment cost?",
    answer:
      "Pricing depends on the treatment and personalized plan created for you. Reach out via WhatsApp or phone and our team will be happy to share detailed pricing for your treatment of interest.",
  },
  {
    question: "Can men book treatments at Luxe Aesthetics?",
    answer:
      "Yes. Luxe Aesthetics is a proudly unisex spa and med spa — men and women both enjoy our full range of medical aesthetic, spa, salon and wellness services.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We welcome walk-ins whenever availability allows, but we recommend booking ahead via WhatsApp or our online form to guarantee your preferred time with your specialist of choice.",
  },
  {
    question: "Are you open every day?",
    answer:
      "Yes — Luxe Aesthetics is open 24 hours a day, every day of the week, so you can book treatments around your schedule, not the other way around.",
  },
];

export const experienceSteps = [
  {
    title: "Book Appointment",
    description: "Reserve your visit online, by phone or via WhatsApp in under a minute.",
  },
  {
    title: "Consultation",
    description: "Meet with a specialist to discuss your goals, skin and body concerns.",
  },
  {
    title: "Personalized Treatment Plan",
    description: "We design a plan tailored precisely to your needs and desired outcome.",
  },
  {
    title: "Treatment",
    description: "Relax as our certified professionals deliver your treatment with precision and care.",
  },
  {
    title: "Aftercare",
    description: "Receive detailed aftercare guidance to protect and prolong your results.",
  },
  {
    title: "Results",
    description: "Enjoy renewed confidence — and a plan for your next visit to Luxe Aesthetics.",
  },
];

export const facilityShowcase = [
  { title: "Reception", image: stock.facilityLounge[0] },
  { title: "Treatment Rooms", image: stock.medicalAesthetics[1] },
  { title: "Spa Rooms", image: stock.massage[2] },
  { title: "Facial Rooms", image: stock.facials[1] },
  { title: "Salon", image: stock.hair[2] },
  { title: "Waiting Lounge", image: stock.wellness[3] },
  { title: "Steam Room", image: stock.facilityLounge[1] },
  { title: "Hydrotherapy", image: stock.facilityLounge[2] },
];

export const beforeAfterGallery = [
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  { category: "Fat Melting", image: heroImages.bbl, title: "Abdomen Contouring — 6 Sessions" },
  
  // { category: "Body Sculpting", image: stock.bodyContouring[0], title: "Full Body Sculpting Journey" },
  // { category: "Facials", image: stock.facials[3], title: "Hydra-Glow Facial Series" },
  // { category: "Skin Rejuvenation", image: stock.medicalAesthetics[2], title: "Pigmentation Correction" },
  // { category: "Brows", image: stock.microblading[0], title: "Microblading Transformation" },
  // { category: "Teeth Whitening", image: stock.teeth[0], title: "Professional Whitening Result" },
  // { category: "Facials", image: stock.facials[0], title: "Deep Cleanse & Radiance" },
  // { category: "Body Sculpting", image: stock.bodyContouring[2], title: "Post-Partum Body Confidence" },
];

export const beforeAfterCategories = ["All", "Fat Melting", "Body Sculpting", "Facials", "Skin Rejuvenation", "Brows", "Teeth Whitening"];

export const instagramPosts = [
  stock.facials[2],
  stock.hair[1],
  stock.nails[0],
  stock.lashes[0],
  stock.massage[3],
  stock.bodyContouring[0],
  stock.wellness[1],
  stock.microblading[1],
];

export const blogCategories = [
  "Skin Care",
  "Body Contouring",
  "Spa & Wellness",
  "Hair Care",
  "Nails",
  "Medical Aesthetics",
  "Beauty Tips",
  "Client Guides",
];

export const blogPosts = [
  {
    slug: "non-surgical-fat-melting-guide",
    title: "Everything You Need to Know Before Getting Non-Surgical Fat Melting",
    category: "Body Contouring",
    excerpt:
      "Curious about non-surgical fat melting? Here's what to expect before, during and after your first session at Luxe Aesthetics.",
    image: stock.bodyContouring[1],
    readTime: "5 min read",
    date: "July 2026",
    featured: true,
  },
  {
    slug: "signs-your-skin-needs-a-facial",
    title: "7 Signs Your Skin Is Overdue for a Professional Facial",
    category: "Skin Care",
    excerpt: "Dullness, congestion, uneven tone — learn the signals that mean it's time to book a facial.",
    image: stock.facials[2],
    readTime: "4 min read",
    date: "June 2026",
  },
  {
    slug: "massage-therapy-benefits",
    title: "5 Ways Regular Massage Therapy Transforms Your Wellbeing",
    category: "Spa & Wellness",
    excerpt: "More than relaxation — discover the real physical and mental health benefits of routine massage.",
    image: stock.massage[0],
    readTime: "6 min read",
    date: "June 2026",
  },
  {
    slug: "choosing-the-right-hair-treatment",
    title: "How to Choose the Right Hair Treatment for Your Hair Type",
    category: "Hair Care",
    excerpt: "From keratin to deep conditioning — our stylists break down which treatment suits your hair.",
    image: stock.hair[0],
    readTime: "5 min read",
    date: "May 2026",
  },
  {
    slug: "microblading-vs-brow-tinting",
    title: "Microblading vs Brow Tinting: Which Is Right for You?",
    category: "Beauty Tips",
    excerpt: "We compare the two most popular brow treatments so you can choose confidently.",
    image: stock.microblading[0],
    readTime: "4 min read",
    date: "May 2026",
  },
  {
    slug: "prepping-for-your-first-medspa-visit",
    title: "A First-Timer's Guide to Visiting a Med Spa",
    category: "Client Guides",
    excerpt: "New to medical aesthetics? Here's exactly what to expect during your first Luxe Aesthetics visit.",
    image: stock.medicalAesthetics[0],
    readTime: "6 min read",
    date: "April 2026",
  },
];

export const teamMembers = [
  {
    name: "Dr. Eve Ibrahim",
    role: "Founder & Medical Director",
    bio: "A licensed aesthetic physician with over a decade of experience, Dr. Eve founded Luxe Aesthetics to bring world-class medical aesthetics and luxury wellness to Port Harcourt and Warri.",
    image: "/images/founder-portrait.jpg",
  },
  {
    name: "Chidinma Wosu",
    role: "Lead Aesthetician",
    bio: "Specializing in advanced facials and skin rejuvenation, Chidinma has helped hundreds of clients achieve visible, lasting results.",
    image: stock.portraitsFemale[3],
  },
  {
    name: "David Okon",
    role: "Body Contouring Specialist",
    bio: "David leads our body & wellness department, combining technology and technique for safe, effective sculpting results.",
    image: stock.portraitsMale[0],
  },
  {
    name: "Grace Amadi",
    role: "Senior Hairstylist",
    bio: "With an eye for precision and artistry, Grace heads our salon team, crafting signature looks for every client.",
    image: stock.portraitsFemale[1],
  },
];

export const coreValues = [
  { title: "Excellence", description: "We hold every treatment, product and interaction to the highest premium standard." },
  { title: "Integrity", description: "Honest recommendations tailored to your goals — never upselling what you don't need." },
  { title: "Personalization", description: "No two clients are alike, so no two treatment plans are either." },
  { title: "Hygiene & Safety", description: "Medical-grade sterilization and safety protocols across every service." },
  { title: "Confidence", description: "Everything we do is in service of how you feel when you leave our doors." },
  { title: "Innovation", description: "We continually invest in the latest technology and techniques in aesthetics." },
];
