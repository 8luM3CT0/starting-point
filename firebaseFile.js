import firebase from 'firebase'
import {getAuth, sendPasswordResetEmail, updateProfile, onAuthStateChanged} from 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCYo1M56reuilAcllCk9-qmU1JOTDZPCPw',
    authDomain: 'startup-blogg.firebaseapp.com',
    projectId: 'startup-blogg',
    storageBucket: 'startup-blogg.appspot.com',
    messagingSenderId: '717503553987',
    appId: '1:717503553987:web:fd744cd4ef45dbbfb0dd76',
    measurementId: 'G-4Y7CXJ10VE'
}

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app()

const auth = app.auth()
const store = app.firestore()
const warehouse = app.storage()
const provider = new firebase.auth.GoogleAuthProvider()
//for password reset

export { auth, store, provider, warehouse, getAuth, sendPasswordResetEmail, onAuthStateChanged, updateProfile }