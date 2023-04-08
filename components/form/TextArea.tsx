import React from 'react'

type Props = {
    label: string;
    divClassName?: string;
    id: string;
    rows: number;
    borderClass?: string;
    placeholder?: string;
    textAreaClassName?: string;
}

const TextArea = (props: Props) => {
    return (
        <div className={props.divClassName}>
            <label htmlFor={props.id} className='block text-gray-700 font-bold mb-2'>
                {props.label}
            </label>
            <textarea
                name={props.id}
                id={props.id}
                rows={props.rows}
                placeholder={props.placeholder}
                className={props.textAreaClassName ? props.textAreaClassName: 
                    `${props.borderClass} py-4 px-6 rounded-md w-full mb-4 mr-4 outline-none`}

            ></textarea>
        </div>
    )
}

export default TextArea