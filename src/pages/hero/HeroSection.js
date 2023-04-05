import React from 'react';
import Video from '../../assets2/images/video.mp4'
import './HeroSection.css';


import { useTranslation, withTranslation, Trans } from 'react-i18next';

function HeroSection() {

  const { t } = useTranslation(); // This hook does... It gets the t function and i18n instance inside your functional component.
  // or const [t] = useTranslation();
  
  return (

    <section className='hero-section'>
      <video src={Video} playsInline autoPlay loop muted></video>
      <div className='hero-text-wrapper'>
        <h1>{t('description.hero-1')}
        </h1>
        <p>{t('description.hero-2')}</p>
      </div>


    </section>
  )
}
export default HeroSection