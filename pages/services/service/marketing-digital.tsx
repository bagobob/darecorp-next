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


type Props = {}

const marketingDigitalData = { 
            title: 'Marketing Digital',
            subtitle: "Notre rôle est d'offrir aux entreprise la possibilité de toucher un public plus large avec précision, le tout à un coût abordable.",
            description: '',
            feature: [
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "marketing_first_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "marketing_second_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "marketing_third_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
            ],
            subDescription: 'L’objectif ? Leur fournir un système d’information adapté et personnalisé. Depuis 2018, nous travaillons avec des structures agiles, aux profils diversifiés et complémentaires. Cette diversité nous permet de nous adapter à toutes les situations, quels que soient les environnements, mais aussi d’être capable de répondre efficacement aux besoins.',
            secondTitle: 'Le résultat?',
            secondContent: 'Des applications qui répondent aux attentes grâce à une information qui circule correctement et efficacement. Un utilisateur au centre du dispositif, informé et formé tout au long de la mise en place. Une transformation digitale réussie, aboutie et pérenne.'
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
                <ServiceComponent
                subtitle={marketingDigitalData.subtitle}
                title={t('marketing_digital')} 
                feature={marketingDigitalData.feature}
                objective={marketingDigitalData.subDescription}
                resultTitle={marketingDigitalData.secondTitle}
                result={marketingDigitalData.secondContent} 
                img='/images/marketing.png' 
                alt='darecorp-marketing-digital-service-page' />
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