import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCart from './ShowCart';

const MyCart = () => {
    const loadedCart = useLoaderData()
    return (
        <div>
            <h2>cart : {loadedCart.length}</h2>
            {
                loadedCart.map(cart =><ShowCart key={cart._id} cart={cart}></ShowCart>)
            }
        </div>
    );
};

export default MyCart;