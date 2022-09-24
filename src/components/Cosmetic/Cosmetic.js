import React from 'react';
import { addToDb } from '../../utilites/fakedb';
import './Cosmetic.css'
const Cosmetic = ({cosmetic}) => {
    const {name, price, id, gender, email} = cosmetic;
    
    const addToCart =(id)=>{
        addToDb(id);
    }
    return (
        <div className='product'>
            <h3>Buy this {name}</h3>
            <p>Price: ${price}</p>
            <p>Prodouct id: {id}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>

        </div>
    );
};

export default Cosmetic;