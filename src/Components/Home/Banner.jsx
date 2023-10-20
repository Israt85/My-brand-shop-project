import banner from "../../assets/bannermake.jpg"


const Banner = () => {
    return (
        <div>
            <div className="hero h-auto md:h-96 bg-[#FFDEDE]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="md:w-96 max-w-2xl  h-auto rounded-lg shadow-2xl" />
    <div>
       <h1 className="mb-5 italic text-3xl font-bold text-[#F38181]">CosmeticHaven: <span className="text-orange-600">Unveil Your Inner Beauty</span></h1>
       <p className="mb-5 text-orange-900">your ultimate destination for all things beauty and cosmetics. Discover a world of transformative makeup, skincare, and self-care products designed to enhance your natural radiance. Whether you're looking for the perfect lipstick shade, nourishing skincare essentials, or expert beauty tips, we've got you covered.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;