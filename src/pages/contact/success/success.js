import React from 'react'
import './success.css'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Success = () => {
    const { state } = useLocation()
    const { t } = useTranslation();
  return (
    <div className='success'>
     <h1>{t('description.success-1')}, {state.data.userName}</h1>
<p>{t('description.success-2')}</p>
<Link style={{ textDecoration: 'none' }} to='/'><button type='submit'>{t('description.success-3')}</button></Link>
    </div>
  )
}

export default Success
