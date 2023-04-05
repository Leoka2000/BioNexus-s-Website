import React, { useEffect } from 'react'
import './about.css'
import img11 from '../../assets2/images/img-about.jpg'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-scroll'




const About = () => {
  const { t } = useTranslation();


   
 
      // when the inView hook is called, the login inside the useEffect is executed
    
  return (
    <>
      <section id='about' className='about-section'>
      
        <div className='left-about'><img alt='Computer Guy' src={img11}/></div>
        <div  className='right-about'>
            <span>{t('description.about-1')}</span>
            <h2>{t('description.about-2')}</h2>
            <p>{t('description.about-3')}</p>
            <button><Link to="team" spy={true} smooth={true} offset={100} duration={500}>{t('description.about-4')}</Link></button>
        </div>
       
      </section>
    </>
  )
}

export default About
