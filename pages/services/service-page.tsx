import Head from 'next/head'
import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import Header from '@/components/hero/Header';
import Transition from '@/components/transition/Transition';
import CtaSection from '@/components/cta_section/CtaSection';
import { cardDetails } from 'data/card_details';
import Card from '@/components/card/Card';
import Benefit from '@/components/benefits/Benefit';

type Props = {}

const ServicePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('our_service')}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Header title={t('service_title')} firstSentence={t("service_firstSentence")} secondSentence={t("service_secondSentence")} alt="service_header_image" img="/images/bg_service.png" width={541} height={461} />
          <Transition bgColor="bg-slate-900" textColor="text-white" transition_content="transition_text_service" transition_title={'transition_title_other'} />
          <Benefit />
          {cardDetails && cardDetails.map((item, index) => (
            <Card 
              key={`${item.title}_${index}`}
              title={t(item.title)}
              firstText={item.firstText}
              secondText={item.secondText}
              img={item.img}
              link={item.link}
              id={item.id}
              order={index%2 !== 0 ? "md:order-last" : ""}
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
      'service',
    ])),
  },
})

export default ServicePage