import React from 'react';
import { useTranslation} from 'next-i18next';
import Scroll from '../scroll/Scroll';
import Image from 'next/image';

type Props = {
    title: string;
    firstSentence: string;
    secondSentence: string;
    img: string;
    alt: string;
    width?: number;
    height?: number;
}

const Header = (props: Props) => {
    const { t } = useTranslation();
return (
    <div
            className="w-full h-screen flex flex-col justify-between"
        >
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="pt-16">
                    <Image className="w-full" src={props.img} alt={props.alt} width={props.width} height={props.height} />
                </div>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className='text-xl pt-24 md:text-2xl'>{props.firstSentence}</p>
                    <h1 className='py-3 text-4xl md:text-6xl font-bold'>{props.title}</h1>
                    <p className="font-medium text-slate-600">{props.secondSentence}</p>
                    <button className="py-3 px-6 sm:w-[60%] my-4">{t('contact_us_button')}</button>
                </div>
            </div>
            <Scroll />
        </div>
);
}

export default Header