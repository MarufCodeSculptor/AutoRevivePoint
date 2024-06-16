import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // creating user =>
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   loging =>
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleSignOut = async () => {
    signOut(auth)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };
  //  user state cheecking first load =>
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post(
            'https://auto-revive-point-server.vercel.app/user',
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then(res => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            'https://auto-revive-point-server.vercel.app/logout',
            loggedUser,
            { withCredentials: true }
          )
          .then(res => console.log(res.data))
          .catch(error => console.log(error));
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    handleSignOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
