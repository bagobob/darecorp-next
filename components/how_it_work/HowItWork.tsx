import React from 'react';
import { useTranslation } from 'next-i18next';


const HowItWork = () => {
    const howItWorkArray = [
        {
            content: 'how_it_work_need',
        },
        {
            content: 'how_it_work_realization'
        },
        {
            content: 'how_it_work_need_test'
        },
        {
            content: 'how_it_work_need_shipping'
        },
        {
            content: 'how_it_work_need_support'
        },
    ];
    const { t } = useTranslation();
    return (
        <div className="w-full my-32">
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center py-8'>
                    <h2 className='text-5xl font-bold'>{t('how_it_work')}</h2>
                    <p className='text-3xl py-6 text-gray-500'>
                        {t('how_it_work_desc')}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center">
                    {howItWorkArray && howItWorkArray.map((item, index) => (
                        <>
                            <div key={index} className="w-full md:w-1/2 text-center p-4 border py-8 rounded-xl shadow-xl">
                                <p className="text-2xl font-bold text-indigo-600">{t(item.content)}</p>
                            </div>
                            {index < howItWorkArray.length - 1 && (
                                <>
                                    <svg key={`right-${index}`} xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 hidden md:block'
                                        viewBox="0 0 24 24">
                                        <path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414z" style={{ fill: "#4f46e5" }} data-name="Right" />
                                    </svg>
                                    <svg key={`down-${index}`} xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 block md:hidden'
                                        viewBox="0 0 24 24">
                                        <path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style={{ fill: "#4f46e5" }} data-name="Down" />
                                    </svg>
                                </>
                            )}
                        </>
                    ))
                    }
                </div>
                <div className='flex items-center justify-center'>
                    <button className="py-3 px-16 m-8">{t('contact_us_button')}</button>
                </div>

            </div>

        </div>
    )
}

export default HowItWork