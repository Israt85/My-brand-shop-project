import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData()
    const navigate = useNavigate()
    console.log(loadedData);
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandSelect = form.brand;
        const typeSelect = form.type;
        const brand = brandSelect.options[brandSelect.selectedIndex].value;
        const type = typeSelect.options[typeSelect.selectedIndex].value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const obj = { name, photo, brand, type, price, description, rating };
        console.log(obj);
        fetch(`http://localhost:5000/products/${loadedData._id}`,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className="bg-pink-100">
            <h2>Please Update here</h2>
            <form onSubmit={handleUpdate} >
                            <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" defaultValue={loadedData.photo} name="photo" placeholder="image url.." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={loadedData.name} placeholder="name..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand name
                                        </span>
                                    </label>
                                    <select name="brand" value={loadedData.brand} className="select select-bordered w-full">
                                        <option value="" >Select a brand</option>
                                        <option value="Dior">DIOR</option>
                                        <option value="Urban decay">Urban Decay</option>
                                        <option value="Lo'real">LO'real</option>
                                        <option value="Chanel">Chanel</option>
                                        <option value="Revlon">Revlon</option>
                                        <option value="Estée lauder">Estee lauder</option>
                                    </select>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <select name="type" value={loadedData.type} className="select select-bordered w-full">
                                        <option value="">Select a type</option>
                                        <option value="Perfume">Perfume</option>
                                        <option value="Cosmetics">Cosmetics</option>
                                        <option value="Skincare">Skincare</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">price</span>
                                    </label>
                                    <input type="price" name="price" defaultValue={loadedData.price}placeholder="00" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="description" defaultValue={loadedData.description}placeholder="Description" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="rating" defaultValue={loadedData.rating}placeholder="00" className="input input-bordered" required />
                                </div>
                                <div className="w-32 flex gap-2 mt-4 border mx-auto" >
                                    <button className="btn block btn-primary">Update</button>
                                    <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                            

                        </form>
                       
        </div>
    );
};

export default Update;