import { Link } from "react-router-dom";


const Product = ({ products }) => {
  const {_id, name, photo, type, brand, rating, price, description } = products
  return (
    <div>
        <div className="card w-60 mx-auto md:w-96 h-full bg-base-100 shadow-xl">
        <figure><img className="w-60 rounded-xl h-52" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
         {description.length >200? <p>{description.slice(0,100)}</p> : <p>{description}</p> }
          <div className="flex gap-6 text-pink-600 items-center">
            <h2>Brand: {brand}</h2>
            <h2 className=" border-pink-600 border-l-2 pl-2">Type: {type}</h2>
          </div>
          <div className="flex gap-6 items-center">
            <h2>Price: ${price}</h2>
            <h2 className="text-orange-600 border-orange-800 border-l-2 pl-2">Rating: {rating} out of 5</h2>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`} state={{ products }}><button className="btn btn-primary">Details</button></Link>
            <Link to={`/update/${_id}`} ><button className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div> 
      
    </div>
  );
};

export default Product;