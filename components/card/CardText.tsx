import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';


type Props = {
    id: number;
    title: string;
    content: Array<{
        title: string;
        desc: string;
    }>;
    img: string;
}

const CardText = ({ id, title, content ,img  }: Props) => {
    const { t } = useTranslation();
    return (
        <div className='w-full '>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className={id % 2 !== 0 ? "md:order-last" : ""}>
                        <Image className='object-contain' src={`/images/${img}`} alt={title} width={500} height={400} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='py-8 text-5xl md:font-bold'>{t(title)}</h1>
                        {content && content.map((element, index) => (
                            <React.Fragment key={index}>
                                <div className='flex w-1/2 justify-between p-2 mt-2 rounded bg-slate-900'>
                                    <div className='flex'>
                                        <div className='text-white font-bold uppercase'>{t(element.title)}</div>
                                    </div>
                                </div>
                                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6 text-center">
                                    <span className='font-medium text-slate-600'>
                                        {t(element.desc)}
                                    </span>
                                </div>
                            </React.Fragment>
                        ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default CardText