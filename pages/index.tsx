import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import Transition from '../components/transition/Transition';
import OurService from '../components/our-service/OurService';
import AskQuote from '../components/ask_quote/AskQuote';
import GetInTouch from '../components/get_in_touch/GetInTouch';
import Step from '@/components/step/Step';


type Props = {
  // Add custom props here
}

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Darecorp</title>
        <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
      </Head>
          <Hero />
          <Transition transition_content='transition_content' transition_title='transition_title'/>
          <OurService />
          <Step />
          <AskQuote />
          <GetInTouch />
    </>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? ('fr' || 'en') , [
      'common',
      'header',
      'footer',
      'about',
    ])),
  },
})

export default Home;