import * as firebase from "firebase/app";

const firebaseConfig=
{
    apiKey: "AIzaSyAG4irgKxjrEh7lvRrFzFOZZqda2Ct7ozU",
    authDomain: "tenedores-b8a5f.firebaseapp.com",
    databaseURL: "https://tenedores-b8a5f.firebaseio.com",
    projectId: "tenedores-b8a5f",
    storageBucket: "tenedores-b8a5f.appspot.com",
    messagingSenderId: "549267438202",
    appId: "1:549267438202:web:8498d2a36cf7293b6c59c3"
};

export const firebaseApp=firebase.initializeApp(firebaseConfig);