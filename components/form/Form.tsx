import React from 'react';
import { useTranslation } from 'next-i18next';
import Input from './Input';
import TextArea from './TextArea';
import Link from 'next/link';

type Props = {}

const Form = (props: Props) => {
    const { t } = useTranslation();
    return (
        <div className='h-screen bg-cover bg-center bg-fixed bg-no-repeat mb-[146px] md:mb-[130px]'>
            <div className='flex justify-center items-center h-screen '>
                <div className='bg-white p-10 rounded-lg shadow-md w-3/4 lg:w-1/2'>
                    <h2 className='text-center text-3xl font-bold mb-6'>{t('contact_us')}</h2>
                    <form>
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