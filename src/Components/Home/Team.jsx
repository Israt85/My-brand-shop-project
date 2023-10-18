import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'

const Team = () => {
    return (
       <div className='w-full mt-6 mx-auto h-96 '>
        <h2 className='text-center text-orange-700 font-bold text-3xl py-6'>Our Valuable Clients</h2>

         <div className=" gap-4 grid grid-cols-3">
            
            <div>
            <figure className="px-32">
                        <img src={team1} alt="Shoes" className=" relative rounded-full h-20 w-20 " />
                    </figure>
                <div className=" p-4 absolute -mt-10 card w-1/3 shadow-xl">
                    
                    <div className=" h-60 pt-10 items-center text-center">
                        
                        <p>I can't believe how magical this serum is! It's like a bottle of sunshine for your face. The serum is incredibly lightweight, and it absorbs quickly, leaving my skin feeling fresh and hydrated.</p>
                        <p className='text-orange-700 font-bold'>---Aeliana</p>
                    </div>
                </div>
            </div>
            <div>
            <figure className="px-32">
                        <img src={team2} alt="Shoes" className=" relative rounded-full h-20 w-20 " />
                    </figure>
                <div className=" p-4 absolute -mt-10 card w-1/3 shadow-xl">
                    
                    <div className=" h-60 pt-10 items-center text-center">
                        
                        <p>Unbelievable value! GlowPalatte's EcoGlow Serum is high quality at an affordable price. My skin looks amazing. Quality skincare, budget-friendly!</p>
                        <p className='text-orange-700 font-bold'>---Roshna</p>
                    </div>
                </div>
            </div>
            <div>
            <figure className="px-32">
                        <img src={team3} alt="Shoes" className=" relative rounded-full h-20 w-20 " />
                    </figure>
                <div className=" p-4 absolute -mt-10 card w-1/3 shadow-xl">
                    
                    <div className=" h-60 pt-10 items-center text-center">
                        
                        <p>Absolutely affordable!  Glow palatte's all delivers quality results at a fraction of the cost. A skincare gem on a budget!</p>
                        <p className='text-orange-700 font-bold'>---Ayrin</p>
                    </div>
                </div>
            </div>

        </div>
       </div>
    );
};

export default Team;