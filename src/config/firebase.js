import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBVjasC3L-tc1zDDNosrlkLfRuIHMWK2DY",
    authDomain: "eventos-2c248.firebaseapp.com",
    databaseURL: "https://eventos-2c248.firebaseio.com",
    projectId: "eventos-2c248",
    storageBucket: "eventos-2c248.appspot.com",
    messagingSenderId: "740162910927",
    appId: "1:740162910927:web:117ca10a21a16afbdf15ba"
  }

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig)