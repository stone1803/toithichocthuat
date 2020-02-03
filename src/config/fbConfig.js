import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyA1Xd3CYKtDFbOwUELpPIj5GZNYQ8dVoLw",
  authDomain: "tipshuyenhoc.firebaseapp.com",
  databaseURL: "https://tipshuyenhoc.firebaseio.com",
  projectId: "tipshuyenhoc",
  storageBucket: "tipshuyenhoc.appspot.com",
  messagingSenderId: "335108276551",
  appId: "1:335108276551:web:6a8845bd64c7dc04c04c62",
  measurementId: "G-56LHSXW83N"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
