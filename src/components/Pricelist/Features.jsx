import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3'> <CircleCheckBig />{feature}</p>
        </div>
    );
};

export default Features;