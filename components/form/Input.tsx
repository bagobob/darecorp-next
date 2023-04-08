import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {
    placeholder?: string;
    divClassName?: string;
    borderClass?: string;
    paddingVertical?: string;
    paddingHorizontal?: string;
    type: string;
    id: string;
    label: string;
    required: boolean;
    checkbox?: boolean;
    inputClassName?: string // if this props is define, the input just take this as is className and replace the className define in the input element. 
}

const Input = (props: Props) => {
    const { t } = useTranslation();
    if (props.checkbox) {
        return(
            
        <div className={props.divClassName}>
            <input type="checkbox" 
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                name={props.id}
                id={props.id}   
            />
            <label htmlFor={props.id} className='text-gray-700 font-bold'>{props.label}</label>
        </div>
        )
    }
    return (
        <div className={props.divClassName}>
            <label htmlFor={props.id} className='block text-gray-700 font-bold mb-2'>
                {t(props.label)}
            </label>
            <input
                type={props.type}
                id={props.id}
                name={props.id}
                required={props.required}
                placeholder={props.placeholder}
                className={props.inputClassName ? props.inputClassName
                    : `w-[100%] mr-4 rounded-md mb-4 outline-none ${props.paddingVertical} ${props.paddingHorizontal} ${props.borderClass}`} />
        </div>
    )
}

export default Input