import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import Link from 'next/link';


const GetInTouch = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full bg-zinc-200 flex flex-col justify-between p-0">
            <div className="grid md:grid-cols-2 max-w-[1024px] m-auto">
                <div>
                    <Image src="/images/contact-img.svg" width={350} height={350} alt="contactImg" className="w-[92%]" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold md:text-5xl mb-[30px]">{t('get_in_touch')}</h1>
                    <form>
                        <div className="grid md:grid-cols-2 max-w-[1024px] m-auto">
                            <Input
                                id='first_name'
                                type='text'
                                label={'first_name'}
                                paddingVertical='py-4'
                                paddingHorizontal='px-6'
                                divClassName='mr-2'
                                required
                                placeholder={t('first_name') || ''}
                            />
                            <Input
                                id='last_name'
                                type='text'
                                label={'last_name'}
                                paddingVertical='py-4'
                                paddingHorizontal='px-6'
                                required
                                divClassName='mr-2'
                                placeholder={t('last_name') || ''}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 max-w-[1024px] m-auto">
                            <Input
                                id='email'
                                type='email'
                                label='Email'
                                required
                                paddingVertical='py-4'
                                paddingHorizontal='px-6'
                                divClassName='mr-2'
                                placeholder='Email'
                            />
                            <Input
                                id='phone'
                                type='tel'
                                label='phone_no'
                                required
                                paddingVertical='py-4'
                                paddingHorizontal='px-6'
                                divClassName='mr-2'
                                placeholder={t('phone_no') || ''}
                            />
                        </div>
                        <Input
                            id='enterprise'
                            type='text'
                            label='enterprise_name'
                            paddingVertical='py-4'
                            required
                            paddingHorizontal='px-6'
                            divClassName='mr-2'
                            placeholder={t('enterprise_name') || ''}
                        />
                        <div>
                            <TextArea
                                label='Message'
                                id='message'
                                rows={6}
                                placeholder='Message'
                            />
                            <div>
                                <span className='block text-gray-700 font-bold mb-2'>
                                    {t('respect_policy')}
                                    <Link href='/legals/privacy' className='text-indigo-600'> {t('privacy_policy')}</Link>
                                </span>
                            </div>
                            <button className='py-3 px-6 sm:w-[100%] my-4'>{t('send_button')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch