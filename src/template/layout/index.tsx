import Head from "next/head";
import { LayoutType } from "../../core/enum/layout.type";
import Header from "../header";

const Layout = ({ metaInfo, children }: LayoutType) => {
    return(
        <>
        <Head>
          <title>{metaInfo.title}</title>
          <meta name="description" content={metaInfo.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
        <Header></Header>
        {children}
        </>
      </>
    )
}

export default Layout;