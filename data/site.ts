export const site = {
  name: "Truly Nourish™",
  founder: "Rachel Deepthi",
  email: "racheldeepthi.rd@gmail.com",
  phoneDisplay: "+91 93617 74528",
  phoneHref: "tel:+919361774528",
  whatsapp:
    "https://wa.me/919361774528?text=Hello%20Rachel%2C%20I%20would%20like%20to%20enquire%20about%20a%20nutrition%20consultation%20through%20Truly%20Nourish.",
  address:
    "65, Nungambakkam High Road, opposite ICICI and SBI Bank, Ponnangipuram, Ambal Nagar, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034",
  shortAddress: "Nungambakkam, Chennai",
  instagram: "https://www.instagram.com/dietitian.racheldeepthi/",
  linkedin: "https://www.linkedin.com/in/rachel-deepthi/",
  practo:
    "https://www.practo.com/chennai/doctor/rachel-4-dietitian-nutritionist",
  positioning:
    "Personalized, evidence-based and sustainable nutrition for real life.",
} as const;

export const absoluteSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://trulynourish.example";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
