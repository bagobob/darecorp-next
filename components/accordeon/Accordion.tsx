import React, { ReactElement, useState } from 'react'
import AccordionLayout from './AccordionLayout';
import Image from 'next/image';
import { AccordionLayoutItem } from 'pages/api/accordion';
import { useTranslation } from 'next-i18next';

type Props = {
  accordion: Array<AccordionLayoutItem>;
}


const Accordion = ({ accordion }: Props) => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className='w-full '>
      {accordion && accordion.map((item, index) => (
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto' key={index}>
            <div className={index%2 !== 0 ? "md:order-last": ""}>
              <Image className='object-contain' src={`/images/${item.img}`} alt={item.title} width={500} height={400} />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='py-8 text-5xl md:font-bold'>{t(item.title)}</h1>
              {item.accordion && item.accordion.map((item, index) => (
                <AccordionLayout
                  key={`${item.title}_${index}`}
                  title={t(item.title)}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                >
                  {t(item.content)}
                </AccordionLayout>
              ))
              }
            </div>
      </div>
      ))
}
    </div>
  )
}

export default Accordion