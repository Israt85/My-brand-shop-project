import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const BrandDetails = () => {
    const products = useLoaderData()
   
    return (
        <div>
            <h2>details :{products.length} </h2>
            <div className="grid grid-cols-2 gap-10 mx-20">
            {
                products?.map(product => <Product key={product._id} products={product} ></Product>)
            }
            </div>
        </div>
    );
};

export default BrandDetails;