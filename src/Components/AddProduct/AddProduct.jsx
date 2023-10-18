const AddProduct = () => {
    const handlerAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value || "DefaultType";
        const type = form.type.value || "DefaultType";
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const obj = { name, photo, brand, type, price, description,rating }
        console.log(obj);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('successfully added')
                    form.reset()
                }
            })
    }

    return (
        <div>
            <div>
                <div className=" border mx-auto mt-10 h-auto">
                    <div>
                        <div className=" w-full pb-4 text-center">
                            <div>
                                <h1 className="text-3xl font-bold">Add product here</h1>
                            </div>

                        </div>

                        <form onSubmit={handlerAdd} >
                            <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="image url.." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand name
                                        </span>
                                    </label>
                                    <select name="brand" className="select select-bordered w-full">
                                    <option value="" >Select a type</option>
                                        <option value="Perfume">DIOR</option>
                                        <option value="Cosmetics">Urban Decay</option>
                                        <option value="Skincare">LO'real</option>
                                        <option value="Accessories">Chanel</option>
                                        <option value="Accessories">Revlon</option>
                                        <option value="Accessories">Estee lauder</option>
                                    </select>
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <select name="type" className="select select-bordered w-full">
                                    <option value="">Select a brand</option>
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
                                    <input type="price" name="price" placeholder="00" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center">
                            <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="rating" placeholder="00" className="input input-bordered" required />
                                </div>
                                <div className="w-32 mt-4 border mx-auto" >
                                    <button className="btn block btn-primary">Add Product</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;