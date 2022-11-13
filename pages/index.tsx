import Head from 'next/head'
import Image from 'next/image'
import { MetaData } from '../src/core/enum/meta-data.type';
import BenefitsSection from '../src/template/benefits-section';
import ExploreBanner from '../src/template/explore-banner';
import HeroSection from '../src/template/hero-section';
import Layout from '../src/template/layout';
import SupportSection from '../src/template/support-section';

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
    <BenefitsSection />
    <SupportSection />
  </Layout>
  </>
  )
}
