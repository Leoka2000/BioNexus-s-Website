import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'; // n entendin mas adicionei esse "createroot"
import App from './App';
import './index.css'
import './App.css'

// import i18n (needs to be bundled ;))z
import './i18n';

const Loader = () => (
  <div className="Loader">
      <div className="Loader__dot"></div>
      <div className="Loader__dot"></div>
      <div className="Loader__dot"></div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Suspense fallback={<Loader />}>
    <App />
    </Suspense>
  </React.StrictMode>
);


