import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env."AIzaSyB9Zm0lLMmxKehkdulMx648VdjE0HAiGoc",
    authDomain: process.env."fir-react-timeline.firebaseapp.com",
    databaseURL: process.env."https://fir-react-timeline.firebaseio.com",
    projectId: process.env."fir-react-timeline",
    storageBucket: process.env."fir-react-timeline.appspot.com",
    messagingSenderId: process.env."123721840418",
    appId: process.env."1:123721840418:web:f687d16bb274ec59"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
  }
  
    // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    
  doSignOut = () => this.auth.signOut();
  
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}


export default Firebase;
