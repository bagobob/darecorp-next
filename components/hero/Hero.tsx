import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMagnifyingGlassChart, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useTranslation} from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import Scroll from '../scroll/Scroll';


const elements_array = [
    {
        icon: <FontAwesomeIcon icon={faCode} className='h-8 text-indigo-600  px-4 py-2 ' />,
        label: 'web_dev',
        href: "/services/service-page/#service_web_development"
    },
    {
        icon: <FontAwesomeIcon icon={faDesktop} className='h-8 text-indigo-600  px-4 py-2 ' />,
        label: 'it_consult',
        href: "/services/service-page/#service_it_consult"
    },
    {
        icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} className='h-8 text-indigo-600  px-4 py-2 ' />,
        label: 'marketing_digital',
        href: "/services/service-page/#service_marketing_digital"
    }
    
]

const Hero = () => {
    const { t } = useTranslation();
return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                <p className='text-xl pt-24 md:text-2xl'>{t('hero_first_p')}</p>
                <h1 className='py-3 text-4xl md:text-7xl font-bold'>{t('hero_h1')}</h1>
                <p className='text-2xl'>{t('hero_second_p')}</p>
                    <Link href="/contacts/contact-page" className='sm:w-[60%] my-4' >
                        <button className='py-3 px-6'>{t('contact_us_button')}</button>
                    </Link>
                
            </div>
            <div >
                <Image className="w-full object-cover" src="/images/bg-illustration.png" width={604} height={413} alt="darecorp_hero_background" />
            </div>
            <div className='absolute flex flex-col md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl py-8'>
                <p>{t('our_services')}</p>
                <div className='flex justify-between flex-wrap px-4'>
                    {elements_array && elements_array.map((item, index) =>(
                        <p className='flex px-4 py-2 text-slate-500 cursor-pointer link' key={`${item.label}_${index}`}>{item.icon}
                            <Link  href={item.href}>{t(item.label)}</Link>
                        </p>
                    ))
                    }
                </div>
            </div>
        </div>
        <Scroll />
    </div>
)
}

export default Hero