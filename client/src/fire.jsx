
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA2iVnczSMy6_fGb6z5wf0sbk6kt5Jf94U",
  authDomain: "crypto-f15fc.firebaseapp.com",
  projectId: "crypto-f15fc",
  storageBucket: "crypto-f15fc.appspot.com",
  messagingSenderId: "931435938547",
  appId: "1:931435938547:web:7a704a0aad6dc80969ad86",
  measurementId: "G-X60PDERVE7"
};


// const fire = initializeApp(firebaseConfig);
// const fire = initializeApp(firebaseConfig);
// const auth = getAuth(fire);


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const  db = getFirestore(app)
export default app;


