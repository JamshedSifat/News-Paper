import React from 'react';
import swimingImg from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold  text-lg'>QZone</h1>
            <div className="space-y-5 flex flex-col ">
                <img src={swimingImg} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />

            </div>
        </div>
    );
};

export default Qzone;