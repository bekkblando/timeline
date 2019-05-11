import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDjHYPTrf61PgflHASxQ2XLyquOw8pP-vQ",
    authDomain: "datascienceprotest.firebaseapp.com",
    databaseURL: "https://datascienceprotest.firebaseio.com",
    projectId: "datascienceprotest",
    storageBucket: "datascienceprotest.appspot.com",
    messagingSenderId: "942364356059",
    appId: "1:942364356059:web:c07de096fb8f312d"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;