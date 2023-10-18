import selena from "../../assets/selena.jpg"
import chung from "../../assets/chung.jpg"
import janne from "../../assets/janne.jpg"
import nassy from "../../assets/nassy.jpg"


const ExtraSection = () => {
    return (
        <div className="w-full h-auto border-2 bg-pink-100 border-[#FF8080] mt-10">
            <h2 className="text-3xl font-semibold text-[#FF8080] text-center">Top Influencers are Recomending our Services</h2>
            <div className="mb-10 grid grid-cols-4 mt-6 text-center text-pink-600 mx-20">
                <div>
                    <img className="w-52 h-60" src={selena} alt="" />
                    <h2>Selena Gomez</h2>
                    <h2 className="text-orange-700 font-bold">5M <p>Followers</p> </h2>
                </div>
                <div>
                    <img className="w-52 h-60" src={chung} alt="" />
                    <h2>Alexa Chung</h2>
                    <h2 className="text-orange-700 font-bold">2M <p>Followers</p> </h2>
                </div>
                <div>
                    <img className="w-52 h-60" src={janne} alt="" />
                    <h2>Kylie Jenner</h2>
                    <h2 className="text-orange-700 font-bold">53000 <p>Followers</p> </h2>
                </div>
                <div>
                    <img className="w-52 h-60" src={nassy} alt="" />
                    <h2>Massy Arias</h2>
                    <h2 className="text-orange-700 font-bold">1.8M <p>Followers</p> </h2>
                </div>
            </div>
            <div className="flex mb-6 gap-4 justify-center items-center">
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <div><h2 className="text-3xl font-semibold border-orange-600 border-l-2">The Influencers Highly recomended this site</h2></div>
            </div>
        </div>
    );
};

export default ExtraSection;