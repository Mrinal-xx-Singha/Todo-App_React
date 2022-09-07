
import firebase from "./firebase";


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD5rKAYt5Ka8GLDSc4GlgVGvQjtzavvTWA",
        authDomain: "todo-app-4fe5f.firebaseapp.com",
        projectId: "todo-app-4fe5f",
        storageBucket: "todo-app-4fe5f.appspot.com",
        messagingSenderId: "181541095795",
        appId: "1:181541095795:web:9e616cfdfbd7c3cd141d06",
        measurementId: "G-27SMFM91KW"
});


// storing data in db variable
const db = firebaseApp.firestore();
export default db  ;
