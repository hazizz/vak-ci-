import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./style.css";
import './fonts/chawp.regular.ttf';
import './fonts/ChelseaMarket-Regular.ttf';
import './fonts/Lobster-Regular.ttf';
import App from "./App";
import * as firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCM_lkV8-Vw_33-gDW9IkQOqdCWfPGjMbo",
    authDomain: "vakacio-7abc3.firebaseapp.com",
    databaseURL: "https://vakacio-7abc3.firebaseio.com",
    projectId: "vakacio-7abc3",
    storageBucket: "vakacio-7abc3.appspot.com",
    messagingSenderId: "801332022229",
    appId: "1:801332022229:web:3e3311c309683502a34b5c",
    measurementId: "G-L1PVKVZPBK"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
