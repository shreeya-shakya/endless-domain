import Head from 'next/head'
import Image from 'next/image'
import { MetaData } from '../src/core/enum/meta-data.type';
import Layout from '../src/template/layout';

export default function Home() {
  let meta: MetaData = {
    title: "Endless Domain",
    description: "Rent Token page",
  };

  return (
  <>
  <Layout metaInfo={meta}>
    <h1>Title</h1>
  </Layout>
  </>
  )
}
