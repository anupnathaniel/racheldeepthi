export type ProgramCategory =
  | "Personal Health"
  | "Women and Children"
  | "Performance and Professional Life";

export type Program = {
  slug: string;
  name: string;
  category: ProgramCategory;
  summary: string;
  audience: string;
  concerns: string[];
  support: string[];
  practicalExample: string;
  disclaimer: string;
  faqs: Array<{ question: string; answer: string }>;
};

const commonFaqs = [
  {
    question: "Is the guidance personalized?",
    answer:
      "Yes. Recommendations are shaped around relevant health history, food preferences, schedule, culture and agreed goals.",
  },
  {
    question: "Does this replace medical care?",
    answer:
      "No. Nutrition support complements, and never replaces, appropriate evaluation or treatment from your medical team.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "No. Health outcomes vary between individuals. The focus is on informed, realistic actions and consistent support.",
  },
];

export const programs: Program[] = [
  {
    slug: "weight-management",
    name: "Weight Management",
    category: "Personal Health",
    summary:
      "Structured, sustainable guidance for body composition, metabolic health and everyday habits—without extreme diets.",
    audience:
      "Adults seeking sustainable weight or body-composition support without extreme dieting.",
    concerns: [
      "Inconsistent routines",
      "Weight cycling",
      "Restrictive dieting",
      "Emotional eating",
      "Low energy",
    ],
    support: [
      "Health and lifestyle assessment",
      "Food-pattern review",
      "Personalized meal structure",
      "Portion and hunger-awareness guidance",
      "Habit coaching",
      "Progress review",
      "Maintenance planning",
    ],
    practicalExample:
      "A working professional with irregular meal timings receives a practical structure based on work hours, familiar Indian foods and manageable weekly habits.",
    disclaimer:
      "This program does not guarantee weight loss or a specific body-composition outcome.",
    faqs: commonFaqs,
  },
  {
    slug: "personalized-nutrition",
    name: "Personalized Nutrition Consultation",
    category: "Personal Health",
    summary:
      "One-to-one nutrition guidance shaped around your health history, goals, food preferences, schedule and lifestyle.",
    audience:
      "Adults and families seeking practical, individualized nutrition guidance.",
    concerns: [
      "Conflicting nutrition advice",
      "Irregular meals",
      "Food-planning challenges",
      "Low energy",
      "Changing life stages",
    ],
    support: [
      "Comprehensive nutrition assessment",
      "Food-pattern review",
      "Collaborative goal setting",
      "Personalized meal structure",
      "Follow-up and adjustments",
      "Sustainable habit support",
    ],
    practicalExample:
      "A client receives a flexible meal framework using familiar foods, practical preparation options and realistic changes for the working week.",
    disclaimer:
      "Recommendations depend on individual circumstances and do not replace medical advice.",
    faqs: commonFaqs,
  },
  {
    slug: "lifestyle-metabolic-health",
    name: "Lifestyle and Metabolic Health",
    category: "Personal Health",
    summary:
      "Nutrition and lifestyle support for people managing diagnosed diabetes, thyroid concerns, PCOS, fatty liver and related metabolic conditions.",
    audience:
      "People with diagnosed metabolic or lifestyle-related conditions who are under appropriate medical care.",
    concerns: [
      "Diabetes management",
      "Thyroid concerns",
      "Nutrition support for PCOS",
      "Fatty liver",
      "Metabolic health",
    ],
    support: [
      "Health-history and laboratory-report review during consultation",
      "Food and lifestyle assessment",
      "Personalized meal structure",
      "Sleep, movement and stress considerations",
      "Regular monitoring",
      "Coordination with medical advice",
    ],
    practicalExample:
      "A person managing diabetes receives a culturally appropriate meal structure that complements the treatment plan prescribed by their medical team.",
    disclaimer:
      "Do not stop or change prescribed medication without consulting your treating doctor.",
    faqs: commonFaqs,
  },
  {
    slug: "family-nutrition",
    name: "Family Nutrition",
    category: "Personal Health",
    summary:
      "A realistic shared approach for households balancing different nutrition needs, schedules and preferences.",
    audience:
      "Families seeking practical meal structures that can be adapted across ages and routines.",
    concerns: [
      "Different household needs",
      "Busy schedules",
      "Meal-planning fatigue",
      "Varied food preferences",
    ],
    support: [
      "Household food-pattern assessment",
      "Family meal planning",
      "Age-appropriate variations",
      "Shopping and preparation strategies",
      "Practical routines",
    ],
    practicalExample:
      "A family receives one core meal framework with appropriate variations for children, adults and older family members.",
    disclaimer:
      "Recommendations are adapted to individual needs; one plan may not be appropriate for every family member.",
    faqs: commonFaqs,
  },
  {
    slug: "fertility-ivf-nutrition",
    name: "Fertility and IVF Nutrition",
    category: "Women and Children",
    summary:
      "Structured nutrition support for individuals and couples preparing for conception or undergoing fertility care.",
    audience:
      "Individuals and couples preparing for conception, fertility care or IVF.",
    concerns: [
      "Nutrient adequacy",
      "Meal-pattern consistency",
      "Lifestyle and sleep",
      "Weight support where clinically appropriate",
    ],
    support: [
      "Nutrition-status review",
      "Meal-pattern guidance",
      "Lifestyle and sleep review",
      "Nutrient adequacy",
      "Weight-management support where clinically appropriate",
      "Coordination with the treating medical team when required",
    ],
    practicalExample:
      "A client preparing for IVF receives a practical nutrition structure developed around medical guidance, food preferences and everyday routines.",
    disclaimer:
      "Nutrition support does not replace fertility evaluation or treatment by a qualified medical practitioner.",
    faqs: commonFaqs,
  },
  {
    slug: "pregnancy-postpartum-nutrition",
    name: "Pregnancy and Postpartum Nutrition",
    category: "Women and Children",
    summary:
      "Individualized nutrition guidance for pregnancy, recovery and breastfeeding alongside obstetric care.",
    audience:
      "Pregnant and postpartum women seeking individualized nutrition guidance alongside obstetric care.",
    concerns: [
      "Changing appetite",
      "Nausea",
      "Nutrient adequacy",
      "Healthy weight-gain guidance",
      "Postpartum recovery",
    ],
    support: [
      "Trimester-appropriate guidance",
      "Meal planning",
      "Nausea and appetite support",
      "Nutrient adequacy",
      "Healthy weight-gain guidance",
      "Postpartum recovery",
      "Lactation-related nutrition support where appropriate",
    ],
    practicalExample:
      "A pregnant client experiencing nausea and irregular eating receives manageable meal strategies adapted to her tolerance and clinician’s advice.",
    disclaimer:
      "Nutrition guidance supports, but does not replace, obstetric, medical or lactation care.",
    faqs: commonFaqs,
  },
  {
    slug: "maternal-nutrition",
    name: "Maternal Nutrition",
    category: "Women and Children",
    summary:
      "Practical support for maternal wellbeing across preconception, pregnancy and the postpartum period.",
    audience:
      "Women seeking nutrition support through changing maternal-health needs and life stages.",
    concerns: [
      "Preconception nutrition",
      "Pregnancy nutrition",
      "Postpartum recovery",
      "Meal planning",
      "Nutrient adequacy",
    ],
    support: [
      "Personal health and food review",
      "Life-stage appropriate meal guidance",
      "Nutrient adequacy",
      "Symptom-aware planning",
      "Follow-up and adjustments",
    ],
    practicalExample:
      "Guidance is adjusted over time to reflect appetite, tolerance, medical advice, family routines and maternal wellbeing.",
    disclaimer:
      "Maternal nutrition support is provided alongside appropriate care from qualified medical practitioners.",
    faqs: commonFaqs,
  },
  {
    slug: "child-adolescent-nutrition",
    name: "Child and Adolescent Nutrition",
    category: "Women and Children",
    summary:
      "Family-centred guidance for growth, food variety, meal routines and age-appropriate nutrition.",
    audience:
      "Parents and caregivers of children and adolescents.",
    concerns: [
      "Food variety",
      "Meal routines",
      "Selective eating",
      "Age-appropriate nutrition",
      "Lunch-box planning",
    ],
    support: [
      "Growth and food-pattern review",
      "Family meal structure",
      "Nutrient adequacy",
      "Lunch-box ideas",
      "Practical food-variety strategies",
      "Parent education",
    ],
    practicalExample:
      "A family receives a realistic meal and snack structure for a school-going child using familiar foods and routines.",
    disclaimer:
      "A parent or legal guardian must make enquiries and provide appropriate consent for support involving a minor.",
    faqs: commonFaqs,
  },
  {
    slug: "sports-performance-nutrition",
    name: "Sports Performance Nutrition",
    category: "Performance and Professional Life",
    summary:
      "Performance-focused nutrition strategies for training, endurance, strength, recovery and competition preparation.",
    audience:
      "Recreational athletes, competitive athletes, fitness enthusiasts and active adults.",
    concerns: [
      "Training fuel",
      "Recovery",
      "Hydration",
      "Competition preparation",
      "Travel-food planning",
    ],
    support: [
      "Training-day nutrition",
      "Pre- and post-workout guidance",
      "Hydration strategy",
      "Recovery nutrition",
      "Competition preparation",
      "Travel-food planning",
      "Body-composition support where appropriate",
    ],
    practicalExample:
      "A runner preparing for an endurance event receives a food and hydration strategy aligned with training load and event-day requirements.",
    disclaimer:
      "Nutrition guidance does not guarantee athletic performance, selection, recovery time or competition outcomes.",
    faqs: commonFaqs,
  },
  {
    slug: "creator-influencer-health",
    name: "Creator and Influencer Health Management",
    category: "Performance and Professional Life",
    summary:
      "Specialized support for food-focused professionals navigating tastings, travel, irregular schedules and restaurant exposure.",
    audience:
      "Food bloggers, food reviewers, chefs, culinary creators and influencers.",
    concerns: [
      "Frequent tastings",
      "Irregular meals",
      "Travel",
      "Restaurant exposure",
      "Energy and recovery",
    ],
    support: [
      "Work-pattern and food-exposure assessment",
      "Meal and tasting strategies",
      "Metabolic-health support",
      "Energy and performance planning",
      "Travel routines",
      "Recovery and balance strategies",
    ],
    practicalExample:
      "A food creator attending several tastings each week receives a structure for tasting days, regular meals, hydration and recovery days without interfering with content commitments.",
    disclaimer:
      "This service does not promote compensatory, restrictive or unsafe eating practices.",
    faqs: commonFaqs,
  },
  {
    slug: "corporate-wellness",
    name: "Corporate Wellness",
    category: "Performance and Professional Life",
    summary:
      "Evidence-based workshops, consultations and practical wellness initiatives designed for real workplaces.",
    audience:
      "Organizations seeking useful nutrition education and employee-wellness support.",
    concerns: [
      "Employee nutrition education",
      "Busy professional routines",
      "Shift work",
      "Women’s health",
      "Leadership wellbeing",
    ],
    support: [
      "Workshops and webinars",
      "Individual employee consultations",
      "Customized wellness calendars",
      "Nutrition challenges",
      "Cafeteria and menu guidance subject to scope",
      "On-site Chennai programs subject to availability",
    ],
    practicalExample:
      "A tailored program may combine a practical workshop, supporting resources and agreed follow-up for a specific workforce.",
    disclaimer:
      "Program scope, availability and outcomes are agreed with each organization and are not guaranteed.",
    faqs: commonFaqs,
  },
];

export const programCategories: ProgramCategory[] = [
  "Personal Health",
  "Women and Children",
  "Performance and Professional Life",
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
