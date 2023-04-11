import Header from '@/components/hero/Header'
import Layout from '@/components/layout/Layout'
import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Transition from '@/components/transition/Transition';
import {AccordionLayoutItem} from 'pages/api/accordion';
import Accordion from '@/components/accordeon/Accordion';
import CtaSection from '@/components/cta_section/CtaSection';
import bgAbout from "@/public/images/bg_about.png";
import OurValue from '@/components/our_value/OurValue';
import getConfig from 'next/config';

type Props = {
  data: any;
}

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_URL;

const AboutPage = ({data}: Props) => {
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
          <Header title={t('about_title')} firstSentence={t("about_firstSentence")} secondSentence={t("about_secondSentence")} alt="about_header_image" img={bgAbout} width={615} height={406} />
          <Transition bgColor="bg-slate-900" textColor="text-white" transition_content="transition_text_about" transition_title={'transition_title_other'} />
          <OurValue />
          <Accordion accordion={data} />
          <CtaSection />
        </>
      </Layout>
    </>

  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    const res = await fetch(`${apiUrl}/api/accordion`);
    const data: AccordionLayoutItem[] = await res.json();
  return{
    props: {
      data,
      ...(await serverSideTranslations(locale ?? ('fr' || 'en'), [
        'common',
        'header',
        'footer',
        'about',
      ])),
      fallback: false,
    },
  }  
}

export default AboutPage