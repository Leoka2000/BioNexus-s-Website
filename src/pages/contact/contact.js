
import React, {useState, useEffect} from 'react'
import './contact.css'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")
  const navigate = useNavigate();
  const { // here we are destructuring the useForm object in our app
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // here we are making an asyncronous API call to get the firestore information
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
     
    }
    getUsers()
  }, [])

  const dataOnConsole = (data) => {
    addDoc(usersCollectionRef, {userData: data})
   
    navigate("/success", {replace: false, state: {data}})
    
  }
     
  return (
    <>
      <section id='contact' className='contact-section'>
        <header className='contact-header'>
            <span>{t('description.contact-1')}</span>
            <h1>{t('description.contact-2')}</h1>
            <p>{t('description.contact-9')}</p>
        </header>
        <main className='bg-contact'>
            <div className='form-parent-wrapper'>
              <div className='form-child-wrapper'>
                <h2>{t('description.contact-3')}</h2>
                <form onSubmit={handleSubmit(dataOnConsole)} className='contact-form'>
                    <label>
                        <input {...register("userName", { required: true, minLength: 3})} type='text' className='form-control' placeholder={t('description.contact-4')}></input>
                        {errors.userName && <p>{t('description.contact-41')}</p>}
                    </label>
                    <label><input {...register("email", { required: true, pattern:
             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}
                     type='email' className='form-control' placeholder={t('description.contact-5')}></input>
                     {errors.email && <p>{t('description.contact-51')}</p>}

                     </label>
                    <label><input  {...register("phone", { required: true, pattern: 
             /^\+[1-9]{1}[0-9]{3,14}$/  })}
                    
                    type='number' className='form-control' placeholder={t('description.contact-6')}></input>
                     {errors.phone && <p>{t('description.contact-61')}</p>}
                    </label>
                    <textarea {...register("message", { required: true, maxLength: 1000 })} placeholder={t('description.contact-7')}></textarea>
                    <button className='form-btn'>{t('description.contact-8')}</button>
                </form>
                </div>
            </div>
        </main>
      </section>
    </>
  )
}

export default Contact
