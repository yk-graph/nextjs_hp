import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="高井戸制作コンテンツ"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
