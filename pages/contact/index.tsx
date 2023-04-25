import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/hero/Header';
import ContactTransition from '@/components/transition/ContactTransition';
import Form from '@/components/form/Form';
import bgContact from "@/public/images/bg_contact.png";

type Props = {}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('contact_title')}</title>
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
      </Head>
      <Header title={t('contact_title')} firstSentence={t("contact_firstSentence")} secondSentence={t("contact_secondSentence")} alt="contact_header_image" img={bgContact} width={612} height={408} />
      <ContactTransition />
      <Form />
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

export default Index