import { MetaData } from "../src/core/enum/meta-data.type";
import AboutUsSection from "../src/template/about-us-section";
import BenefitsSection from "../src/template/benefits-section";
import Description from "../src/template/description";
import ExploreBanner from "../src/template/explore-banner";
import HeroSection from "../src/template/hero-section";
import Layout from "../src/template/layout";
import OfferBannerSection from "../src/template/offer-banner-section";
import SupportSection from "../src/template/support-section";

export default function Home() {
  let meta: MetaData = {
    title: "Endless Domain",
    description: "Rent Token page",
  };

  return (
    <>
      <Layout metaInfo={meta}>
        <HeroSection />
        <ExploreBanner />
        <Description />
        <div id="service">
          <OfferBannerSection />
        </div>
        <BenefitsSection />
        <div id="support">
          <SupportSection />
        </div>
        <div id="aboutUs">
          <AboutUsSection />
        </div>
      </Layout>
    </>
  );
}
