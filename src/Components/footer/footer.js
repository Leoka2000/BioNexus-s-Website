
import './footer.css';
import { BsLinkedin } from 'react-icons/bs/index.esm'
import { BsInstagram } from 'react-icons/bs/index.esm'
import { AiOutlineLink } from 'react-icons/ai/index'
import React from 'react';
import UDlogo from '../../assets2/brand/UDlogo.png'
import {useTranslation} from 'react-i18next'

import { Link } from 'react-scroll'






const Footer = () => {
 const { t } = useTranslation();
  return (
    <div className='footer-main-container'>
      <div className='footer-child-container'>
        <h2>{t('description.footer')}</h2>

        <button className='btn-footer'><Link to="contact" spy={true} smooth={true} offset={100} duration={500}>{t('description.navbar-4')}</Link></button>

        <div className="footer-icons-container">
      <a href='https://www.linkedin.com/company/bionexusjr/'>< BsLinkedin/></a>
      <a href='https://www.instagram.com/bionexusjr/'>< BsInstagram/></a>
      <a href='https://linktr.ee/bionexus'><  AiOutlineLink/></a>
        </div>
        <p>hello@bionexusjr.com</p>
        <p>Debreceni Egyetem, Egyetem Tér 1, 4028 - Hajdú-Bihar</p>
       <a href='https://www.edu.unideb.hu/'> <img alt='UD Logo' src={UDlogo} /></a>
        <p>Developed by Leo Reus Oliveira</p>
      </div>
    </div>
  )
}

export default Footer
