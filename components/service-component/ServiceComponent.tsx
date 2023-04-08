import React, { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export class FeatureItem {
    icon: ReactNode;
    title: string;
    description: string;

    constructor(icon: ReactNode, title: string, description: string) {
        this.icon = icon;
        this.title = title;
        this.description = description
    }
}

type Props = {
    title: string;
    feature: Array<FeatureItem>;
    img: string | "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png";
    alt: string;
    subtitle: string;
    result: string;
    resultTitle: string;
    objective: string;
}

const ServiceComponent = (props: Props) => {
    const { t } = useTranslation('service');
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.title}</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                {props.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={props.img}
                        alt={props.alt}
                        width={960}
                        height={720}
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id.
                            </p>
                            <ul className="mt-8 space-y-8 text-gray-600">
                                {props.feature && props.feature.map((item, index) => (
                                    <li className="flex gap-x-3" key={index}>
                                        {item.icon}
                                        <span>
                                            <strong className="font-semibold text-gray-900">{t(item.title)}</strong> {item.description}
                                        </span>
                                    </li>
                                ))

                                }
                            </ul>
                            <p className="mt-8">
                                {props.objective}
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{props.resultTitle}</h2>
                            <p className="mt-6">
                            {props.result}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponent