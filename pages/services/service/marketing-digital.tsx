import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import HeroComponent from '@/components/hero/HeroComponent';
import { useRouter } from 'next/router';
import ServiceComponent, { FeatureItem } from '@/components/service-component/ServiceComponent';
import CtaSection from '@/components/cta_section/CtaSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faLock, faServer } from '@fortawesome/free-solid-svg-icons';
import { serviceHeroData } from 'data/service_hero_data';


type Props = {}

const marketingDigitalData = { 
            title: 'Marketing Digital',
            subtitle: "",
            description: '',
            feature: [
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "marketing_first_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "marketing_second_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "marketing_third_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
            ],
            subDescription: '',
            secondTitle: '',
            secondContent: ''
}



const Service = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{`${t('service')}-${t('marketing_digital')}`}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <HeroComponent title={t('marketing_digital')} linkStats subtitle='subtitle_marketing_hero_component' img='/images/marketing_hero_component.avif' />
                <ServiceComponent title={t('marketing_digital')} feature={marketingDigitalData.feature} img='/images/marketing.png' alt='darecorp-marketing-digital-service-page' />
                <CtaSection />
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

export default Service;