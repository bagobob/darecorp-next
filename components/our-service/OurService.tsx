import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMagnifyingGlassChart, faDesktop, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import CardIcon from '../card/CardIcon';
import Image from 'next/image';


const OurService = () => {
    const { t } = useTranslation();
    const service_data = [
        {
            title: t('web_app'),
            icon: <FontAwesomeIcon icon={faCode} className='w-8 bg-indigo-600 text-white rounded-lg mt-[-3rem] md:mt-[-4rem] md:w-12 p-4' />,
            content: "web_app_our_service_content",
        },
        {
            title: t('marketing_digital'),
            icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} className='w-8 bg-indigo-600 text-white rounded-lg mt-[-3rem] md:mt-[-4rem] md:w-12 p-4' />,
            content: "marketing_digital_our_service_content",
        }
    ];

    return (
        <div id="services" className='w-full mt-24 '>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <Image className='w-full h-full object-cover mix-blend-overlay'src="/images/service.jpg" alt="service_image_background_home" width={1920} height={1272} />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12 text-center'>
                    <h1 className='text-3xl pt-8 text-slate-300 uppercase text-center md:text-5xl'>{t('our_service')}</h1>
                    <h2 className='text-2xl font-bold py-6 text-center md:text-4xl'>{t('service_subtitle')}</h2>
                    <p className='py-4 text-lg text-slate-300 md:text-2xl'>{t('service_content')}</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-8 px-4 pt-12 sm:pt-20 text-black'>
                    {service_data && service_data.map((item, index) => (
                        <CardIcon
                            key={`${item.title}_${index}`}
                            icon={item.icon}
                            title={item.title}
                            content={t(item.content)}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurService