import Brand from "./Brand";

const Brands = ({brands}) => {
    const {brand_name} = brands
    
    console.log(brands);
    return (
        <div className="w-full h-auto mt-10">
            <div className="grid grid-cols-3 gap-4">
            {
                brands?.map(brand => <Brand key={brand.id} brands={brand}></Brand>)
            }
            </div>
        </div>
    );
};

export default Brands;