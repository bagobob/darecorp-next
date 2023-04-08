import React from 'react';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const OurValue = () => {
    const { t } = useTranslation('about');
    const data = [
        {
            title: 'our_value_construction_title',
            icon: <FontAwesomeIcon icon={faHeart} className="text-2xl text-red-500 mb-2 w-8" />,
            content: 'our_value_costruction_content'
        },
        {
            title: 'our_value_engagement_title',
            icon: <FontAwesomeIcon icon={faStar} className="text-2xl text-yellow-500 mb-2 w-8" />,
            content: 'our_value_engagement_content'
        },
        {
            title: 'our_value_performance_title',
            icon: <FontAwesomeIcon icon={faThumbsUp} className="text-2xl text-green-500 mb-2 w-8" />,
            content: 'our_value_performance_content'
        },
    ]
    return (
        <div className="w-full mb-32 bg-zinc-200">
            <div className="max-w-[1240px] mx-auto px-2">
                <h1 className="text-3xl font-bold text-center py-8 md:text-5xl">{t('our_value_title')}</h1>
                <div className="grid lg:grid-cols-3 gap-4 pt-4">
                    {data.map((item, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <div className='py-4'>
                                {item.icon}
                            </div>
                            <div className="">
                                <h2 className="font-bold text-lg text-center md:text-xl pb-2">{t(item.title)}</h2>
                                <p className="text-medium md:text-lg pt-2 pb-4">
                                    {t(item.content)}
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurValue