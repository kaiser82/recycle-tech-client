import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ advertise }) => {
    const { productName, categoryName, image, location, price, resalePrice, yearsOfUse, time, seller } = advertise
    return (
        <div className="card bg-purple-50 shadow-xl">
            <figure className="px-5 pt-5 ">
                <img src={image} alt="Laptop" className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <div className='space-y-1'>
                    <p> <span className='font-semibold'>Location:</span> <span> {location}</span></p>
                    <p className='font-semibold'>Original Price: <span className='text-blue-500'>${price}</span> </p>
                    <p className='font-semibold'> <span>Resale Price:</span> <span className='text-green-500'> ${resalePrice}</span></p>
                    <p> <span className='font-semibold'>Years of use:</span> <span> {yearsOfUse}</span></p>
                    <p> <span className='font-semibold'>Time of post:</span> <span> {time}</span></p>
                    <p> <span className='font-semibold'>Seller:</span> <span> {seller}</span></p>
                </div>
                <Link to={`/category/${categoryName}`} className='btn w-full hover:bg-violet-600'>See More</Link>
            </div>
        </div>
    );
};

export default AdvertiseCard;