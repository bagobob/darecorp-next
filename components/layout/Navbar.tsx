import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useTranslation} from 'next-i18next';
import { useRouter } from "next/router";

const links = [
    { url: '/', label: 'home', active: true },
    { url: '/services/service-page', label: 'service', active: false },
    { url: '/contacts/contact-page', label: 'contact', active: false },
    { url: '/about/about-page', label: 'about', active: false },
];



const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = () => {
        setNav(!nav);
    };

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }
    const { t, i18n } = useTranslation('header');
    const router = useRouter();
    const { pathname, asPath, query } = router

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/images/logo.png" width={144} height={144} className="mr-4 h-auto object-contain" alt='logo-darecorp' />
                    </Link>
                    <ul className='hidden md:flex'>
                        {links && links.map(({ url, label }) => (
                            <li
                                className={`cursor-pointer hover:bg-transparent hover:text-indigo-600 ${asPath === url && 'text-indigo-600'}`}
                                key={`${url}${label}`}
                            >   
                                <Link href={url}>{t(label)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex pr-4 items-center">
                    <span className={`border-none mr-4 cursor-pointer ${i18n.language === 'fr' ? 'text-indigo-600' : 'bg-transparent text-black'
                        }`}
                        onClick={() => onToggleLanguageClick('fr')}>
                        FR
                    </span>
                    <span className={`px-8 py-3 cursor-pointer ${i18n.language === 'en' ? 'text-indigo-600' : 'bg-transparent text-black'
                        }`}
                        onClick={() => onToggleLanguageClick('en')}>EN</span>
                    <Link href="/quote/quote-page">
                        <button className='py-3 px-3'>{t('ask_quote_button')}</button>
                    </Link>
                </div>

                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <FontAwesomeIcon icon={faBars} className="w-5" /> : <FontAwesomeIcon icon={faX} className="w-5" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                {links && links.map(({ url, label }) => (
                    <li
                        className={`border-b-2 border-zinc-300 w-full cursor-pointer ${asPath === url && 'text-indigo-600'}`}
                        key={`${url}${label}`}
                    >
                        <Link href={url}>{t(label)}</Link>
                    </li>
                ))
                }
                <li className="flex flex-col my-4">
                    <span
                        className={`px-8 py-3 mb-4  cursor-pointer ${i18n.language === 'fr' ? 'text-indigo-600' : 'bg-transparent text-black'
                            }`}
                        onClick={() =>router.push({ pathname, query }, asPath, { locale: 'fr' })}>
                        FR
                    </span>
                    <span
                        className={`px-8 py-3 cursor-pointer ${i18n.language === 'en' ? 'text-indigo-600' : 'bg-transparent text-black'
                            }`}
                        onClick={() => router.push({ pathname, query }, asPath, { locale: 'en' })}>
                        EN
                    </span>
                    <Link href="/devis">
                        <button className="py-3 px-8">{t('ask_quote_button')}</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar