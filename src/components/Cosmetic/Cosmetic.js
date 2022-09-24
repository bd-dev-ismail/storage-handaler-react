import React from 'react';
import './Cosmetic.css'
const Cosmetic = ({cosmetic}) => {
    const {name, price, id, gender, email} = cosmetic;
    const addToCart =(id)=>{
        console.log('item clicked', id)
    }
    const addToParameter = ()=> addToCart(id);
    return (
        <div className='product'>
            <h3>Buy this {name}</h3>
            <p>Price: ${price}</p>
            <p>Prodouct id: {id}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <button style={{marginRight: '20px'}} onClick={addToParameter}>Add to Cart withparameter</button>
            <button onClick={()=>addToCart(id)}>Add to cart with arrow</button>

        </div>
    );
};

export default Cosmetic;