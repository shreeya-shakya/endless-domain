import Head from "next/head";
import { LayoutType } from "../../core/enum/layout.type";

const Layout = ({ metaInfo, children }: LayoutType) => {
    console.log(typeof children, "<<--children")
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