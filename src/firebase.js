import Firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1LJJIxVay23xjG8oBizJSkdVjR5lMFz8",
    authDomain: "vueblog-dea75.firebaseapp.com",
    databaseURL: "https://vueblog-dea75.firebaseio.com",
    projectId: "vueblog-dea75",
    storageBucket: "vueblog-dea75.appspot.com",
    messagingSenderId: "564045079965",
    appId: "1:564045079965:web:5dfc3a353587a7076cfb74",
    measurementId: "G-Y0NZ21YSN4"
}

Firebase.initializeApp(firebaseConfig)
const db = Firebase.database()
export default db