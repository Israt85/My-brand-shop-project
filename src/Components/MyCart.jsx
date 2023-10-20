import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsCurrencyDollar } from "react-icons/bs";
import {  AiFillStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


const MyCart = () => {
    const loadedCart = useLoaderData();
    const [myCart, setMyCart] = useState(loadedCart);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = myCart?.filter(acart => acart._id !== id);
                    setMyCart(remaining); 
                }
                console.log(data);
            });
    };

    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-pink-900'>Cart Items: {loadedCart.length}</h2>
            {
                myCart.map(cart => (
                    <div key={cart._id}>
                        <div className="card mb-6 bg-pink-100 w-60 mx-auto md:w-96 h-full shadow-xl">
                            <figure><img className="w-60 p-4 rounded-xl h-60" src={cart.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-pink-700">{cart.name}</h2>
                                <p>{cart.description}</p>
                                <div className="flex gap-6 items-center">
                                    <h2 className='text-pink-700 bg-pink-100 font-bold text-2xl'>{cart.brand}</h2>
                                    <h2>{cart.type}</h2>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <h2 className='flex items-center text-xl text-pink-800'><BsCurrencyDollar></BsCurrencyDollar>{cart.price}</h2>
                                    <h2 className='flex items-center text-lg text-orange-600'>{cart.rating}
                                    <AiFillStar></AiFillStar></h2>

                                </div>
                                <button onClick={() => handleDelete(cart._id)} className="btn btn-secondary text-2xl"><MdDelete></MdDelete> Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default MyCart;
