import Companies from "@/components/Companies";
import Download from "@/components/Download";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import PopularRentalDeals from "@/components/PopularRentalDeals";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <div className="main-container ">
        <Section id="home" className=" pb-20 pt-0">
          <Hero />
        </Section>

        <Section id="how-it-work">
          <HowItWork />
        </Section>
      </div>
      <Section>
        <Companies />
      </Section>
      <div className="main-container">
        <Section id="why-choose-us" className=" xl:pt-16 xl:pb-24">
          <WhyChooseUs />
        </Section>

        <Section id="rental-deals" className="xl:pt-24 xl:pb-16">
          <PopularRentalDeals />
        </Section>
      </div>

      <Section id="testimonials" className="z-10">
        <Testimonials />
      </Section>

      <div className="main-container">
        <Section className=" pt-0 sm:pt-16 pb-0">
          <Download />
        </Section>
      </div>
    </main>
  );
}
