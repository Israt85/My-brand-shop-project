import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import pic1 from '../../src/assets/rev.jpg'
import pic2 from '../../src/assets/Di.jpg'
import pic3 from '../../src/assets/este.jpg'
import notfound from "../../src/assets/no product.png"

const BrandDetails = () => {
    const products = useLoaderData();
    const { brand } = useParams();
    console.log("Brand:", brand);
console.log("All Products:", products);

   
const filteredProducts = products?.filter(product => product.brand.toLowerCase()=== brand.toLowerCase().trim());

    
    return (
        <div className="bg-pink-50 min-h-screen">

{
  filteredProducts.length >0 ? <div className="carousel mt-10 h-96 w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={pic1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img src={pic2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img src={pic3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> : ""
}
            <h2 className="text-2xl font-bold text-center">Product of the Brand : {brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-20">
                {
                  filteredProducts.length >0 ? (filteredProducts.map(product => (
                    <Product key={product._id} products={product} ></Product>) 

                )) : <>
                <img className="w-full my-10 h-96 mx-56 border" src={notfound} alt="" />
                </>
                }
            </div>
        </div>
    );
};


export default BrandDetails;
