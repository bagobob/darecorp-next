import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'next-i18next';
import {  GetStaticPaths, GetStaticProps } from 'next';
import { FeatureItem, ServiceItem } from 'pages/api/service';
import Layout from '@/components/layout/Layout';
import HeroComponent from '@/components/hero/HeroComponent';
import ServiceComponent from '@/components/service-component/ServiceComponent';
import CtaSection from '@/components/cta_section/CtaSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
    service: any;
    features: any
}

const Service = ({service, features}: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{`${t('service')}-${t(service.hero_title)}`}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <HeroComponent title={t(service.hero_title)} linkStats subtitle={service.hero_subtitle} img={`/images/${service.hero_image}`} />
                <ServiceComponent service={service} features={features} />
                <CtaSection />
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/service');
    const services: ServiceItem[] = await res.json();;
    const paths = services.map(item => {
        return {
            params: { name: item.name },
        };
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props> = async ({params, locale}) => {
    const name = params!.name as string;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
    const res = await fetch(`${apiUrl}/api/service`);
    const data: ServiceItem[] = await res.json();
    const service: ServiceItem = data.filter((item) => item.name == name)[0]
    const features: FeatureItem[] = service.feature
    return {
        props: {
            service,
            features,
            ...(await serverSideTranslations(locale ?? ('fr' || 'en'), [
                'common',
                'header',
                'footer',
                'about',
                'service',
            ])),
        },
    }
}


export default Service