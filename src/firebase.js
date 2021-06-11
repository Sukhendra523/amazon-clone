import React from 'react'
import firebase from 'firebase'

const firebseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3Atu8Mw1uajMu-WalfDix_dJb1AG2aWs",
  authDomain: "clone-a81a4.firebaseapp.com",
  databaseURL: "https://clone-a81a4.firebaseio.com",
  projectId: "clone-a81a4",
  storageBucket: "clone-a81a4.appspot.com",
  messagingSenderId: "673343157431",
  appId: "1:673343157431:web:98c799019925624b0b4932",
  measurementId: "G-43FSKM3RZM"
})


const auth = firebase.auth();

export {auth}