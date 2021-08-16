import firebase from 'firebase';

const firebaseApp= firebase.initializeApp( {
    apiKey: "AIzaSyABgTX0qpACB4Ad-hHk-YtRx",
    authDomain: "e-commerce-67.firebaseapp.com",
    projectId: "e-commercea6",
    storageBucket: "e-comme7ca6.appspot.com",
    messagingSenderId: "864342741",
    appId: "1:864388642741:web:d4cddfbfc",
    measurementId: "G-PECPGP"
});

const db=firebaseApp.firestore();
const auth= firebase.auth();
const storage =firebase.storage();

export {db, auth, storage};

