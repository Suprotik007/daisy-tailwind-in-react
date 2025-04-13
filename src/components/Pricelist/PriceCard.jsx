import React from 'react';
import Features from './Features';
const PriceCard = ({pricing}) => {
    const{model,price,features}=pricing
    
    return (
        <div className='bg-amber-200 text-amber-950 p-10 pb-8 rounded-2xl text-left'>
            <div>
                <h1 className='text-4xl bg-amber-800 p-2 text-amber-50 rounded-2xl  font-bold'>{model}</h1>

                <p className='text-2xl text-amber-100 font-semibold mt-3 bg-black p-2 rounded-2xl'>{price}</p>
                {/* <p className='text-2xl text-fuchsia-950 font-semibold mt-3'>{pricing.priceRange}</p> */}
                 <h1 className='bg-amber-500 p-4 rounded-2xl mt-5  text-black font-mono font-bold'>{
                    features.map((feature,index)=><Features className='gap-2.5' key={index} feature={feature}> </Features>)
                }</h1> 
                <button className="btn btn-soft text-amber-50 hover:text-black btn-warning mt-8 ml-26">{pricing.button}</button>
            </div>
        </div>
    );
};

export default PriceCard;