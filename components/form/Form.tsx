import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Input from './Input';
import TextArea from './TextArea';
import Link from 'next/link';
import InputFile from './InputFile';

const checkbox_array = [
    { id: 'job', label: 'job', name:'contact_radio' },
    { id: 'info', label: 'infos', name:'contact_radio' },
];

const Form = () => {
    const { t } = useTranslation();
    const [showWork , setShowWork] = useState<string>("");

    const hideAndShowInputFile = () =>{
        const radioButtons = document.querySelectorAll('input[type="radio"][name="contact_radio"]');
        const radioButtonInfo = document.getElementById('info') as HTMLInputElement;
        const radioButtonJob = document.getElementById('job') as HTMLInputElement;
        radioButtons.forEach((radioButton) =>{
            radioButton.addEventListener('change', ()=>{
                if(radioButtonInfo.checked){
                    setShowWork("show");
                } else if(radioButtonJob.checked) {
                    setShowWork("hide");
                }
            })
        })
    }
    
    useEffect(() => {
        hideAndShowInputFile();
    });
    
    return (
        <div className='bg-cover bg-center bg-fixed bg-no-repeat mb-4'>
            <div className='flex justify-center items-center '>
                <div className='bg-white p-10 rounded-lg shadow-md w-3/4 lg:w-1/2'>
                    <h2 className='text-center text-3xl font-bold mb-6'>{t('contact_us')}</h2>
                    <form>
                        <div className='flex flex-col py-2'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">{t('interested_by_what')}* </label>
                            </div>
                            <div className='flex flex-row gap-4'>
                                {checkbox_array && checkbox_array.map((item, index) => (
                                    <Input
                                        key={`${item.label}_${index}`}
                                        radio
                                        id={item.id}
                                        name={item.name}
                                        divClassName='flex items-center justify-center gap-x-2'
                                        type='radio'
                                        label={t(item.label)}
                                        required={false}

                                    />
                                ))
                                }
                            </div>
                        </div>
                        <Input
                            id='first_name'
                            type='text'
                            label={'first_name'}
                            paddingVertical='py-2'
                            paddingHorizontal='px-4'
                            divClassName='mr-2'
                            borderClass='border border-gray-400'
                            required
                            placeholder={t('enter_first_name') || ''}
                        />
                        <Input
                            id='last_name'
                            type='text'
                            label={'last_name'}
                            paddingVertical='py-2'
                            paddingHorizontal='px-4'
                            required
                            divClassName='mr-2'
                            borderClass='border border-gray-400'
                            placeholder={t('enter_last_name') || ''}
                        />
                        {(showWork === "show") && (<Input
                            id='enterprise'
                            type='text'
                            label='enterprise_name'
                            paddingVertical='py-2'
                            required
                            paddingHorizontal='px-4'
                            divClassName='mr-2'
                            borderClass='border border-gray-400'
                            placeholder={t('enter_company_name') || ''}
                        />)}
                        <Input
                            id='phone'
                            type='tel'
                            label='phone_no'
                            required
                            paddingVertical='py-2'
                            paddingHorizontal='px-4'
                            divClassName='mr-2'
                            borderClass='border border-gray-400'
                            placeholder={t('enter_phone_number') || ''}
                        />
                        <Input
                            id='email'
                            type='email'
                            label='Email'
                            required
                            paddingVertical='py-2'
                            paddingHorizontal='px-4'
                            divClassName='mr-2'
                            borderClass='border border-gray-400'
                            placeholder={t('enter_email') || ''}
                        />
                        <Input
                            id='subject'
                            type='text'
                            label='subject'
                            paddingVertical='py-2'
                            required
                            paddingHorizontal='px-4'
                            divClassName='mr-2'
                            borderClass='border border-gray-400'
                            placeholder={t('enter_subject') || ''}
                        />
                        <TextArea
                            label='Message'
                            id='message'
                            rows={6}
                            placeholder={t('enter_message') || ''}
                            borderClass='border border-gray-400'
                        />
                        {(showWork === "hide") && (<div className='mb-2'>
                            <span className="block text-gray-700 font-bold mb-2">CV</span>
                            <InputFile id='attached_file' />
                            <span className='text-gray-700 font-bold'>{t('file_format')} : PDF, DOC, DOCX</span> <br />
                            <span className='text-gray-700 font-bold'>{t('limit_file_length')}: 5Mo</span>
                        </div>)}
                        <div>
                            <span className='text-sm block text-gray-700 font-bold md:text-lg'>
                                {t('respect_policy')}
                                <Link href='/legals/privacy' className='text-indigo-600'> {t('privacy_policy')}</Link>
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className='bg-indigo-600 text-white py-2 px-4 rounded-md w-full lg:w-1/2 mt-4'
                            >
                                {t('send_button')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form