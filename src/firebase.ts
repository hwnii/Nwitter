import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBM6stZNlJr1UfQH28aHj6r1STV_Tu1LWk',
  authDomain: 'nwitter-reloaded-3ff25.firebaseapp.com',
  projectId: 'nwitter-reloaded-3ff25',
  storageBucket: 'nwitter-reloaded-3ff25.appspot.com',
  messagingSenderId: '248482805671',
  appId: '1:248482805671:web:59e011ce3c61a73da6a882',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const storage = getStorage(app)

export const db = getFirestore(app)
