import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const BrandDetails = () => {
    const products = useLoaderData();
    const { brand } = useParams();
    console.log("Brand:", brand);
console.log("All Products:", products);

   
const filteredProducts = products.filter(product => product.brand.toLowerCase()=== brand.toLowerCase().trim());

    
    return (
        <div>
            <h2>Product of the Brand : {brand}</h2>
            <div className="grid grid-cols-2 gap-10 mx-20">
                {filteredProducts.map(product => (
                    <Product key={product._id} products={product} ></Product>

                ))}
            </div>
        </div>
    );
};


export default BrandDetails;
