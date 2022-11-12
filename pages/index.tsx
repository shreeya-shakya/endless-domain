import Head from 'next/head'
import Image from 'next/image'
import { MetaData } from '../src/core/enum/meta-data.type';
import Layout from '../src/template/layout';
import styles from '../styles/Home.module.css'

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
