import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp( {
  apiKey: "AIzaSyAKwRUE6W30iruN7bVm4TlaDsECf3hW_Mg",
  authDomain: "chat-react-firebase-87d99.firebaseapp.com",
  projectId: "chat-react-firebase-87d99",
  storageBucket: "chat-react-firebase-87d99.appspot.com",
  messagingSenderId: "490335715754",
  appId: "1:490335715754:web:978accfafd1392884b2bd3",
  measurementId: "G-6H6H5P2L0J"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{auth, firebase, firestore}}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);


