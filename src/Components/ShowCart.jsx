
const ShowCart = ({cart}) => {
    const {_id, name, photo, type, brand, rating, price, description }= cart
    return (
        <div>
             <div>
        <div className="card w-60 mx-auto md:w-96 h-full bg-base-100 shadow-xl">
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
        </div>
      </div> 
      
    </div>
        </div>
    );
};

export default ShowCart;