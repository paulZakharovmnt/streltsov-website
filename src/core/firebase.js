import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

var firebaseConfig = {
  apiKey: "AIzaSyAbjNm8Cx9TGz6-Y8G7XUalawsxAM3dSVw",
  authDomain: "streltsov-cd85c.firebaseapp.com",
  projectId: "streltsov-cd85c",
  storageBucket: "streltsov-cd85c.appspot.com",
  messagingSenderId: "1078082693986",
  appId: "1:1078082693986:web:818a948045fb6e42479a3b",
};

export const fire = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
