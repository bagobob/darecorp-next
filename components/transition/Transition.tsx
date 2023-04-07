import React from 'react';
import { useTranslation } from 'next-i18next';

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
                    <h1 className='text-5xl font-bold'>{t(props.transition_title)}</h1>
                    <p className='text-2xl py-6 text-gray-500'>
                        {t(props.transition_content)}
                    </p>
                </div>
                {!props.showButton && (
                    <div className='flex justify-center items-center pb-3'>
                        <button className='py-3 px-3 sm:w-[25%]'>{t('contact_us_button')}</button>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Transition