import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'



const firebaseConfig = {

    apiKey: `${process.env.REACT_APP_API_KEY}`,
  
    authDomain: "bionexus-ab1f4.firebaseapp.com",
  
    projectId: "bionexus-ab1f4",
  
    storageBucket: "bionexus-ab1f4.appspot.com",
  
    messagingSenderId: "79148083290",
  
    appId: "1:79148083290:web:7a89f0cac4f18477139063",
  
    measurementId: "G-QWS21KWJTD"
  
  };
  
  

  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)