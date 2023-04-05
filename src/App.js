import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Pagehome/Home';
import Error from './Components/error/Error';
import Success from './pages/contact/success/success'
import { CookieConsent } from "react-cookie-consent";

function App() {
  return (
    <>
      <CookieConsent className='cookie-consent'
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
       <h2>Hi there,</h2>
       <p>We are the cookies!</p>
       <p id='grey-p'>We use this feature in order to enhance your browsing experience. By clicking "Accept," you agree to our use of cookies. You can disable cookies in your browser settings. Thank you for visiting our website!</p>
      </CookieConsent>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='success/' element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

