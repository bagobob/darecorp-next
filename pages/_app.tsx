import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <meta name="robots" content="all" />
        <meta charSet="utf-8" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>


  )
}

export default appWithTranslation(App);
