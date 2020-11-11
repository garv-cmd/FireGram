import firebase from 'firebase/app';
import  'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyB6krgQy5kHPN7pz5DLRZQkaYUo5pWnT6g",
    authDomain: "garv-firegram.firebaseapp.com",
    databaseURL: "https://garv-firegram.firebaseio.com",
    projectId: "garv-firegram",
    storageBucket: "garv-firegram.appspot.com",
    messagingSenderId: "447465262750",
    appId: "1:447465262750:web:e3e168683c6c4c142bf58f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const storageRef = projectStorage.ref();
  const projectFirestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export default provider;
  export {projectFirestore,projectStorage,timestamp,storageRef};