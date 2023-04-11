import React from 'react';
import { useTranslation } from 'next-i18next';


const ContactTransition = () => {
    const { t } = useTranslation();
    return (
        <div id="contact_us" className='w-full h-[50vh] bg-slate-900 text-white flex flex-col justify-center items-center'>
            <div className='max-w-[1240px] mx-auto h-[50vh]'>
                <div className='text-center py-8'>
                    <h1 className='text-3xl md:text-5xl font-medium'>{t('contactTransition_first')}</h1>
                    <h2 className='text-2xl md:text-4xl font-medium'>{t('contactTransition_second')}</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-3 px-5 sm:w-[60%]'>{t('ask_devis_button')}</button>
                </div>
            </div>
        </div>
    )
}

export default ContactTransition