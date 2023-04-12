import React, { useEffect } from 'react'
import './services.css'
import { MdOutlineScience } from 'react-icons/md/index.esm'
import { GiMaterialsScience } from 'react-icons/gi/index.esm'
import { IoBandageOutline } from 'react-icons/io5/index.esm'
import img9 from './shapes/9.png'
import img10 from './shapes/10.png'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Services = () => {
    const { t } = useTranslation();

    const [ref1, inView1] = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 1
    });

    const [ref2, inView2] = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 1
    });

    const [ref3, inView3] = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 1
    });

    return (
        <>
            <section id='services' className='services-section'>

                <header
                    className='services-header'>
                    <span>{t('description.services-1')}</span>
                    <p>{t('description.services-2.1')}<strong> {t('description.services-2.2')}.</strong> </p>
                </header>
                <div id='box1' className='individual-wrapper'>
                    <motion.div ref={ref1}
                        initial={{ opacity: 0 }}
                        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='inner-individual-wrapper'
                    >
                        <span><MdOutlineScience /></span>
                        <h2>{t('description.services-3.1')}</h2>
                        <p>{t('description.services-3.2')}</p>
                        <div className='shapes-box'>
                            <img alt='' className='img9-1' src={img9} />
                            <img alt='' className='img10-1' src={img10} />
                        </div>
                    </motion.div>
                </div>
                <div id='box2' className='individual-wrapper'>
                    <motion.div ref={ref2}
                        initial={{ opacity: 0 }}
                        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='inner-individual-wrapper'
                    >
                        <span> < GiMaterialsScience /></span>
                        <h2>{t('description.services-4.1')}</h2>
                        <p>{t('description.services-4.2')}</p>
                        <div className='shapes-box'>
                            <img alt='' className='img9-2' src={img9} />
                            <img alt='' className='img10-2' src={img10} />
                        </div>
                    </motion.div>
                </div>
                <div id='box3' className='individual-wrapper'>
                    <motion.div ref={ref3}
                        initial={{ opacity: 0 }}
                        animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='inner-individual-wrapper'
                    >
                        <span> < IoBandageOutline /></span>
                        <h2>{t('description.services-5.1')}</h2>
                        <p>{t('description.services-5.2')}</p>
                        <div className='shapes-box'>
                            <img alt='' className='img9-3' src={img9} />
                            <img alt='' className='img10-3' src={img10} />
                        </div>
                    </motion.div>
                </div>

            </section>
        </>
    )
}

export default Services
