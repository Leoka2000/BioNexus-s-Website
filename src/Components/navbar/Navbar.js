import React, { useState, useRef } from 'react'

import './Navbar.css'
import logo1 from '../../assets2/brand/logo-1.png'
import uk from './navbar-flags/uk.png'
import hungary from './navbar-flags/hungary.png'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useTranslation} from 'react-i18next';
import './Navbar.css';

const Navbar = () => {


  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  
  };


  const navbarScroll = () => {
    if (window.scrollY >= 100) {
      setNavbar(false)

    } else {
      setNavbar(true)

    }
  }

  window.addEventListener('scroll', navbarScroll)

  return (
    <>
      <nav className={navbar ? "navbar" : "activated"}>
        <div className='logo-wrapper'>
          <img alt='Logo BioNexus' src={logo1} />
        </div>

        <ul className='original-size-ul' ref={navRef}>
          <div className='flag-wrapper'>
            <button type='button' onClick={() => changeLanguage('hu')} src={hungary} className="nav-btn-flag"><img alt='hungary flag' src={"https://flagcdn.com/hu.svg"} /></button>
            <button type='button' onClick={() => changeLanguage('en')} className="nav-btn-flag"><img alt='uk flag' src={uk} /></button>
          </div>
          <li><Link onClick={showNavbar} to="services" spy={true} smooth={true} offset={100} duration={500}>{t('description.navbar-1')}</Link></li>
          <li><Link onClick={showNavbar} to="about" spy={true} smooth={true} offset={100} duration={500}>{t('description.navbar-2')}</Link></li>
          <li><Link onClick={showNavbar} to="team" spy={true} smooth={true} offset={-100} duration={500}>{t('description.navbar-3')}</Link></li>
          <button className="nav-contact-btn"><Link onClick={showNavbar} to="contact" spy={true} smooth={true} offset={100} duration={500}>{t('description.navbar-4')}</Link></button>
          <button
            className="nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>


    </>
  );
}

export default Navbar
