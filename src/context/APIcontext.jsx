import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ContextProvider } from "./ContextProvider";
import auth from "../utilities/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";
import usePublicAPI from "../hooks/usePublicAPI";

const APIcontext = ({ children }) => {
  const publicAPI = usePublicAPI();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // send jwt token
      const sendToken = async () => {
        const user = { email: currentUser?.email };
        try {
          const { data } = await publicAPI.post(`/jwt`, user);
          if (data.token) localStorage.setItem("access_token", data.token);
        } catch (err) {
          setUser(null);
          Swal.fire({
            title: err.message,
            icon: "error",
          });
        } finally {
          setLoading(false);
        }
      };

      // delete jwt token
      const deleteToken = async () => localStorage.removeItem("access_token");

      if (currentUser?.email) sendToken();
      else deleteToken();
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    updateUser,
    googleSignIn,
    signOutUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

APIcontext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default APIcontext;
