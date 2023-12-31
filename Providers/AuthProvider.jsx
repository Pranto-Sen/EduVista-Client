import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { app } from './../firebase/firebase.config';
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
// const auth = getAuth(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const axiousPublic = useAxiosPublic();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //  const userEmail = currentUser?.email || user?.email;
      //  const loggedUser = { email: userEmail };
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiousPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // Provide the key ('access-token') as an argument to removeItem
        localStorage.removeItem("access-token");
      }

      setLoading(false);

    });
    return () => {
      unSubscribe();
    };
  }, [axiousPublic]);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    loading,
    isRegister,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
