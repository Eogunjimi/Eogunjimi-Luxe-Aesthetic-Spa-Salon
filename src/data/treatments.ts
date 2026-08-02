import {
  Sparkles,
  Droplet,
  Flame,
  Scissors,
  HandMetal,
  Eye,
  Pencil,
  Smile,
  Zap,
  Gem,
  Waves,
  Syringe,
  Wind,
} from "lucide-react";
import { stock } from "./images";

import { treatmentImages } from "./images"





export type Treatment = {
  slug: string;
  name: string;
  category: string;
  icon: typeof Sparkles;
  image: string;
  gallery: string[];
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  idealFor: string;
  seoTitle: string;
  seoDescription: string;
};









export const treatments: Treatment[] = [
  {
    slug: "massage-therapy",
    name: "Massage Therapy",
    category: "Luxury Spa",
    icon: Waves,
    image: stock.massage[0],
    gallery: stock.massage,
    tagline: "Melt away tension with therapeutic, hotel-grade massage rituals.",
    description:
      "Our signature massage therapy blends deep tissue, Swedish and hot stone techniques performed by trained therapists in serene, private suites. Each session is tailored to release tension, improve circulation and restore balance to a busy, demanding lifestyle.",
    benefits: [
      "Relieves chronic muscle tension & stress",
      "Improves blood circulation and lymphatic flow",
      "Promotes deep relaxation and better sleep",
      "Eases pain from long hours at work or travel",
    ],
    duration: "60 – 90 minutes",
    idealFor: "Professionals and executives carrying stress or muscle tension who want deep, restorative relaxation.",
    seoTitle: "Luxury Massage Therapy in Port Harcourt | Luxe Aesthetics",
    seoDescription:
      "Book therapeutic massage therapy at Luxe Aesthetics Spa Saloon in Port Harcourt & Warri. Deep tissue, Swedish & hot stone massage in a luxury setting, open 24 hours.",
  },
  {
    slug: "facials",
    name: "Signature Facials",
    category: "Skin Rejuvenation",
    icon: Sparkles,
    image: stock.facials[0],
    gallery: stock.facials,
    tagline: "Clinical-grade facials for a radiant, healthy glow.",
    description:
      "From hydrating facials to deep-cleansing and anti-aging protocols, our facialists use premium, medical-grade products and advanced techniques to restore clarity, hydration and glow to every skin type and tone.",
    benefits: [
      "Deep cleanses and unclogs congested pores",
      "Boosts hydration and skin elasticity",
      "Brightens dull, uneven skin tone",
      "Reduces fine lines and early signs of ageing",
    ],
    duration: "45 – 75 minutes",
    idealFor: "Anyone wanting a healthy, camera-ready glow or ongoing skin maintenance.",
    seoTitle: "Luxury Facials in Port Harcourt & Warri | Luxe Aesthetics",
    seoDescription:
      "Experience signature clinical facials at Luxe Aesthetics — hydrating, brightening & anti-aging facials in Port Harcourt and Warri. Book your appointment today.",
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    category: "Medical Aesthetics",
    icon: Droplet,
    image: stock.medicalAesthetics[2],
    gallery: stock.medicalAesthetics,
    tagline: "Advanced technology for smoother, firmer, younger-looking skin.",
    description:
      "Our skin rejuvenation protocols combine microneedling, chemical peels, LED therapy and medical-grade skincare to target pigmentation, texture, scarring and early ageing — restoring a naturally luminous complexion.",
    benefits: [
      "Improves skin texture and tone",
      "Fades dark spots, scars and hyperpigmentation",
      "Stimulates collagen for firmer skin",
      "Minimal downtime, visible results",
    ],
    duration: "45 – 60 minutes",
    idealFor: "Clients dealing with pigmentation, acne scars, dullness or early signs of ageing.",
    seoTitle: "Skin Rejuvenation Treatments in Port Harcourt | Luxe Aesthetics",
    seoDescription:
      "Advanced skin rejuvenation in Port Harcourt — microneedling, peels & LED therapy at Luxe Aesthetics Spa Saloon. Book a personalized consultation today.",
  },
  {
    slug: "non-surgical-fat-melting",
    name: "Non-Surgical Fat Melting",
    category: "Body & Wellness",
    icon: Flame,
    image: stock.bodyContouring[1],
    gallery: stock.bodyContouring,
    tagline: "Sculpt your silhouette without surgery or downtime.",
    description:
      "Using advanced fat-freezing and fat-dissolving technology, our non-surgical fat melting treatments target stubborn fat pockets around the abdomen, thighs and arms — helping you achieve a more contoured shape without going under the knife.",
    benefits: [
      "Targets stubborn fat resistant to diet & exercise",
      "No surgery, no needles, no downtime",
      "Gradual, natural-looking results",
      "Boosts confidence in your natural shape",
    ],
    duration: "45 – 60 minutes per session",
    idealFor: "Clients near their ideal weight who want to reduce stubborn localized fat pockets.",
    seoTitle: "Non-Surgical Fat Melting in Port Harcourt | Luxe Aesthetics",
    seoDescription:
      "Melt stubborn fat without surgery. Luxe Aesthetics offers advanced non-surgical fat melting & body contouring in Port Harcourt and Warri. Book a consultation.",
  },
  {
    slug: "body-contouring",
    name: "Body Contouring",
    category: "Body & Wellness",
    icon: Zap,
    image: stock.bodyContouring[0],
    gallery: stock.bodyContouring,
    tagline: "Tone, tighten and define with advanced body sculpting.",
    description:
      "Our body contouring suite uses radiofrequency, cavitation and vacuum therapy to tighten skin, smooth cellulite and enhance your natural curves — a favourite among clients preparing for special occasions.",
    benefits: [
      "Tightens loose or sagging skin",
      "Reduces the appearance of cellulite",
      "Enhances body curves and definition",
      "Pairs beautifully with fat melting treatments",
    ],
    duration: "45 – 60 minutes",
    idealFor: "Clients wanting a smoother, firmer, more sculpted body shape.",
    seoTitle: "Body Contouring in Port Harcourt | Luxe Aesthetics Spa",
    seoDescription:
      "Body contouring & skin tightening treatments at Luxe Aesthetics Spa Saloon, Port Harcourt & Warri. Advanced technology, visible results. Book today.",
  },
  {
    slug: "hair-salon",
    name: "Hair Salon Services",
    category: "Beauty Salon",
    icon: Scissors,
    image: stock.hair[0],
    gallery: stock.hair,
    tagline: "Cuts, colour and styling crafted by master stylists.",
    description:
      "From precision cuts to luxury treatments, colour correction and elegant styling, our hair studio delivers salon artistry for every hair type — finished with premium products for a healthy, lasting shine.",
    benefits: [
      "Personalized cuts & styling for your face shape",
      "Healthy-hair colour and treatment expertise",
      "Premium products for lasting results",
      "Perfect for events, work or everyday luxury",
    ],
    duration: "45 – 120 minutes",
    idealFor: "Men and women seeking expert styling, colour or hair treatments.",
    seoTitle: "Luxury Hair Salon in Port Harcourt & Warri | Luxe Aesthetics",
    seoDescription:
      "Premium hair salon services in Port Harcourt — cuts, colour, styling & treatments at Luxe Aesthetics Spa Saloon. Book your appointment today.",
  },
  {
    slug: "nail-care",
    name: "Nail Care",
    category: "Beauty Salon",
    icon: HandMetal,
    image: stock.nails[0],
    gallery: stock.nails,
    tagline: "Manicures & pedicures finished to perfection.",
    description:
      "Indulge in our luxury manicure and pedicure rituals — from classic polish to gel, acrylic and nail art, performed with meticulous hygiene standards and premium products for flawless, long-lasting results.",
    benefits: [
      "Hygienic, meticulous nail care standards",
      "Long-lasting gel & acrylic finishes",
      "Relaxing hand & foot treatments included",
      "Custom nail art available",
    ],
    duration: "30 – 75 minutes",
    idealFor: "Anyone wanting polished, healthy nails for everyday or special occasions.",
    seoTitle: "Luxury Nail Care & Manicures in Port Harcourt | Luxe Aesthetics",
    seoDescription:
      "Premium manicures, pedicures & nail art at Luxe Aesthetics Spa Saloon in Port Harcourt and Warri. Book your nail care appointment today.",
  },
  {
    slug: "lash-extensions",
    name: "Lash Extensions",
    category: "Beauty Studio",
    icon: Eye,
    image: stock.lashes[0],
    gallery: stock.lashes,
    tagline: "Wake up with fuller, longer, effortlessly beautiful lashes.",
    description:
      "Our certified lash artists apply classic, hybrid or volume lash extensions tailored to your eye shape and desired look — giving you natural or glamorous lashes that last for weeks.",
    benefits: [
      "Customized to your eye shape & preference",
      "Long-lasting, low-maintenance results",
      "Wake up ready with zero mascara",
      "Safe, gentle, premium lash products",
    ],
    duration: "60 – 120 minutes",
    idealFor: "Clients who want fuller lashes without daily makeup routines.",
    seoTitle: "Lash Extensions in Port Harcourt | Luxe Aesthetics Spa",
    seoDescription:
      "Classic, hybrid & volume lash extensions at Luxe Aesthetics Spa Saloon in Port Harcourt and Warri. Book your lash appointment today.",
  },
  {
    slug: "microblading",
    name: "Microblading",
    category: "Beauty Studio",
    icon: Pencil,
    image: stock.microblading[0],
    gallery: stock.microblading,
    tagline: "Semi-permanent, natural-looking, perfectly shaped brows.",
    description:
      "Microblading uses fine hair-like strokes to create natural, fuller-looking eyebrows tailored to your face shape — a long-term solution for sparse or uneven brows performed with precision and care.",
    benefits: [
      "Natural, hair-like strokes for realistic brows",
      "Saves time on daily brow makeup",
      "Long-lasting results (12–18 months)",
      "Customized shape & colour matching",
    ],
    duration: "90 – 150 minutes",
    idealFor: "Clients with sparse, uneven or over-plucked brows wanting a defined, natural look.",
    seoTitle: "Microblading Eyebrows in Port Harcourt | Luxe Aesthetics",
    seoDescription:
      "Natural, long-lasting microblading brows at Luxe Aesthetics Spa Saloon in Port Harcourt & Warri. Book a consultation with our brow artists today.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Beauty & Wellness",
    icon: Smile,
    image: stock.teeth[0],
    gallery: stock.teeth,
    tagline: "A brighter, more confident smile in one visit.",
    description:
      "Our professional teeth whitening treatment safely lifts stains and discoloration using advanced whitening technology, leaving you with a noticeably brighter smile in under an hour.",
    benefits: [
      "Visible results in a single session",
      "Safe, professionally supervised treatment",
      "Removes stains from coffee, tea & smoking",
      "Boosts confidence in photos & meetings",
    ],
    duration: "30 – 60 minutes",
    idealFor: "Clients wanting a fast, safe brightness boost for their smile.",
    seoTitle: "Teeth Whitening in Port Harcourt | Luxe Aesthetics Spa",
    seoDescription:
      "Professional teeth whitening at Luxe Aesthetics Spa Saloon in Port Harcourt and Warri. Brighter smiles in one visit. Book your appointment today.",
  },
  {
    slug: "waxing",
    name: "Waxing",
    category: "Beauty & Wellness",
    icon: Wind,
    image: stock.waxing[0],
    gallery: stock.waxing,
    tagline: "Smooth, silky skin with gentle, hygienic waxing.",
    description:
      "Our waxing services use premium, skin-friendly wax for smooth, long-lasting hair removal across the face and body — performed in private rooms with strict hygiene protocols.",
    benefits: [
      "Long-lasting smoothness (3–6 weeks)",
      "Gentle, skin-friendly premium wax",
      "Reduces hair thickness over time",
      "Private, hygienic treatment rooms",
    ],
    duration: "15 – 45 minutes",
    idealFor: "Clients wanting smooth skin without the daily hassle of shaving.",
    seoTitle: "Waxing Services in Port Harcourt | Luxe Aesthetics Spa",
    seoDescription:
      "Gentle, hygienic waxing services at Luxe Aesthetics Spa Saloon in Port Harcourt and Warri. Book your smooth-skin appointment today.",
  },
  {
    slug: "skin-tag-removal",
    name: "Skin Tag Removal",
    category: "Medical Aesthetics",
    icon: Gem,
    image: stock.medicalAesthetics[0],
    gallery: stock.medicalAesthetics,
    tagline: "Fast, safe, precise removal for clearer skin.",
    description:
      "Performed by trained professionals using safe medical-grade techniques, our skin tag removal service is quick, virtually painless, and leaves skin clear and smooth with minimal downtime.",
    benefits: [
      "Quick in-office procedure",
      "Minimal discomfort and downtime",
      "Safe, sterile, medical-grade technique",
      "Improves skin's clear, smooth appearance",
    ],
    duration: "15 – 30 minutes",
    idealFor: "Clients with skin tags on the face, neck or body seeking safe removal.",
    seoTitle: "Skin Tag Removal in Port Harcourt | Luxe Aesthetics Spa",
    seoDescription:
      "Safe, professional skin tag removal at Luxe Aesthetics Spa Saloon in Port Harcourt and Warri. Book your consultation today.",
  },
  {
    slug: "piercing",
    name: "Piercing",
    category: "Beauty Studio",
    icon: Syringe,
    image: stock.piercing[0],
    gallery: stock.piercing,
    tagline: "Elegant, sterile piercing in a luxury setting.",
    description:
      "From delicate ear piercings to curated jewellery placements, our piercing service follows strict sterilization protocols and is performed by trained professionals in a calm, private studio.",
    benefits: [
      "Sterile, single-use piercing equipment",
      "Wide selection of fine jewellery",
      "Gentle, precise technique",
      "Aftercare guidance included",
    ],
    duration: "15 – 30 minutes",
    idealFor: "Clients seeking a safe, elegant piercing experience.",
    seoTitle: "Piercing Studio in Port Harcourt | Luxe Aesthetics Spa",
    seoDescription:
      "Safe, sterile, elegant piercing services at Luxe Aesthetics Spa Saloon in Port Harcourt and Warri. Book your appointment today.",
  },
];

