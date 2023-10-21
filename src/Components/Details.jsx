import { useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate()
  const product = state?.products || {};
  const { _id, name, photo, brand, rating, price, description } = product

  const handleAddToCart = () => {
    fetch(" https://my-brand-shop-server-hkus42lxn-israts-projects.vercel.app/cart", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ product: _id, name, photo, brand, rating, price, description })

    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId
        ) {
          toast("successfully added this product in your cart")
        }
      })
  }
  return (
    <div>
      <button className="btn mt-4 btn-primary" onClick={() => navigate(-1)}>Back</button>
      <div className="card w-full h-full bg-pink-50 mt-10 shadow-xl">

        <h2 className="text-2xl font-semibold text-center py-6 bg-orange-400 text-white mx-auto rounded-lg px-4">{brand}</h2>
        <figure><img className="w-1/2 rounded-xl h-52" src={photo} alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className=" text-orange-700 text-center font-bold text-3xl">{name}</h2>
          <p className=" text-orange-700 font-bold text-xl">{description}</p>

          <div className=" justify-center text-orange-700 font-bold flex gap-6 items-center">
            <h2>Price: ${price}</h2>

          </div>
          <button onClick={handleAddToCart} className="btn bg-orange-500">Add to cart</button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Details;