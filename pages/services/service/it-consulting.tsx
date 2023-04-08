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

const consultItData = {
            title: 'IT Consultation',
            subtitle: "Permettre aux entreprises de réussir la construction de nouveaux services basés sur la collecte sécurisée et la valorisation de données terrain.",
            description: '',
            feature: [
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "it_first_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "it_second_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
                new FeatureItem(<FontAwesomeIcon icon={faCloud} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>, "it_third_service","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."),
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
                <title>{`${t('service')}-${t('it_consult')}`}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <HeroComponent title={t('it_consult')} linkStats subtitle='subtitle_itConsult_hero_component' img='/images/it_hero_component.avif' />
                <ServiceComponent 
                subtitle={consultItData.subtitle}
                title={t('it_consult')} 
                feature={consultItData.feature}
                objective={consultItData.subDescription}
                resultTitle={consultItData.secondTitle}
                result={consultItData.secondContent}
                img='/images/it_consult.jpg' 
                alt='darecorp-it-consult-service-page' />
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