import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCzOzvpGn0japYrfcbvMSPKNCrGMFZlOuQ",
  authDomain: "fir-project-a397b.firebaseapp.com",
  projectId: "fir-project-a397b",
  storageBucket: "fir-project-a397b.appspot.com",
  messagingSenderId: "467990301186",
  appId: "1:467990301186:web:b0a498f03167e7bf51751b"
})

export const auth = app.auth()
export default app
