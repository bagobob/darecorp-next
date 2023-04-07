import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import HeroComponent from '@/components/hero/HeroComponent';
import QuoteForm from '@/components/form/QuoteForm';

type Props = {}

const QuotePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('quote')}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroComponent title={t('quote_obtain')} subtitle='subtitle_quote_hero_component' img='/images/quote_hero_component.jpg'/>
        <QuoteForm />
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
      'service'
    ])),
  },
})

export default QuotePage