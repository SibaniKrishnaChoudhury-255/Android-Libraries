import firebase from "firebase";

class Firebase {
  constructor() {
    this.init();
    // this.observeAuth();
  }


init=()=>{
  firebase.initializeApp({
    apiKey: "AIzaSyA5un9fMzrYUmZP1jsP0pxyvMreA_LGG14",
    authDomain: "reactfirebaseapp-22b26.firebaseapp.com",
    databaseURL: "https://reactfirebaseapp-22b26.firebaseio.com",
    projectId: "reactfirebaseapp-22b26",
    storageBucket: "reactfirebaseapp-22b26.appspot.com",
    messagingSenderId: "912147623750",
    appId: "1:912147623750:web:56b0520afedda789faff47",
    measurementId: "G-DQJDDS4CQQ"
  })
}

}

Firebase.shared= new Firebase()
export default Firebase;
