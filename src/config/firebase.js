import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';



// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAZszWqZqKvZoGU9uMELvr4BJD85MrQe40",
    authDomain: "olx-webapp-dadf5.firebaseapp.com",
    databaseURL: "https://olx-webapp-dadf5.firebaseio.com",
    projectId: "olx-webapp-dadf5",
    storageBucket: "olx-webapp-dadf5.appspot.com",
    messagingSenderId: "644054139803",
    appId: "1:644054139803:web:5b8145aaf007b973a2973e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
