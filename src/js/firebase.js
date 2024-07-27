// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDhtukSu-w-KQ3EmU4mnge9wKla0j62wZ8',
    authDomain: 'noteballs-cd360.firebaseapp.com',
    projectId: 'noteballs-cd360',
    storageBucket: 'noteballs-cd360.appspot.com',
    messagingSenderId: '855804512814',
    appId: '1:855804512814:web:6b8c5c114433d02ac1edbf',
    measurementId: 'G-ZK0TV9WVHC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
