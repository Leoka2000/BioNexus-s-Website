import React, { useEffect } from 'react'
import './about.css'
import img11 from '../../assets2/images/img-about.jpg'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
  const { t } = useTranslation();
  
  const [ref1, inView1] = useInView({
    threshold: 0.6,
    triggerOnce: true,
    delay: 1
  });



  return (
    <>
      <section id='about' className='about-section'>

        <div className='left-about'><img alt='Computer Guy' src={img11} /></div>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0 }}
          animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className='right-about'
        >
          <span>{t('description.about-1')}</span>
          <h2>{t('description.about-2')}</h2>
          <p>{t('description.about-3')}</p>
          <button><Link to="team" spy={true} smooth={true} offset={100} duration={500}>{t('description.about-4')}</Link></button>
        </motion.div>

      </section>
    </>
  )
}

export default About
