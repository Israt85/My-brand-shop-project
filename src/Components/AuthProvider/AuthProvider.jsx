import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const[user, setuser] = useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);

  const userSignUp = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
  }
  const userLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userLogOut =() =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser);
      setuser(currentUser)
      setLoading(false)
    })
    return ()=> unsubscribe()
  },[])

  const updateUserProfile = (name,photo) =>{
    updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: photo
    } )
  }
    const AuthInfo = {
        user,
        userSignUp,
        userLogin,
        userLogOut,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;