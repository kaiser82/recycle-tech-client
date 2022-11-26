import React from 'react';
import banner from '../../../assets/laptop.png'

const Banner = () => {
    return (
        <div>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div >
                        <img src={banner} className=" rounded-lg  shadow-2xl " alt='' />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">All Exciting Deals<br /> On  Used Laptop <br /> Are Here</h1>
                        <p className="text-lg py-6">Its easy to buy or sell your old laptop online. <br /> You will get world best deals from here. <br /> Join us today and enjoy the ride.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;