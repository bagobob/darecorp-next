import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticPaths, GetStaticProps } from 'next';
import HeroComponent from '@/components/hero/HeroComponent';
import ServiceComponent from '@/components/service-component/ServiceComponent';
import CtaSection from '@/components/cta_section/CtaSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ServiceDetails } from 'data/ServiceDetails';
import { ServiceItem, FeatureItem } from 'types/type';

type Props = {
    service: ServiceItem;
    features: any
}


const Service = ({ service, features }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{`${t('service')}-${t(service.hero_title)}`}</title>
                <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
            </Head>
            <HeroComponent title={t(service.hero_title)} linkStats subtitle={service.hero_subtitle} img={`/images/${service.hero_image}`} />
            <ServiceComponent service={service} features={features} />
            <CtaSection />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const services: ServiceItem[] = ServiceDetails.value;
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

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
    const name = params!.name as string;
    const data: ServiceItem[] = ServiceDetails.value;
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