import Head from "next/head";
import { LayoutType } from "../../core/enum/layout.type";

const Layout = ({ metaInfo, children }: LayoutType) => {
    return(
        <>
        <Head>
          <title>{metaInfo.title}</title>
          <meta name="description" content={metaInfo.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
        {children}
        </>
      </>
    )
}

export default Layout;