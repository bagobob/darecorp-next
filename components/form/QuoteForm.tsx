import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Input from './Input';
import TextArea from './TextArea';
import InputFile from './InputFile';


type Props = {}

const QuoteForm = (props: Props) => {
    const { t } = useTranslation();

    const checkbox_array = [
        { id: 'web', label: 'web' },
        { id: 'app', label: 'app' },
        { id: 'consult', label: 'consulting' },
        { id: 'marketing', label: 'marketing' },
        { id: 'erp', label: 'erp' },
        { id: 'other', label: 'other' },
    ];

    return (
        <div className="w-full md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <Image className="w-full h-full object-contain" fill src="/images/darecorp.jpeg" alt="logo" />
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center items-center bg-white px-8">
                <form>
                    {/* <p className="text-gray-800 font-bold text-2xl mt-2 mb-7">
                        Vous pouvez nous laisser un  <a
                            href="mailto:mail@email.com"
                            className='underline underline-offset-1'
                            target="_blank"
                            rel="noreferrer"
                        >
                            email
                        </a> ou remplir le formulaire.
                    </p> */}
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <Input
                            id='first_name'
                            type='text'
                            label={'first_name'}
                            paddingVertical='py-2'
                            paddingHorizontal='px-4'
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
                            borderClass='border border-gray-400'
                            placeholder={t('enter_last_name') || ''}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
                    </div>
                    <Input
                        id='enterprise'
                        type='text'
                        label='enterprise_name'
                        paddingVertical='py-2'
                        required
                        paddingHorizontal='px-4'
                        divClassName='mr-2'
                        borderClass='border border-gray-400'
                        placeholder={t('enter_company_name') || ''}
                    />
                    <div className='flex flex-col py-2'>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">{t('interested_by_what')} </label>
                        </div>
                        <div className='flex flex-row gap-4'>
                            {checkbox_array && checkbox_array.map((item, index) => (
                                <Input
                                key={`${item.label}_${index}`}
                                    checkbox
                                    id={item.id}
                                    divClassName='flex items-center justify-center gap-x-2'
                                    type='checkbox'
                                    label={t(item.label)}
                                    required={false}

                                />
                            ))
                            }
                        </div>
                    </div>
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
                        label='Votre Demande'
                        id='message'
                        rows={6}
                        placeholder={t('enter_message') || ''}
                        borderClass='border border-gray-400'
                    />
                    <div>
                        <span className="block text-gray-700 font-bold mb-2">{t('piece_joint')}</span>
                        <InputFile id='attached_file' />
                        <span className='text-gray-700 font-bold'>{t('file_format')} : PDF, DOC, DOCX, PPTX</span> <br />
                        <span className='text-gray-700 font-bold'>{t('limit_file_length')}: 5Mo</span>
                    </div>
                    <div className='flex flex-col items-center my-2'>
                        <span className='text-gray-700 font-bold  my-2'>
                            {t('respect_policy')}
                            <Link href='/legals/privacy' className='text-indigo-600'> {t('privacy_policy')}</Link>
                        </span>
                    </div>
                    
                    <div className="flex justify-end mt-6">
                        <button className='py-3 px-6 sm:w-[100%] my-4'>{t('send_button')}</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default QuoteForm