import Link from 'next/link'
import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';

type Props = {
    icon: ReactNode;
    title: string;
    content: string;
}

const CardIcon = (props: Props) => {
    const { t } = useTranslation();
    return (
        <div  className={`bg-white rounded-xl shadow-2xl h-[420px]`} style={{ position: 'relative' }}>
            <div className='p-8'>
                {props.icon}
                <h3 className='font-bold text-2xl my-6'>{props.title}</h3>
                <p className='text-gray-600 text-lg'>{props.content}</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4' style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <Link href="/quote/quote-page" className='flex items-center text-indigo-600 cursor-pointer'>{t('more_info')} <FontAwesomeIcon icon={faArrowRight} className='w-3 ml-2' /></Link>
            </div>
        </div>
    )
}

export default CardIcon