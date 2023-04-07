import Header from '@/components/hero/Header'
import Layout from '@/components/layout/Layout'
import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Transition from '@/components/transition/Transition';
import OurValue from '@/components/our_value/OurValue';
import { accordionDetails } from 'data/accordion_detail';
import Accordion from '@/components/accordeon/Accordion';
import CtaSection from '@/components/cta_section/CtaSection';

type Props = {}

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('apropo')}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Header title={t('about_title')} firstSentence={t("about_firstSentence")} secondSentence={t("about_secondSentence")} alt="about_header_image" img="/images/bg_about.png" width={615} height={406} />
          <Transition bgColor="bg-slate-900" textColor="text-white" transition_content="transition_text_about" transition_title={'transition_title_other'} />
          <OurValue />
          {accordionDetails && accordionDetails.map((item,index)=>(
            <Accordion 
              key={`${item.title}_${index}`}
              title={t(item.title)}
              img={item.img}
              accordion1={item.accordion1}
              accordion2={item.accordion2}
              accordion3={item.accordion3}
              order={index%2 !== 0 ? "md:order-last": ""}
            />
          ))
          }
          <CtaSection />
        </>
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

export default AboutPage