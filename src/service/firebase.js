import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4U2rjhSQeYkv-7sEcLSU8DQwZ2ZrqMkw",
  authDomain: "zenify-labs-localhost.firebaseapp.com",
  projectId: "zenify-labs-localhost",
  storageBucket: "zenify-labs-localhost.appspot.com",
  messagingSenderId: "59483362550",
  appId: "1:59483362550:web:dbe87f4e9e833feace08d7",
  measurementId: "G-59WG9YQP2P",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

const useAuthentication = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const photoURL = user.photoURL;
        localStorage.setItem("user", JSON.stringify({ name, photoURL }));

        console.log("Usuario autenticado:", result.user);
        // Redirigir después de que los datos del usuario se hayan guardado

        window.location.href = "/#/panel";
      })
      .catch((error) => {
        // Manejar errores de inicio de sesión
        console.error("Error al autenticar:", error);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Limpiar datos del usuario del localStorage al cerrar sesión
        localStorage.removeItem("user");
        // Redireccionar después de que se limpien los datos
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error al desloguear:", error);
      });
  };

  return { signInWithGoogle, signOut };
};

export { auth, useAuthentication };
