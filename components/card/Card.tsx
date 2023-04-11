import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

type Props = {
    title: string;
    firstText: string;
    secondText: string;
    link: string;
    img: string;
    order: string;
    id: string;
}

const Card = (props: Props) => {
    const { t } = useTranslation('service');
    return (
        <div className='w-full' id={props.id}>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className={`${props.order}`}>
                    <Image src={props.img} alt='web_development' width={500} height={400} />
                </div>
                <div className='flex flex-col justify-center md:items-start w-full px-2'>
                    <h1 className='text-3xl py-8 md:text-5xl md:font-bold'>{props.title}</h1>
                    <p className='md:text-lg font-medium text-slate-600 mb-8'>
                        {t(props.firstText)}
                    </p>
                    <p className='font-medium text-slate-600 mb-8'>
                        {t(props.secondText)}
                    </p>
                    <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                        {/* <Link href={`/services/service/${props.link}`}> */}
                        <Link href="/contacts/contact-page#contact_us">
                            <button className="py-3 px-6 my-4">
                                {t('more_info')}
                            </button>
                        </Link>
                        <Link href="/quote/quote-page" className="text-sm font-semibold leading-6">{t('quote_ask')} <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card