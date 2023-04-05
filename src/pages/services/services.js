import React, {useEffect} from 'react'
import './services.css'
import { MdOutlineScience } from 'react-icons/md'
import { GiMaterialsScience } from 'react-icons/gi'
import { IoBandageOutline } from 'react-icons/io5'
import img9 from './shapes/9.png'
import img10 from './shapes/10.png'
import {useTranslation} from 'react-i18next'

const Services = () => {
    const { t } = useTranslation();
 
      // when the inView hook is called, the login inside the useEffect is executed
    
    return (
        <>
            <section id='services' className='services-section'>
           
                <header
                 className='services-header'>
                    <span>{t('description.services-1')}</span>
                    <p>{t('description.services-2.1')}<strong> {t('description.services-2.2')}.</strong> </p>
                </header>
                <div 
                // the ref is what sets the inView hook to true or false
                 id='box1' className='individual-wrapper'>
                    <div className='inner-individual-wrapper'>
                        <span><MdOutlineScience /></span>
                        <h2>{t('description.services-3.1')}</h2>
                        <p>{t('description.services-3.2')}</p>
                        <div className='shapes-box'>
                            <img alt='' className='img9-1' src={img9} />
                            <img alt='' className='img10-1' src={img10} />
                        </div>
                    </div>
                </div>
                <div id='box2' className='individual-wrapper'>
                    <div className='inner-individual-wrapper'>
                        <span> < GiMaterialsScience /></span>
                        <h2>{t('description.services-4.1')}</h2>
                        <p>{t('description.services-4.2')}</p>
                        <div className='shapes-box'>
                            <img alt='' className='img9-2' src={img9} />
                            <img alt='' className='img10-2' src={img10} />
                        </div>
                    </div>
                </div>
                <div id='box3' className='individual-wrapper'>
                    <div className='inner-individual-wrapper'>
                        <span> < IoBandageOutline /></span>
                        <h2>{t('description.services-5.1')}</h2>
                        <p>{t('description.services-5.2')}</p>
                        <div className='shapes-box'>
                            <img alt='' className='img9-3' src={img9} />
                            <img alt='' className='img10-3' src={img10} />
                        </div>
                    </div>
                </div>
             
            </section>
        </>
    )
}

export default Services
