import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyAsFPkdoDGwvusD0gDVEHw1eozRCfScGKo",
    authDomain: "crwn-db-1f7ac.firebaseapp.com",
    projectId: "crwn-db-1f7ac",
    storageBucket: "crwn-db-1f7ac.appspot.com",
    messagingSenderId: "671148501532",
    appId: "1:671148501532:web:9f251d6350eda773c1cdd9",
    measurementId: "G-KYHGCG4R8F"
  }


  firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;