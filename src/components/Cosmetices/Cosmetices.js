import React from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilites/calculate';

const Cosmetices = () => {
    const [cosmetics, setCosmetics]= useState([]);
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
      <div>
        <h1>Welcome to our cosmetic store</h1>
        {cosmetics.map((cosmetic) => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}/>)}
      </div>
    );
};

export default Cosmetices;