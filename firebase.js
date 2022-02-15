  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDz7uB326HGCK2165BY-IrtbvfRMAJLLLA",
    authDomain: "it-nettside-60743.firebaseapp.com",
    projectId: "it-nettside-60743",
    storageBucket: "it-nettside-60743.appspot.com",
    messagingSenderId: "836821416083",
    appId: "1:836821416083:web:5b209f7c840987b816f566",
    measurementId: "G-QFHCMG04CS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

function registerUser() {
  const email = document.getElementById("signup-email").value
  const password = document.getElementById("signup-password").value
  const auth = getAuth()
      .createUserWithEmailAndPassword(auth, email, password)
}