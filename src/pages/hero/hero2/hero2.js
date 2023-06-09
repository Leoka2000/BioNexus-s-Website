import React, { useEffect } from 'react'
import img from './flatdraw.jpg'
import './hero2.css'

import img1 from './rotate-imgs/1.png'
import img2 from './rotate-imgs/2.png'
import img3 from './rotate-imgs/3.png'
import img4 from './rotate-imgs/4.png'
import img5 from './rotate-imgs/5.png'
import img6 from './rotate-imgs/6.png'
import img7 from './rotate-imgs/7.png'
import img8 from './rotate-imgs/8.png'
import { Link } from 'react-scroll'
import {useTranslation} from 'react-i18next'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Hero2 = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.4 })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [inView, animation])

  return (
    <>
      <section id='hero2' className='hero2-section'>
<div  className='left' ref={ref}>
<motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            
          >
            {t('description.hero2-1')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t('description.hero2-2')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t('description.hero2-3')}
          </motion.p>
          <motion.button
            className='hero2-btn'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to='services' spy={true} smooth={true} offset={100} duration={500}>
              {t('description.hero2-4')}
            </Link>
          </motion.button>
</div>
<div className='right'>
    < img alt='Computer guy' src={img} />
</div>
<div className='img1'><img src={img1} /></div>
      <div className='img2'><img alt='decoration' src={img2} /></div>
      <div className='img3'><img alt='decoration' src={img3} /></div>
      <div className='img4'><img alt='decoration' src={img4} /></div>
      <div className='img5'><img alt='decoration' src={img5} /></div>
      <div className='img6'><img alt='decoration' src={img6} /></div>
      <div className='img7'><img alt='decoration' src={img7} /></div>
      <div className='img8'><img alt='decoration'src={img8} /></div>
      </section>
      


    </>
  )
}

export default Hero2
