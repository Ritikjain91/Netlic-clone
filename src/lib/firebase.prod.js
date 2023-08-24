import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBAXdK-WssZ0zv4zy0VDq_CGcdhudlRk2U",
  authDomain: "netflix-app-48b23.firebaseapp.com",
  projectId: "netflix-app-48b23",
  storageBucket: "netflix-app-48b23.appspot.com",
  messagingSenderId: "328675152901",
  appId: "1:328675152901:web:ad6edf4e42c9bd9484f86c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const firestore = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { firestore, auth };
