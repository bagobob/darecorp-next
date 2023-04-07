import React, { ReactElement, useState } from 'react'
import AccordionLayout from './AccordionLayout';

type Props = {
  title: string;
  accordion1: {
    title: string;
    content: string;
  };
  accordion2: {
    title: string;
    content: string;
  };
  accordion3: {
    title: string;
    content: string;
  };
  order?: string;
  img: string;
}

const Accordion = (props: Props) => {

  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className='w-full '>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className={`${props.order}`}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                <h1 className='py-8 text-5xl md:font-bold'>{props.title}</h1>
                    <AccordionLayout
                        title={props.accordion1.title}
                        index={1}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                    {props.accordion1.content}
                    </AccordionLayout>

                    <AccordionLayout
                        title={props.accordion2.title}
                        index={2}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        {props.accordion2.content}
                    </AccordionLayout>
                    <AccordionLayout
                        title={props.accordion3.title}
                        index={3}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        {props.accordion3.content}
                    </AccordionLayout>

                </div>

            </div>
        </div>
  )
}

export default Accordion