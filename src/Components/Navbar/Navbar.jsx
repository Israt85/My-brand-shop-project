import { Link } from 'react-router-dom';
import logo from '../../assets/gplogo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {
    const {user,userLogOut} = useContext(AuthContext)
    console.log(user);

    const hangleLogOut = () =>{
        userLogOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(err =>{
            console.log(err);
        })

    }
    return (
        <div>
            <div className="navbar w-full max-w-screen-2xl bg-orange-100 rounded-xl">
                <div className="flex-1 flex-col md:flex-row">
                    <img className='h-20 w-20 mr-2' src={logo} alt="" />
                    <a className="normal-case text-xl font-bold italic text-pink-700">GlOw<span className='text-orange-700'>PaLeTtE</span></a>
                </div>
                <div className='flex flex-col ml-2  w-40 border bg-red-50'>
                {
                     user && <img className="w-20 h-20 mr-2 rounded-full" src={user.photoURL
                     }/>
                }
                {
                    user && <h2 className='text-xl text-red-500'>{user.displayName}</h2>
                }
                </div>
                <div className="flex justify-between flex-col md:flex-row items-center">
                <div><Link to="/addproduct"><button className='btn btn-ghost'>Add Product</button></Link></div>
                    <div className="dropdown dropdown-end ">
                       
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div className="dropdown dropdown-end">
                    
                    <Link to='/'><button >Home</button></Link>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <Link to='/signup'><button >SignUp</button></Link>
                            </li>
                            <li>{
                                user? <button onClick={hangleLogOut}>LogOut</button> : <Link to='/login'><button>Login</button></Link>
                                }</li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;