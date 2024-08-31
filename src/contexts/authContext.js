/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signOut, signInWithRedirect, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const SUPER_ADMIN_EMAIL = 'secyprogsoc.sg@iitbbs.ac.in';
  const googleProvider = new GoogleAuthProvider(auth);

  const getUser = () => auth.currentUser;

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  const googleLogout = () => {
    signOut(auth);
  };

  const getUserRole = async (email) => {
    let role = 'user';
    if (email === SUPER_ADMIN_EMAIL) {
      role = 'superAdmin';
    } else {
      const docRef = doc(db, 'admins', email);
      const document = await getDoc(docRef);

      if (document.exists()) {
        role = 'admin';
      }
    }
    return role;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const role = await getUserRole(user.email);
        const updatedUser = { ...user, role };
        setUser(updatedUser);
      } else {
        setUser(user);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const updateLoading = (status) => {
    setLoading(status);
  };

  const value = {
    user,
    getUser,
    googleLogin,
    googleLogout,
    loading,
    updateLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
