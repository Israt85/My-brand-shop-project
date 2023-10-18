const Brand = ({brands}) => {
    console.log(brands);
    const {brand_name, brand_image} = brands;
    return (
        <div className="h-auto w-60">
            <img className="h-52" src={brand_image} alt="" />
            <h2 className=" text-2xl text-center text-pink-700 mx-auto">{brand_name}</h2>
        </div>
    );
};

export default Brand;