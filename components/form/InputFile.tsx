import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

// This Input File support only these formats : .doc,.docx,.pdf,.pptx,odf

type Props = {
    id: string
}

const InputFile = (props: Props) => {
    const { t } = useTranslation();
    const [nameFile, setNameFile] = useState<string | undefined>(undefined);
    const getFilename = () => {
        const fileInput = document.getElementById(props.id);
        if (fileInput) {
            fileInput.onchange = (event: Event) => {
                const target = event.target as HTMLInputElement;
                const file: File = (target.files as FileList)[0];
                const name: string = file.name;
                setNameFile(name);
            }
        }
    }
    useEffect(() => {
        getFilename();
    })
    return (
        <>
            {nameFile === undefined
                ?
                (<label className="flex flex-col items-center px-4 py-6 mt-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">{t('select_file')}</span>
                    <input type='file' accept='.doc,.docx,.pdf,.pptx,odf' name={props.id} id={props.id} className="hidden" />
                </label>)
                : (
                    <label className="flex flex-col items-center px-4 py-6 mt-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                        <span className="mt-2 text-base leading-normal">{nameFile}</span>
                    </label>)}
        </>
    )
}

export default InputFile