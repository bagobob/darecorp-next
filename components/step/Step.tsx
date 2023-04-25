import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const step_array = [
    {
        title: "step_need_title",
        num: 1,
        description: "step_need_analysis"
    },
    {
        title: "step_realization_title",
        num: 2,
        description: "step_product_realization"
    },
    {
        title: "step_test_title",
        num: 3,
        description: "step_test_solution"
    },
    {
        title: "step_delivering_title",
        num: 4,
        description: "step_delivery_solution"
    },
    {
        title: "step_support_title",
        num: 5,
        description: "step_technical_support"
    }

]
const Step = () => {
    const { t } = useTranslation();
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 py-8 md:mx-auto sm:text-center md:mb-12">
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    {t('how_it_work')}
                </h1>
                <p className="text-lg text-gray-700 md:text-2xl">
                    {t('how_it_work_desc')}
                </p>
            </div>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-5 sm:grid-cols-2">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                    <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                {step_array && step_array.map((item, index) => (
                    <div key={`${item.title}_${index}`} className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-lg font-bold leading-5">{t(item.title)}</p>
                            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                {item.num}
                            </p>
                        </div>
                        <p className="text-sm text-gray-600">
                            {t(item.description)}
                        </p>
                    </div>
                ))
                }
            </div>
            <div className="text-center">
                <Link href="/contact">
                <button
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    {t('learn_more')}
                </button>
                </Link>
                
            </div>
        </div>
    );
}

export default Step