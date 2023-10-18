

const Product = ({products}) => {
    const {name, photo, type, brand, rating, price, description} = products
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-60 rounded-xl h-52" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="flex gap-6 items-center">
        <h2>{brand}</h2>
        <h2>{type}</h2>
    </div>
    <div className="flex gap-6 items-center">
        <h2>${price}</h2>
        <h2>{rating}</h2>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;