import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'next-i18next';
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import Input from '../form/Input';


const Footer = () => {
  const quick_links = [
    { url: '/', label: 'home', active: true },
    { url: '/services/service-page', label: 'service', active: false },
    { url: '/contacts/contact-page', label: 'contact', active: false },
    { url: '/quote/quote-page', label: 'quote', active: false },
  ];
  const services_links = [
    { url: '/services/service-page/#service_web_development', label: 'web', active: false },
    { url: '/services/service-page/#service_web_development', label: 'Application', active: false },
    { url: '/services/service-page/#service_it_consult', label: 'consulting', active: false },
    { url: '/services/service-page/#service_marketing_digital', label: 'marketing_digital', active: false },
  ];
  const company_links = [
    { url: '/about/about-page', label: 'apropo', active: false },
    { url: '/contacts/contact-page', label: 'join', active: false },
    { url: '/contacts/contact-page', label: 'help', active: false },
    { url: '/valoris', label: 'ecommerce', active: false },
  ];
  const legal_links = [
    { url: '/legals/privacy', label: 'privacy', active: true },
    { url: '/legals/legal-notice', label: 'legal_notice', active: false },
    { url: '/legals/data-protection', label: 'data_protection', active: false },
    { url: '/legals/cookies', label: 'cookies', active: false },
  ];

  const { t } = useTranslation('footer');
  const currentYear = new Date().getFullYear();
  return (
    <div className='w-full bg-slate-900 text-gray-300 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase pt-2'>{t('links')}</h6>
          <ul>
            {quick_links && quick_links.map(({ url, label }) => (
              <li className='py-1 hover:bg-transparent hover:text-indigo-600' key={`${url}${label}`}>
                <Link href={url}>{t(label)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase pt-2'>{t('service')}</h6>
          <ul>
            {services_links && services_links.map(({ url, label }) => (
              <li className='py-1 hover:bg-transparent hover:text-indigo-600' key={`${url}${label}`}>
                <Link href={url}>{t(label)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase pt-2'>{t('company')}</h6>
          <ul>
            {company_links && company_links.map(({ url, label }) => (
              <li className='py-1 hover:bg-transparent hover:text-indigo-600' key={`${url}${label}`}>
                <Link href={url}>{t(label)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase pt-2'>{t('legal')}</h6>
          <ul>
            {legal_links && legal_links.map(({ url, label }) => (
              <li className='py-1 hover:bg-transparent hover:text-indigo-600' key={`${url}${label}`}>
                <Link href={url}>{t(label)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>{t('newsletter')}</p>
          <p className='py-4'>{t('latest')}</p>
          <form className='flex flex-col sm:flex-row'>
            <Input
              id='newsletter_email'
              type='email'
              required
              paddingVertical='py-2'
              paddingHorizontal='px-2'
              borderClass='border border-gray-400'
              inputClassName='w-full p-2 mr-4 rounded-md mb-4 outline-none'
              placeholder={t('enter-your-email') ?? 'Email...'}
            />
            <button className='p-2 mb-4 '>{t('subscribe')}</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>&copy;{currentYear} {t('copyright')}</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FontAwesomeIcon icon={faFacebook} className='cursor-pointer hover:text-indigo-600 w-6' />
          <FontAwesomeIcon icon={faLinkedin} className='cursor-pointer hover:text-indigo-600 w-6' />
          <FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-indigo-600 w-6' />
          <FontAwesomeIcon icon={faWhatsapp} className='cursor-pointer hover:text-indigo-600 w-6' />
        </div>
      </div>
    </div>
  )
}

export default Footer;