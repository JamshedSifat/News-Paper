import React from 'react';
import SocialLogin from '../../Layouts/Home/SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAsside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAsside;