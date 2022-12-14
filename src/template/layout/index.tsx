import Head from "next/head";
import { LayoutType } from "../../core/enum/layout.type";
import Footer from "../footer";
import Header from "../header";

const Layout = ({ metaInfo, children }: LayoutType) => {
    return(
        <>
        <Head>
          <title>{metaInfo.title}</title>
          <meta name="description" content={metaInfo.description} />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <>
        <Header />
        {children}
        <Footer />
        </>
      </>
    )
}

export default Layout;