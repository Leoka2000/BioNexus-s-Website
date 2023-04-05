import React from 'react'
import './values.css'
import { FaUniversity } from 'react-icons/fa'
import {BsHandThumbsUpFill} from 'react-icons/bs'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { MdRealEstateAgent } from 'react-icons/md'
import { FaMoneyBillWave } from 'react-icons/fa'
import { useTranslation, withTranslation, Trans } from 'react-i18next';


const Values = () => {
    const { t } = useTranslation();


  return (
    <>
      <section id='values' className='values-section'>
      

        <div className='values-parent-wrapper'>
            <header className='values-header'>
                <span>{t('description.values-1')}</span>
                <h1>{t('description.values-2')}</h1>
            </header>
            <main className='values-main'>
                <div className='individual-parent'>
                    <div className='individual-child'>
                        <span id='span-1'><FaUniversity/></span>
                        <h2>{t('description.values-3.1')}</h2>
                        <p>{t('description.values-3.2')}</p>
                    </div>
                </div>
                <div className='individual-parent'>
                    <div className='individual-child'>
                    <span id='span-2'><BsHandThumbsUpFill/></span>
                    <h2>{t('description.values-4.1')}</h2>
                        <p>{t('description.values-4.2')}</p>
                    </div>
                </div>
                <div className='individual-parent'>
                    <div className='individual-child'>
                    <span id='span-3'><VscWorkspaceTrusted/></span>
                    <h2>{t('description.values-5.1')}</h2>
                        <p>{t('description.values-5.2')}</p>
                    </div>
                </div>
                <div className='individual-parent'>
                    <div className='individual-child'>
                    <span id='span-4'><MdRealEstateAgent/></span>
                    <h2>{t('description.values-6.1')}</h2>
                        <p>{t('description.values-6.2')}</p>
                    </div>
                </div>
                <div className='individual-parent'>
                    <div className='individual-child'>
                    <span id='span-5'><FaMoneyBillWave/></span>
                    <h2>{t('description.values-7.1')}</h2>
                        <p>{t('description.values-7.2')}</p>
                    </div>
                </div>
            </main>
        </div>
      
      </section>
    </>
  )
}

export default Values
