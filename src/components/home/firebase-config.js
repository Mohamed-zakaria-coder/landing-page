import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA2gBt-jboongRsXpdl3oJms7dczIYLjY0",
    authDomain: "order-c2425.firebaseapp.com",
    projectId: "order-c2425",
    storageBucket: "order-c2425.appspot.com",
    messagingSenderId: "1088367226021",
    appId: "1:1088367226021:web:824d68e8ee5372c8d6f14c",
    measurementId: "G-3WYF5715KM"
  };

  initializeApp(firebaseConfig);
  export const db = getFirestore();