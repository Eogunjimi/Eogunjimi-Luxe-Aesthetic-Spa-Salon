/** Single source of truth for all business / brand information. */

export const business = {
  name: "Luxe Aesthetics Spa Saloon",
  shortName: "Luxe Aesthetics",
  tagline: "Experience the Luxe Difference",
  phone: "+234 807 269 9566",
  phoneHref: "tel:+2348072699566",
  whatsapp: "+234 807 269 9566",
  email: "hello@luxeaestheticsspa.com",
  rating: 4.7,
  reviewCount: 512,
  locations: [
    {
      id: "port-harcourt",
      city: "Port Harcourt",
      state: "Rivers State",
      address: "64A Diobu Street, GRA Phase 3, Port Harcourt, Rivers State, Nigeria",
      mapQuery: "64A Diobu Street, GRA Phase 3, Port Harcourt, Rivers State, Nigeria",
    },
    {
      id: "warri",
      city: "Warri",
      state: "Delta State",
      address: "7 Airport Road, Naomi Plaza, by Airport Junction, Warri, Delta State, Nigeria",
      mapQuery: "7 Airport Road, Naomi Plaza, Airport Junction, Warri, Delta State, Nigeria",
    },
  ],
  hours: "Open 24 Hours, Every Day",
  social: {
    instagram: "https://www.instagram.com/luxe_aesthetics.spa.saloon/?hl=en",
    facebook: "https://www.facebook.com/luxeaestheticspasaloon",
    tiktok: "https://www.tiktok.com/@luxe_aesthetic_spa_salon",
  },
};

export const whatsappLink = (message = "Hi Luxe Aesthetics, I'd like to book an appointment.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Before & After", href: "/before-after" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges = [
  "Open 24 Hours",
  "Medical Aesthetic Treatments",
  "Luxury Spa Experience",
  "4.7★ Google Rating",
  "#1 on TripAdvisor",
  "Unisex Spa",
];
