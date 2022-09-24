import React from 'react';
import { add } from '../../utilites/calculate';
// import add from '../../utilites/calculate';

const Cosmetices = () => {
    const frist = 55;
    const second = 66;
    const total = add(frist, second);
    return (
        <div>
            <h1>Welcome to our cosmetic store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetices;