import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const {userSignUp,updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [pass,setPass] = useState("")
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const date = form.date.value;
        const photo = form.photo.value;
        const obj = {name,email,password,date,photo}
        console.log(obj);
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
            setPass("Minimum six characters, at least one letter, one number and one special character")
            return;
           }
           else{
            toast("You successfully created account in this website!!");
           }
        userSignUp(email,password)
        .then(result =>{
            console.log(result.user);
            
            updateUserProfile(name,photo)
            .then(result=>{
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err =>{
                console.log(err);
            })

        })
        .catch(err =>{console.error(err)})

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>

                    </div>
                    <div className="card  w-96 shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of birth</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div>
                                {
                                    pass && <p className="text-red-500 font-bold text-2xl">{pass}</p>
                                }
                            </div>
                            <h2>Already have an account? please <Link className="font-bold text-blue-600" to="/login">Login</Link> </h2>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Sign Up</button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;