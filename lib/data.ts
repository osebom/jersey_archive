export type Jersey = {
  id: string;
  code: string;
  name: string;
  categorySlug: string | null;
  image: string;
  externalUrl: string;
};

export type Category = {
  slug: string;
  title: string;
  navTitle: string;
  previewImages: string[];
};

export const categories: Category[] = [
  {
    slug: "world-cup-2026",
    title: "2026 WORLD CUP",
    navTitle: "2026 WORLD CUP",
    previewImages: [
      "/jerseys/spain-away-2627.png",
      "/jerseys/south-africa-away-2627.png",
      "/jerseys/germany-home-2627.png",
    ],
  },
  {
    slug: "2026-27",
    title: "26/27 JERSEYS",
    navTitle: "26/27",
    previewImages: [
      "/placeholder-jersey.svg",
      "/placeholder-jersey.svg",
      "/placeholder-jersey.svg",
    ],
  },
];

export const jerseys: Jersey[] = [
  // World Cup 2026
  {
    id: "wc-esp",
    code: "ES-01",
    name: "SPAIN 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/spain-away-2627.png",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-spain-away-shirt-jn4397.html?ref=ojaykits",
  },
  {
    id: "wc-rsa",
    code: "ZA-01",
    name: "SOUTH AFRICA 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/south-africa-away-2627.png",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-south-africa-away-shirtky2217.html?ref=ojaykits",
  },
  {
    id: "wc-ger",
    code: "DE-01",
    name: "GERMANY 26/27 HOME",
    categorySlug: "world-cup-2026",
    image: "/jerseys/germany-home-2627.png",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-germany-authentic-home-shirt-wirtz-17jn2066-17wirtz.html?ref=ojaykits",
  },

  // 2026/27 Clubs
  {
    id: "club-rm",
    code: "RM-01",
    name: "Real Madrid Home",
    categorySlug: "2026-27",
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/real-madrid-home",
  },
  {
    id: "club-bay",
    code: "BY-01",
    name: "Bayern Munich Home",
    categorySlug: "2026-27",
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/bayern-home",
  },
  {
    id: "club-bar",
    code: "FC-01",
    name: "Barcelona Home",
    categorySlug: "2026-27",
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/barcelona-home",
  },
  {
    id: "club-mci",
    code: "MC-01",
    name: "Man City Home",
    categorySlug: "2026-27",
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/man-city-home",
  },
  {
    id: "club-psg",
    code: "PS-01",
    name: "PSG Home",
    categorySlug: "2026-27",
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/psg-home",
  },
  {
    id: "club-int",
    code: "IN-01",
    name: "Inter Milan Home",
    categorySlug: "2026-27",
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/inter-home",
  },

  // Individual jerseys (no category)
  {
    id: "retro-juv",
    code: "JV-97",
    name: "Juventus 97/98",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/juventus-97",
  },
  {
    id: "retro-mun",
    code: "MU-99",
    name: "Man United 99",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/man-united-99",
  },
  {
    id: "retro-sam",
    code: "SM-90",
    name: "Sampdoria 90/91",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/sampdoria-90",
  },
  {
    id: "collab-y3",
    code: "Y3-01",
    name: "Y-3 x Real Madrid",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/y3-real-madrid",
  },
  {
    id: "collab-bal",
    code: "BL-01",
    name: "Balenciaga x PSG",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/balenciaga-psg",
  },
  {
    id: "collab-pir",
    code: "PI-01",
    name: "Inter x Pirelli",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/inter-pirelli",
  },
  {
    id: "ind-01",
    code: "AC-01",
    name: "AC Milan Away",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/ac-milan-away",
  },
  {
    id: "ind-02",
    code: "LP-01",
    name: "Liverpool Home",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/liverpool-home",
  },
  {
    id: "ind-03",
    code: "AR-02",
    name: "Arsenal Third",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/arsenal-third",
  },
  {
    id: "ind-04",
    code: "CH-01",
    name: "Chelsea Home",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/chelsea-home",
  },
  {
    id: "ind-05",
    code: "TO-01",
    name: "Tottenham Away",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/tottenham-away",
  },
  {
    id: "ind-06",
    code: "NA-01",
    name: "Napoli Home",
    categorySlug: null,
    image: "/placeholder-jersey.svg",
    externalUrl: "https://example.com/napoli-home",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getJerseysByCategory(slug: string): Jersey[] {
  return jerseys.filter((j) => j.categorySlug === slug);
}

export function getIndividualJerseys(): Jersey[] {
  return jerseys.filter((j) => j.categorySlug === null);
}
