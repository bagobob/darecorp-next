import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {
    bgColor?: string;
    textColor?: string;
    transition_content: string;
    transition_title: string;
    showButton?: false;
}

const Transition = (props: Props) => {
    const { t } = useTranslation();
    return (
        <div className={`w-full mt-32 ${props.bgColor} ${props.textColor}`}>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center py-8'>
                    <h1 className='text-3xl font-bold md:text-5xl'>{t(props.transition_title)}</h1>
                    <p className='text-lg py-6 text-gray-500 md:text-2xl'>
                        {t(props.transition_content)}
                    </p>
                </div>
                {!props.showButton && (
                    <div className='flex justify-center items-center pb-3'>
                        <Link href="/contacts/contact-page">
                            <button className='font-normal p-3'>{t('contact_us_button')}</button>
                        </Link>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Transition