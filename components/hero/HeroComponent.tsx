import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

type Props = {
    title: string;
    linkStats?: boolean;
    subtitle: string;
    img: string | "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply";
}

const HeroComponent = (props: Props) => {
    const { t } = useTranslation();
    const links = [
        { name: 'web', href: '/services/service/web-development' },
        { name: 'it_consult', href: '/services/service/it-consulting' },
        { name: 'marketing', href: '/services/service/marketing-digital' },
    ]
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                src={props.img}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
            >
                <path
                    fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                        id="10724532-9d81-43d2-bb94-866e98dd6e42"
                        x1="1097.04"
                        x2="-141.165"
                        y1=".22"
                        y2="363.075"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#776FFF" />
                        <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <path
                    fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                        id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                        x1="1097.04"
                        x2="-141.165"
                        y1=".22"
                        y2="363.075"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#776FFF" />
                        <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{props.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {t(props.subtitle)}
                    </p>
                </div>

                {props.linkStats && (<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <Link key={link.name} href={link.href}>
                                {t(link.name)} <span aria-hidden="true">&rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>)
                }
            </div>
        </div>
    )
}

export default HeroComponent