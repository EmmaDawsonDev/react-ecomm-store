import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyLCzVkpYk3CucgnWXRWN20VawJpajk6o",
  authDomain: "crwn-db-3cc3e.firebaseapp.com",
  projectId: "crwn-db-3cc3e",
  storageBucket: "crwn-db-3cc3e.appspot.com",
  messagingSenderId: "465776990087",
  appId: "1:465776990087:web:b6e0a45419638fa97f2522",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
