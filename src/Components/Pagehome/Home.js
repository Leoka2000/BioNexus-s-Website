import React from 'react';
import HeroSection from '../../pages/hero/HeroSection';
import '../../App.css';

import Navbar from '../navbar/Navbar';
import Footer from '../../Components/footer/footer';
import Hero2 from '../../pages/hero/hero2/hero2'
import Services from '../../pages/services/services'
import About from '../../pages/about/about'
import Values from '../../pages/values/values'
import Contact from '../../pages/contact/contact'
import Partners from '../../pages/partners/partners'
import Team from '../../pages/team/team'
import './home.css'

import { BsLinkedin } from 'react-icons/bs/index.esm';
import { AiOutlineLink } from 'react-icons/ai/index.esm';
import { BsInstagram } from 'react-icons/bs/index.esm';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='sidebar'>
        <a href='https://www.linkedin.com/company/bionexusjr/'><BsLinkedin /></a>
        <a href='https://www.instagram.com/bionexusjr/'><BsInstagram /></a>
        <a href='https://linktr.ee/bionexus'><AiOutlineLink /></a>
      </div>
      <div className='content'>
        <Navbar />
        <HeroSection />
        <Hero2 />
        <Services />
        <About />
        <Values />
        <Team />
        <Contact />
        <Partners />
        <Footer />
      </div>
    </div>
  )
}

export default Home
