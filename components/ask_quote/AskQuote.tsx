import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';


const AskQuote = () => {
    const { t } = useTranslation();
    return (
        <div className='w-full text-white mt-24 bg-slate-900'>
            <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto py-12 '>
                <div className="pt-24">
                    <Image className="w-full" src="/images/devis.jpg" width={2048} height={1366} alt="" />
                </div>

                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:ml-8">
                    <h1 className='py-3 text-2xl md:text-5xl font-bold'>{t('ask_devis_project')}</h1>
                    <p className='py-4 font-medium text-gray-200'>{t('ask_devis_details')}</p>
                    <button className='py-4 px-6 my-4'>{t('ask_devis_button')}</button>
                </div>
            </div>
        </div>
    )
}

export default AskQuote