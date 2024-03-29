import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA4U2rjhSQeYkv-7sEcLSU8DQwZ2ZrqMkw',
  authDomain: 'zenify-labs-localhost.firebaseapp.com',
  projectId: 'zenify-labs-localhost',
  storageBucket: 'zenify-labs-localhost.appspot.com',
  messagingSenderId: '59483362550',
  appId: '1:59483362550:web:dbe87f4e9e833feace08d7',
  measurementId: 'G-59WG9YQP2P'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()

const handleAuthSuccess = (user, redirectPath) => {
  const name = user.displayName
  const photoURL = user.photoURL
  localStorage.setItem('user', JSON.stringify({ name, photoURL }))
  console.log('Usuario autenticado:', user)
  window.location.href = redirectPath
}

const handleAuthError = (error) => {
  console.error('Error al autenticar:', error)
}

const handleSignOutSuccess = () => {
  localStorage.removeItem('user')
  console.log('Sesión cerrada correctamente')
  window.location.href = '/'
}

const handleSignOutError = (error) => {
  console.error('Error al cerrar sesión:', error)
}

const useGoogleAuth = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => handleAuthSuccess(result.user, '/#/panel'))
      .catch(handleAuthError)
  }

  const signOutWithGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then(handleSignOutSuccess)
      .catch(handleSignOutError)
  }

  return { signInWithGoogle, signOutWithGoogle }
}

export { auth, useGoogleAuth }
