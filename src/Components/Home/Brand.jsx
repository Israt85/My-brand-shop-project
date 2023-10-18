import { Link } from "react-router-dom";

const Brand = ({brands}) => {
    console.log(brands);
    const {brand_name, brand_image} = brands;
    return (
        <div className="h-auto w-60">
            <img className="h-52" src={brand_image} alt="" />
            <h2 className=" font-bold text-xl text-center text-pink-700 mx-auto"><Link to="/branddetails"><button className="btnfont-bold text-xl text-center text-pink-700 mx-auto p-4 rounded-xl bg-pink-300">{brand_name}</button> </Link></h2>
        </div>
    );
};

export default Brand;