import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
    const location = useLocation();
     const {user, loading} = useContext(AuthContext);

      if(loading){
        return <p><span className="loading loading-spinner loading-lg"></span></p>
      }

     if(user)
       return children;
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;