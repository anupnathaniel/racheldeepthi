import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, EditorialImage, PlaceholderImage, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Rachel Deepthi",
  description:
    "Meet Rachel Deepthi, Registered Dietitian, Nutritionist and founder of Truly Nourish™, based in Chennai.",
  alternates: { canonical: "/about" },
};

const expertise = [
  "Registered Dietitian",
  "MSc in Clinical Nutrition",
  "Clinical and lifestyle nutrition",
  "Weight management",
  "Sports nutrition",
  "Maternal and child nutrition",
  "Fertility and IVF nutrition",
  "Metabolic and lifestyle conditions",
  "Corporate wellness",
  "Nutrition education",
];

const philosophy = [
  "Personalized to health needs and lifestyle",
  "Evidence-based and informed by science",
  "Practical, realistic and culturally relevant",
  "Sustainable rather than temporary",
  "Focused on prevention as well as management",
  "Respectful, compassionate and non-judgmental",
];

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">Meet Rachel Deepthi</h1>

      <section className="section">
        <div className="container profile-layout">
          <div className="profile-image-column">
            <EditorialImage
              src="/images/rachel-deepthi-portrait-v2.jpg"
              alt="Rachel Deepthi, Registered Dietitian and founder of Truly Nourish"
              className="rachel-profile-image"
              tall
              priority
            />
          </div>
          <article className="story-content">
            <p className="eyebrow">Rachel’s story</p>
            <p>My journey into nutrition did not begin with calories or charts. It began with a simple question:</p>
            <h2>Why do so many people try so hard to be healthy, yet still feel unwell?</h2>
            <p>Over the years, as I studied, practised and worked closely with individuals and families, I realised that true health is not about perfection. It is about understanding the body, respecting its signals and supporting it consistently through appropriate food, habits and care.</p>
            <p>I’m Rachel Deepthi, a Registered Dietitian and Nutritionist based in Chennai, with over 12 years of experience guiding people through lifestyle conditions, fertility and hormonal challenges, pregnancy and child nutrition, sports performance, weight management and corporate wellness.</p>
            <p>What makes my work different is the way I approach nutrition—not as a rigid plan to follow, but as a conversation with your body. Every client comes with a unique story, background and set of challenges. My role is to listen carefully, understand what the body may need and design guidance that works in real life, not only in textbooks.</p>
            <p>Along the way, I have had the privilege of working with thousands of individuals, conducting workshops and group programs, consulting in clinical settings and contributing to print and television media as a nutrition expert.</p>
            <p>I currently work collaboratively with doctors, physiotherapists, therapists, sports-science professionals and fitness professionals to provide sustainable and integrated nutrition care.</p>
            <p>Education and empowerment are also central to my work. Beyond consultations, I support nutrition students and dietitians through lifestyle-nutrition learning opportunities and create programs that help people move from confusion to confidence in their health journey.</p>
            <blockquote>Health is not built through extremes. It is built through small, mindful choices repeated consistently.</blockquote>
            <p>If you are looking for nutrition guidance that feels supportive, practical and sustainable, you are in the right place.</p>
          </article>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <SectionHeading eyebrow="Qualifications and areas of practice" title="Expertise That Connects Science With Everyday Life">
            <p>Rachel’s confirmed qualifications and areas of practice bring clinical knowledge together with practical, everyday nutrition guidance.</p>
          </SectionHeading>
          <ul className="expertise-grid">
            {expertise.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section brand-overview">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Truly Nourish™</p>
            <h2>Signature Nutrition Programs by Rachel Deepthi</h2>
            <p>Truly Nourish™ is the signature nutrition-program platform created by Rachel Deepthi, Registered Dietitian and Nutritionist, to empower individuals and families through evidence-based, personalized and sustainable nutrition care.</p>
            <p>More than a collection of diet plans, Truly Nourish is built on the belief that good health begins by nourishing the body, mind and lifestyle. Every program is designed to offer practical guidance that fits real life, helping people work toward their health goals while creating habits that can be maintained over time.</p>
            <p>Whether someone is looking to improve general wellbeing, manage a diagnosed health condition alongside medical care, prepare for pregnancy, enhance sports performance or support a child’s growth, Truly Nourish offers guidance tailored to the individual journey.</p>
          </div>
          <div className="principles-card">
            <EditorialImage
              src="/images/whole-foods-flatlay.jpg"
              alt="An arrangement of almonds, walnuts, lentils, seeds and fresh fruit"
              className="principles-food-image"
              tall
            />
            <h3>Our philosophy</h3>
            <ul>
              {philosophy.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>“We do not believe in restrictive diets or quick fixes. We believe in helping people build healthier lifestyles through informed choices and consistent support.”</p>
          </div>
        </div>
      </section>

      <section className="section community-about">
        <div className="container split-layout">
          <PlaceholderImage label="Community health collaboration" detail="Approved event photograph required" />
          <SectionHeading eyebrow="Social responsibility" title="Community Impact">
            <p>Nutrition education should reach beyond consultation rooms. Rachel contributes her time and expertise to free medical camps and community-health initiatives that help make practical nutrition guidance and preventive-health awareness more accessible.</p>
            <p>Verified work may include nutrition screening and counselling, public education, maternal and child nutrition awareness, and collaboration with doctors and other healthcare professionals.</p>
            <Link className="text-link" href="/community-impact">Explore Community Impact</Link>
          </SectionHeading>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
