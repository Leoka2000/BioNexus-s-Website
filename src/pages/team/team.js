import React, { useEffect } from 'react'
import './team.css'
import Bryan from '../../assets2/imgs/Bryan.jpg'
import Altynai from '../../assets2/imgs/altynai.jpg'
import Zhala from '../../assets2/imgs/Zhala.jpg'
import Alisha from '../../assets2/imgs/Alisha.jpg'
import Nijat from '../../assets2/imgs/Nijat.jpg'
import Letty from '../../assets2/imgs/Letty.jpg'
import Leo from '../../assets2/imgs/Leo.jpg'
import {useTranslation} from 'react-i18next'


const Team = () => {
  const { t } = useTranslation();

  return (
    <section id='team' className='team-section'>
      <header className='team-header'>
        <span>{t('description.team-1')}</span>
        <h1>{t('description.team-2')}</h1>
        <p>{t('description.team-3')}</p>
      </header>
      <main className='team-main'>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
          <img alt='Bryan'  src={Bryan}/>
          </div>
          <div className='member-content'>
            <h2>Brayam Porphirio</h2>
            <p>{t('description.team-bryan')}</p>
          </div>
        </div>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
            <img  alt='Leo' src={Leo}/>
          </div>
          <div className='member-content'>
            <h2>Leo Reus Oliveira</h2>
            <p>{t('description.team-leo')}</p>
          </div>
        </div>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
            <img alt='Alisha'  src={Alisha} />
          </div>
          <div className='member-content'>
            <h2>Alisha Amangeldi</h2>
            <p>{t('description.team-alisha')}</p>
          </div>
        </div>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
            <img alt='Zhala'  src={Zhala} />
          </div>
          <div className='member-content'>
          <h2>Zhala Mammadova</h2>
            <p>{t('description.team-zhala')}</p>
          </div>
        </div>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
          <img alt='coming soon' src={Nijat}/>
          </div>
          <div className='member-content'>
           <h2>Nijat Rustamli</h2>
            <p>{t('description.team-nijat')}</p>
          </div>
        </div>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
          <img alt='Nijat' src={Altynai}/>
          </div>
          <div className='member-content'>
           <h2>Altynai Idirisova</h2>
            <p>{t('description.team-altynai')}</p>
          </div>
        </div>
        <div className='individual-wrapper-main'>
          <div className='member-img'>
          <img alt='Letty' src={Letty}/>
          </div>
          <div className='member-content'>
           <h2>Letty Schroder</h2>
            <p>{t('description.team-leticia')}</p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Team
