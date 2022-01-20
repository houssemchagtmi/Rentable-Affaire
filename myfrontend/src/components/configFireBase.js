import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyB_G_1-UtrZdN7oHxJ353ucL5f6xUzKHac",
    authDomain: "calendar-8b29a.firebaseapp.com",
    

    projectId: "calendar-8b29a",

    storageBucket: "calendar-8b29a.appspot.com",


    messagingSenderId: "1070020354835",
    appId: "1:1070020354835:web:bb859e0ae5f329c88ab0e6",
    measurementId: "G-XGW6VNWVF3"
  };
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app)
  export const db=getFirestore(app) 