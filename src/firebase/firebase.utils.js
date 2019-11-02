import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDiOX_yKt6FB3tfo65mfUxfZCCP6sfpfI",
    authDomain: "crwn-db-3a3cc.firebaseapp.com",
    databaseURL: "https://crwn-db-3a3cc.firebaseio.com",
    projectId: "crwn-db-3a3cc",
    storageBucket: "crwn-db-3a3cc.appspot.com",
    messagingSenderId: "113026628976",
    appId: "1:113026628976:web:016ba0cb9b17cc5fd7a3b5",
    measurementId: "G-78VDZBNJVT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: ' select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;