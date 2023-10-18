import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const[user, setuser] = useState()
    const auth = getAuth(app);

  const userSignUp = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  }
  const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

    const AuthInfo = {
        user,
        userSignUp,
        userLogin
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;