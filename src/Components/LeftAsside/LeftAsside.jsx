import React, { Suspense } from 'react';
import Catagories from '../Catagories/Categories';
import Categories from '../Catagories/Categories';

const LeftAsside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}></Suspense>
           <Categories></Categories>
        </div>
    );
};

export default LeftAsside;