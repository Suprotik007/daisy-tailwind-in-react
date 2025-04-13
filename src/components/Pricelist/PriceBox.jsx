import React,{use} from 'react';
import PriceCard from './PriceCard';
import DaisyCards from '../navigation/DaisyCard/DaisyCards';

const PriceBox = ({pricePromise}) => {
    const priceData=use(pricePromise)
    console.log(priceData);
    

    return (
        <div>
            <h1 className='text-5xl mt-20 text-amber-400 mb-15'>Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {/* {
                    priceData.map(pricing=><PriceCard key={pricing.id} pricing={pricing}></PriceCard> )
                } */}

                {
priceData.map(pricing=><DaisyCards key={pricing.id} pricing={pricing}></DaisyCards>)

                }
            </div>
        </div>
    );
};

export default PriceBox;