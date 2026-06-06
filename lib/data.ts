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
      "/jerseys/germany-home-2627.jpg",
    ],
  },
  {
    slug: "2026-27",
    title: "26/27 SEASON",
    navTitle: "26/27 SEASON",
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
    image: "/jerseys/germany-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-germany-home-shirtkd8363.html?ref=ojaykits",
  },

  // Imported from classicfootballshirts.com (uncategorized for now)
  {
    id: "cfs-juventus-home-2627",
    code: "JV-26",
    name: "JUVENTUS 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/juventus-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-juventus-home-shirtkc2285.html?ref=ojaykits",
  },
  {
    id: "cfs-belgium-away-2627",
    code: "BE-26",
    name: "BELGIUM 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/belgium-away-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-belgium-away-shirtjm8386.html?ref=ojaykits",
  },
  {
    id: "cfs-haiti-home-2627",
    code: "HT-26",
    name: "HAITI 26/27 HOME",
    categorySlug: "world-cup-2026",
    image: "/jerseys/haiti-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-haiti-home-shirthaiti-fan-blu.html?ref=ojaykits",
  },
  {
    id: "cfs-bayern-munich-home-2627",
    code: "BM-26",
    name: "BAYERN MUNICH 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/bayern-munich-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-bayern-munich-home-shirt-pre-orderkq6513.html?ref=ojaykits",
  },
  {
    id: "cfs-algeria-home-2627",
    code: "DZ-26",
    name: "ALGERIA 26/27 HOME",
    categorySlug: "world-cup-2026",
    image: "/jerseys/algeria-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-algeria-home-shirtjn4457.html?ref=ojaykits",
  },
  {
    id: "cfs-algeria-away-2627",
    code: "DZ-27",
    name: "ALGERIA 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/algeria-away-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-algeria-away-shirtjn4456.html?ref=ojaykits",
  },
  {
    id: "cfs-tunisia-third-2627",
    code: "TN-26",
    name: "TUNISIA 26/27 THIRD",
    categorySlug: "world-cup-2026",
    image: "/jerseys/tunisia-third-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-tunisia-third-shirt34255vw-tnf-a0g.html?ref=ojaykits",
  },
  {
    id: "cfs-colombia-home-2627",
    code: "CO-26",
    name: "COLOMBIA 26/27 HOME",
    categorySlug: "world-cup-2026",
    image: "/jerseys/colombia-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-colombia-home-shirtjl6972.html?ref=ojaykits",
  },
  {
    id: "cfs-argentina-home-2627",
    code: "AR-26",
    name: "ARGENTINA 26/27 HOME",
    categorySlug: "world-cup-2026",
    image: "/jerseys/argentina-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-argentina-home-shirtjm8396.html?ref=ojaykits",
  },
  {
    id: "cfs-argentina-authentic-away-2627",
    code: "AR-27",
    name: "ARGENTINA 26/27 AUTHENTIC AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/argentina-authentic-away-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-argentina-authentic-away-shirt-jm5901.html?ref=ojaykits",
  },
  {
    id: "cfs-manchester-united-home-2627",
    code: "MU-26",
    name: "MANCHESTER UNITED 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/manchester-united-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-manchester-united-home-shirtka6871.html?ref=ojaykits",
  },
  {
    id: "cfs-liverpool-home-2627",
    code: "LV-26",
    name: "LIVERPOOL 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/liverpool-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-liverpool-home-shirtka6852.html?ref=ojaykits",
  },
  {
    id: "cfs-japan-authentic-home-2627",
    code: "JP-26",
    name: "JAPAN 26/27 AUTHENTIC HOME",
    categorySlug: "world-cup-2026",
    image: "/jerseys/japan-authentic-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-japan-authentic-home-shirtjn1867.html?ref=ojaykits",
  },
  {
    id: "cfs-ac-milan-home-2627",
    code: "AC-26",
    name: "AC MILAN 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/ac-milan-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-ac-milan-home-shirt784121-01.html?ref=ojaykits",
  },
  {
    id: "cfs-ivory-coast-away-2627",
    code: "CI-26",
    name: "IVORY COAST 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/ivory-coast-away-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-ivory-coast-away-shirt783188-02.html?ref=ojaykits",
  },
  {
    id: "cfs-ghana-away-2627",
    code: "GH-26",
    name: "GHANA 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/ghana-away-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-ghana-away-shirt783425-02.html?ref=ojaykits",
  },
  {
    id: "cfs-manchester-city-home-2627",
    code: "MC-26",
    name: "MANCHESTER CITY 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/manchester-city-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-manchester-city-home-shirt784326-01.html?ref=ojaykits",
  },
  {
    id: "cfs-senegal-away-2627",
    code: "SN-26",
    name: "SENEGAL 26/27 AWAY",
    categorySlug: "world-cup-2026",
    image: "/jerseys/senegal-away-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-senegal-away-shirt783171-02.html?ref=ojaykits",
  },
  {
    id: "cfs-borussia-dortmund-home-2627",
    code: "BD-26",
    name: "BORUSSIA DORTMUND 26/27 HOME",
    categorySlug: "2026-27",
    image: "/jerseys/borussia-dortmund-home-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-borussia-dortmund-home-shirt784088-01.html?ref=ojaykits",
  },
  {
    id: "cfs-ajax-third-2627",
    code: "AX-26",
    name: "AJAX 26/27 THIRD",
    categorySlug: "2026-27",
    image: "/jerseys/ajax-third-2627.jpg",
    externalUrl:
      "https://www.classicfootballshirts.com/2026-27-ajax-third-shirt-pre-orderjz4692.html?ref=ojaykits",
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
