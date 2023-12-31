import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle, } from "react-icons/fc";

const Login = () => {
    const {userLogin, googleLogin} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : "/");
        })
        .catch(err =>{
            console.log(err);
        })
      }
   
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        if (!email, !password) {
          toast.error("Email or password does not match match");
        } else {
          userLogin(email, password)
            .then(result => {
              console.log(result.user);
              navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
              console.log(err);
              toast.error("Login failed"); 
            });
        }
      };
     

      
      

    return (
        <div>

            <div className="hero h-auto bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-60 md:w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div><h2>New to this Website? please <Link className="font-bold text-blue-600" to="/signup">Signup</Link> </h2></div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                                <ToastContainer></ToastContainer>
                            </div>
                            <button className="btn-ghost border-green-700 gap-2 py-2 flex items-center justify-center rounded-xl" onClick={handleGoogleLogin} > 
                            <span className="text-xl"><FcGoogle></FcGoogle></span>Google Login</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;