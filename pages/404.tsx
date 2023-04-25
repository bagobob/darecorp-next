import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

type Props = {}

const Custom404 = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>404|Darecorp</title>
                <meta name="description" content="Darecorp - Leading industries into the new area of technology" />
            </Head>
            <div className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">{t('404_one')}</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">{t('404_two')}</p>
                        <Link href="/" className="py-4 px-8 rounded-lg bg-indigo-600 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                            {t('404_three')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

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

export default Custom404