import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  children: string;
  index: number;
  activeIndex: number;
  setActiveIndex: Function
}

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex}: Props) => {
  const handleSetIndex = (index: number) => (activeIndex !== index) && setActiveIndex(index);
  const isOpen = activeIndex === index;
  return (
    <>
            <div onClick={() => handleSetIndex(index)} className='flex w-1/2 justify-between p-2 mt-2 rounded bg-slate-900'>
                <div className='flex'>
                    <div className='text-white font-bold'>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                        isOpen
                            ? <FontAwesomeIcon icon={faArrowAltCircleDown} className='w-8 h-8 text-white'  size="sm" />
                            : <FontAwesomeIcon icon={faArrowAltCircleUp} className='w-8 h-8 text-white animate-bounce' bounce size="sm" />
                    }
                </div>
            </div>

            {(activeIndex === index) && (
                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6 text-center">
                    <span className='font-medium text-slate-600'>
                        {children}
                    </span>

                </div>
            )}
        </>
  )
}

export default AccordionLayout