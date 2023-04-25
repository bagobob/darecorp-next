import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import HeroComponent from '@/components/hero/HeroComponent';
import QuoteForm from '@/components/form/QuoteForm';

type Props = {}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('quote')}</title>
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
      </Head>
      <HeroComponent title={t('quote_obtain')} subtitle='subtitle_quote_hero_component' img='/images/quote_hero_component.jpg' />
      <QuoteForm />
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

export default Index