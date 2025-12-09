import React from 'react';
import logo from '/favicon.png';

const Logo = () => {
    return (
        <div className='flex items-center'>
            <img src={logo} alt="Logo" className='w-12 h-12'/>
            <h1 className="text-2xl lg:text-4xl font-bold text-primary">RannaFy</h1>
        </div>
    );
};

export default Logo;