import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer";
import ExtraSection from "./ExtraSection";
import Team from "./Team";



const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div className="bg-orange-100 dark:bg-slate-800">
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <ExtraSection></ExtraSection>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;