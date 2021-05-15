import firebase from 'firebase';

const firebaseApp= firebase.initializeApp( {
    apiKey: "AIzaSyABgTX0qpACB4Ad-hHk-YtRxjZR5hispfU",
    authDomain: "e-commerce-67ca6.firebaseapp.com",
    projectId: "e-commerce-67ca6",
    storageBucket: "e-commerce-67ca6.appspot.com",
    messagingSenderId: "864388642741",
    appId: "1:864388642741:web:d4cddf9e6f340513618bfc",
    measurementId: "G-PEYQ4WCPGP"
});

const db=firebaseApp.firestore();
const auth= firebase.auth();
const storage =firebase.storage();

export {db, auth, storage};

