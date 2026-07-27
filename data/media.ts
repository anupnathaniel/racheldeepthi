export type MediaArticle = {
  title: string;
  publication: string;
  year: string;
  description: string;
  url: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  format: "Article" | "Newsletter PDF" | "Professional profile";
};

export const mediaArticles: MediaArticle[] = [
  {
    title: "Understanding the Depth of Child Malnutrition in India",
    publication: "Parentune",
    year: "2024",
    description:
      "Rachel discusses the interconnected causes of malnutrition and the importance of practical nutrition awareness.",
    url: "https://www.parentune.com/parent-blog/understanding-the-depth-of-child-malnutrition-in-india/9439/",
    thumbnail: {
      src: "/images/nourishing-food-hero.jpg",
      alt: "A colourful balanced meal with vegetables, grains, lentils, fruit, nuts and seeds",
    },
    format: "Article",
  },
  {
    title: "A Travelling Athlete’s Diet",
    publication: "IAPEN India Newsletter",
    year: "2021",
    description:
      "An educational contribution about nutrition considerations for athletes travelling for training and competition.",
    url: "https://iapenindia.org/newsletter/July-Final-Report.pdf#page=38",
    thumbnail: {
      src: "/images/whole-foods-flatlay.jpg",
      alt: "A selection of nuts, seeds, lentils and fresh fruit",
    },
    format: "Newsletter PDF",
  },
  {
    title: "Expert Profile: Rachel Deepthi",
    publication: "House of Zelena",
    year: "Profile",
    description:
      "A professional profile highlighting Rachel’s work in maternal, child and clinical nutrition.",
    url: "https://houseofzelena.com/pages/dr-rachel",
    thumbnail: {
      src: "/images/fruits-nuts-media-v1.jpg",
      alt: "A nourishing bowl with almonds, blueberries and dried apricots beside citrus fruit",
    },
    format: "Professional profile",
  },
];
