import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {
    const {id} =useParams();
    console.log(id)
    return (
        <div>
            <h1>Catagories ={id}</h1>
        </div>
    );
};

export default CatagoryNews;