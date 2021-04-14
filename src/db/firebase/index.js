import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3eOHogaEJOPnmkaYKHk511Nzzfh_Jp40",
    authDomain: "coderhouse-reactjs-db.firebaseapp.com",
    projectId: "coderhouse-reactjs-db",
    storageBucket: "coderhouse-reactjs-db.appspot.com",
    messagingSenderId: "768429971921",
    appId: "1:768429971921:web:c7ba2a5dd275d1b237a8f0"
};

const app = firebase.initializeApp(firebaseConfig);

const getFirestore = () => firebase.firestore(app)

export const getItems = () => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    return itemCollection;
} 

export const getCategories = () => {
    const db = getFirestore();
    const categoriesCollection = db.collection('categories');
    return categoriesCollection;
} 

export const getItem = (id) => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(id)
    return item;
}
