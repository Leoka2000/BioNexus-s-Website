import React from 'react'
import JEbr from './imgs/JE-br.png'
import JEeu from './imgs/JE-eu.png'
import szechenyi from './imgs/szechenyi.png'
import UD from './imgs/UD-logo.png'
import './partners.css'

const Partners = () => {
    return (
        <>
            <section className='partners-section'>
                <main className='partners-main'>
                    <div><a href='https://brasiljunior.org.br/'><img alt='JE BR' id='img-1' src={JEbr} /></a></div>
                    <div><a href='https://juniorenterprises.eu/'><img alt='JE EU' id='img-2' src={JEeu} /></a></div>
                    <div><a href='https://www.iea.org/policies/3832-szechenyi-plan'><img alt='Széchenyi' id='img-3' src={szechenyi} /></a> </div>
                    <div><a href='https://www.edu.unideb.hu/'><img  id='img-4' alt='UD Logo' src={UD} /></a></div>
                </main>
            </section>
        </>
    )
}

export default Partners
