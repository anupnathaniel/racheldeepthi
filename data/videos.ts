export type VideoItem = {
  id: string;
  youtubeId: string;
  title: string;
};

const youtubeVideos = [
  {
    youtubeId: "pukaBZCUX6A",
    title: "இரவில் கண் விழிப்பதால் ஏற்படும் இன்னல்கள் | Health Conditions | Talk Show #puthuyugamtv #sleep",
  },
  {
    youtubeId: "HOdWTTA5TuU",
    title: "கோடை வெப்பத்தை சமாளிக்க வழி என்ன? ஊட்டசத்து நிபுணர் தரும் உற்சாக டிப்ஸ்... | Summer | Jaya Plus",
  },
  {
    youtubeId: "BZwSiLghPbM",
    title: "கடையில வாங்குற வெண்ணெய் நல்லதில்லையா..? - Dietitian Rachel Deepthi",
  },
  {
    youtubeId: "9ZciOOkfRWU",
    title: "மதிய உணவில் என்னென்ன இருக்க வேண்டும் | Best Lunch Food | Lunch Recipes For Lunch Box",
  },
  {
    youtubeId: "FnnMwOyewQA",
    title: "யார் மீன் முட்டை சாப்பிடவே கூடாது? - Dietitian Rachel Deepthi | Fish Egg",
  },
  {
    youtubeId: "F08V_pou0Is",
    title: "🍑🍇🍋🍒Fruit Diet...எத்தனை நாளைக்கு Follow பண்ணலாம்? - Dietitian Rachel Deepthi | Early Dinner| Obesity",
  },
  {
    youtubeId: "vdRUh-Ic42Q",
    title: "How to Improve Sperm Quality and Count? |Dr Rachel Deepthi | #gg #spermcount #menhealth",
  },
  {
    youtubeId: "8F3fffqJroM",
    title: "Key nutrients for the Women trying to get pregnant! | GG Hospital | Diet Plan #pregnancy #dietplan",
  },
  {
    youtubeId: "kqEsFtY8XTE",
    title: "Pre-Pregnancy Checklist: Expert Tips for Couples on Planning For Pregnancy |GG Hospital| #pregnancy",
  },
  {
    youtubeId: "qWyCXrZfV0g",
    title: "Gestational Diabetes: What Every Expecting Mother Should Know | Rachel Deepthi | GG Hospital",
  },
  {
    youtubeId: "IQUGvv9PPOU",
    title: "Effective Pre-Pregnancy Weight Loss Tips! | Rachael Deepthi | GG Hospital",
  },
  {
    youtubeId: "lzR3unPjwzE",
    title: "Breastfeeding Secrets Revealed by OurTop Doctors | World Breastfeeding Week| GG Hospital #breastfeed",
  },
  {
    youtubeId: "y9i1qqInoNg",
    title: "World Breastfeeding Week Part - 2 | Breast Milk Nature's Best Nutrient for Your Baby | GG Hospital",
  },
  {
    youtubeId: "1gITZEsXZEo",
    title: "Prevention is Better Than Cure | World Breast Feeding Week Part 2 | GG Hospital #breastfeeding",
  },
  {
    youtubeId: "mMmwdwBGwlI",
    title: "Is It Possible to Boost Sperm Quality Naturally | Rachael Deepthi | GG Hospital #spermcount #sperm",
  },
  {
    youtubeId: "KHS4ROUgvdU",
    title: "Scope of Sports Nutrition as a Profession",
  },
  {
    youtubeId: "GixzzegSKNE",
    title: "Bone Strong-ஆ இருக்க Daily 2 Spoon இத சாப்பிடுங்க! Foods To Increase Bone Density | Diet tips",
  },
  {
    youtubeId: "kHm_Wb6bQZQ",
    title: "எலும்பு நல்லா Strength ஆ இருக்கணும்னா இந்த உணவுகளை கட்டாயம் எடுத்துக்கோங்க..! | Bone Strength",
  },
  {
    youtubeId: "-7F85IvPEVE",
    title: "Diabetes-ஆல் பாதிக்கப்பட்ட குழந்தைகளின் Diet-ல் Parents ரொம்பவே Careful-ஆ இருக்கணும்...!",
  },
  {
    youtubeId: "ac8P9O_kid4",
    title: "இந்த 5 Foods-அ Daily சாப்பிட்டா Hairfall-ஏ இருக்காது! - Nutritionist Rachel's Tips | Hair Care",
  },
  {
    youtubeId: "h9xFmDYmuk4",
    title: "அரை குறை Dietitian ஐ இப்படி தான் Identify பண்ணனும்..! | Rachel Deepthi Registered Dietitian",
  },
  {
    youtubeId: "crILdfdlGJo",
    title: "கர்ப்பிணி பெண்கள் Non-Veg சாப்பிடலாமா | Rachel Deepthi | Dietitian | Health Talks",
  },
  {
    youtubeId: "8fHEr58jsFw",
    title: "Fast Food உடலுக்கு நல்லதா? | Rachel Deepthi | Dietitian | Health Talks",
  },
  {
    youtubeId: "WvEQLqSICp8",
    title: "நேரத்துக்கு சாப்பிடாமல் இருந்தால் உடலுக்கு ஏற்படும் நோய்கள் | Rachel Deepthi | Dietitian",
  },
  {
    youtubeId: "_Y8d2xteqoA",
    title: "கருமுட்டை நல்ல தரமாக இருந்தால் குழந்தை பேரு Confirm..! | Quality of Egg is important for Pregnancy",
  },
  {
    youtubeId: "n6DrHKiFms8",
    title: "குழந்தைகளுக்கு பழைய சாதம் கொடுக்கலாமா? | Rachel Deepthi Registered Dietitian #doctor",
  },
  {
    youtubeId: "aRBVVEhhAh4",
    title: "மனநலத்தில் பாதிப்பை ஏற்படுத்தும் PACKED FOODS",
  },
] as const;

export const videos: VideoItem[] = youtubeVideos.map(({ youtubeId, title }, index) => ({
  id: `video-${index + 1}`,
  youtubeId,
  title,
}));
