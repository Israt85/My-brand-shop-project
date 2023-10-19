import { Link } from "react-router-dom";
import error from "../../src/assets/error.jpg"

const ErrorPage = () => {
    return (
        <div className="w-full h-96">
            
        <img className="w-2/3 h-96 mx-auto" src={error} alt="" />
        
        <h2 className="text-7xl text-center font-bold text-red-600">Error</h2>

        <div className="w-full mx-auto"><Link to="/"><button className="btn ">Back Home</button></Link></div>
        </div>



    );
};

export default ErrorPage;