export const treatmentCategories = [
  {
    number: "01",
    title: "Advanced Medical Aesthetics",
    description: "Skin rejuvenation, skin tag removal & clinical treatments for lasting results.",
    icon: Droplet,
    image: treatmentImages.ama,
    slugs: ["skin-rejuvenation", "skin-tag-removal"],
  },
  {
    number: "02",
    title: "Luxury Spa",
    description: "Massage therapy, hydrotherapy and rituals designed for total relaxation.",
    icon: Waves,
    image: treatmentImages.massage,
    slugs: ["massage-therapy"],
  },
  {
    number: "03",
    title: "Skin Rejuvenation",
    description: "Signature facials and glow-boosting treatments for radiant, healthy skin.",
    icon: Sparkles,
    image: stock.facials[2],
    slugs: ["facials", "skin-rejuvenation"],
  },
  {
    number: "04",
    title: "Beauty Salon",
    description: "Hair, nails, lashes, brows & more from Port Harcourt's finest artists.",
    icon: Scissors,
    image: treatmentImages.salon,
    slugs: ["hair-salon", "nail-care", "lash-extensions", "microblading"],
  },
  {
    number: "05",
    title: "Body & Wellness",
    description: "Non-surgical fat melting, body sculpting, IV therapy & weight management.",
    icon: Flame,
    image:  treatmentImages.body,
    slugs: ["non-surgical-fat-melting", "body-contouring"],
  },
];

export const getTreatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);
