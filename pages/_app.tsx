import Head from 'next/head';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const activeChainId: number = parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`)


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
        <Head>
          <title>Next.js</title>
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
<link rel="manifest" href="/favicon/site.webmanifest" />
<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
<link rel="shortcut icon" href="/favicon/favicon.ico" />
<meta name="msapplication-TileColor" content="#2b5797" />
<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
<meta name="theme-color" content="#ffffff" />
        </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
