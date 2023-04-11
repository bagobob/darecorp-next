import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout/Layout';
import Header from '@/components/hero/Header';
import ContactTransition from '@/components/transition/ContactTransition';
import Form from '@/components/form/Form';
import bgContact from "@/public/images/bg_contact.png";

type Props = {}

const ContactPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('contact_title')}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
        <Header title={t('contact_title')} firstSentence={t("contact_firstSentence")} secondSentence={t("contact_secondSentence")} alt="contact_header_image" img={bgContact} width={612} height={408} />
        <ContactTransition />
        <Form />
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

export default ContactPage