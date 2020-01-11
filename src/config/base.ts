import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4gzaS_NKwaP9QkYvgMWV8MWLJF2CjJ1E",
    authDomain: "birds-cd37f.firebaseapp.com",
    databaseURL: "https://birds-cd37f.firebaseio.com",
    projectId: "birds-cd37f",
    storageBucket: "birds-cd37f.appspot.com",
    messagingSenderId: "1048065158407",
    appId: "1:1048065158407:web:e8915aa2ef267e6aeaa9a2",
    measurementId: "G-GVBXJQT8BX"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;