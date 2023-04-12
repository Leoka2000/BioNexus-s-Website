import React from 'react';
import Video from '../../assets2/images/video.mp4'
import './HeroSection.css';
import { motion } from 'framer-motion'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

function HeroSection() {

  const { t } = useTranslation(); 
  
  return (

    <section className='hero-section'>
      <video src={Video} playsInline autoPlay loop muted></video>
      <div className='hero-text-wrapper'>
      <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  {t('description.hero-1')}
</motion.h1>
       
<motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  {t('description.hero-2')}
</motion.p>
      </div>


    </section>
  )
}
export default HeroSection