import { Link } from "react-router-dom";


const Product = ({ products }) => {
  const {_id, name, photo, type, brand, rating, price, description } = products
  return (
    <div>
      

      {
        products.length >0 ? <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure><img className="w-60 rounded-xl h-52" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
         {description.length >200? <p>{description.slice(0,100)}</p> : <p>{description}</p> }
          <div className="flex gap-6 items-center">
            <h2>{brand}</h2>
            <h2>{type}</h2>
          </div>
          <div className="flex gap-6 items-center">
            <h2>${price}</h2>
            <h2>{rating}</h2>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`} state={{ products }}><button className="btn btn-primary">Details</button></Link>
            <Link to={`/update/${_id}`} ><button className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div> : <p>No data available</p>
      }
    </div>
  );
};

export default Product;