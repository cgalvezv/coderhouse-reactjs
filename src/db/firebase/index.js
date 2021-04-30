import firebase from 'firebase/app'
import 'firebase/firestore';
console.log('process.env.', process.env)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

const getFirestore = () => firebase.firestore(app)

export const getFirestoreCollection = idCollection => getFirestore().collection(idCollection);

export const getFirestoreDate = date => firebase.firestore.Timestamp.fromDate(date);

export const getFirestoreBatch = () => getFirestore().batch();