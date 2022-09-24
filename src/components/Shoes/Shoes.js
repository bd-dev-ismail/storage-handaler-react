import React from 'react';
import { add, multiply } from '../../utilites/calculate';
import divide from '../../utilites/divide';

const Shoes = () => {
    const  frist = 10;
    const second = 2;
    const total = multiply(frist, second);
    const sum = add(frist, second);
    const vagfol = divide(frist, second)
    return (
        <div>
            <h2>this is show component</h2>
            <p>Total Multiply {total}</p>
            <p>Total sum: {sum}</p>
            <p>Total divide {vagfol}</p>
        </div>
    );
};

export default Shoes;