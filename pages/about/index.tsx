import Header from '@/components/hero/Header'
import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Transition from '@/components/transition/Transition';
import CtaSection from '@/components/cta_section/CtaSection';
import bgAbout from "@/public/images/bg_about.png";
import OurValue from '@/components/our_value/OurValue';
import getConfig from 'next/config';
import { CardTextDetails } from 'data/CardTextDetails';
import CardText from '@/components/card/CardText';

type Props = {
  
}


const Index = () => {
  const { t } = useTranslation();
  const cardDetails = CardTextDetails.value;
  return (
    <>
      <Head>
        <title>{t('apropo')}</title>
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
      </Head>
      <Header title={t('about_title')} firstSentence={t("about_firstSentence")} secondSentence={t("about_secondSentence")} alt="about_header_image" img={bgAbout} width={615} height={406} />
      <Transition bgColor="bg-slate-900" textColor="text-white" transition_content="transition_text_about" transition_title={'transition_title_other'} />
      <OurValue />
      {cardDetails && cardDetails.map((obj, idx) => (
        <CardText key={idx} title={obj.title} id={obj.id} content={obj.content} img={obj.img} />
      ))}
      <CtaSection />
    </>

  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
  return {
    props: {
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

export default Index