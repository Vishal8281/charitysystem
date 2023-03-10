import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../fire";

// const userAuthContext = createContext();
export const userAuthContext = React.createContext(); 

export const UserAuthContextProvider =({ children }) =>{
  
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, ['']);

  return (
    <userAuthContext.Provider  value={{ user, logIn, signUp, logOut, googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}

// export default function useUserAuth() {
//   return useContext(userAuthContext);
// }

// export default userAuthContext

