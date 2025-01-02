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
// import axios from "axios";
// import Swal from "sweetalert2";

const APIcontext = ({ children }) => {
  // const API_LINK = import.meta.env.VITE_API_LINK;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  /*
  useEffect(() => {
    const loadUserId = async() => {
      try {
        const {data} = await axios(`${API_LINK}/users/${user?.email}`)
        setUser({...user, userId: data});
      } catch (err) {
        Swal.fire({
          title: err.message,
          icon: "error",
        })
        setUser(null)
      }
    }
    if(user) loadUserId()
  }, [user]);
  */

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
      setLoading(false); // remove it when jwt will open

      // send jwt token
      // const sendToken = async () => {
      //   const user = { email: currentUser?.email };
      //   try {
      //     await axios.post(`${API_LINK}/jwt`, user, { withCredentials: true });
      //     setLoading(false);
      //   } catch (err) {
      //     Swal.fire({
      //       title: err.message,
      //       icon: "error",
      //     });
      //   }
      // };

      // delete jwt token
      // const deleteToken = async () => {
      //   try {
      //     await axios.delete(`${API_LINK}/logout`, { withCredentials: true });
      //     setLoading(false);
      //   } catch (err) {
      //     Swal.fire({
      //       title: err.message,
      //       icon: "error",
      //     });
      //   }
      // };

      //   if (currentUser?.email) sendToken();
      //   else deleteToken();
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