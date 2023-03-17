import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvidor = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const auth = getAuth(app);
  

  const Providerlogin = (provider) => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  const providerloginGithub = (provider) =>{
    setloading(true);
    return signInWithPopup(auth,provider);
  }

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)
  }
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    updateUser,
    loading,
    Providerlogin,
    logOut,
    createUser,
    logIn,
    verifyEmail,
    providerloginGithub,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
      setloading(false);
    });
    return () => {
      unsubscribe();
    }
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvidor;