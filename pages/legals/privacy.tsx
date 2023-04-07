import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

type Props = {}

const Privacy = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('privacy')}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        
      </Layout>
    </>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? ('fr' || 'en'), [
      'common',
      'header',
      'footer',
      'about',
    ])),
  },
})

export default Privacy