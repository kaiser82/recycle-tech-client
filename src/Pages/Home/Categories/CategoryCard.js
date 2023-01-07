import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { categoryName, image } = category
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5 ">
                <img src={image} alt="Laptop category" className="rounded-xl h-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{categoryName}</h2>
                <Link to={`/category/${categoryName}`} className='btn w-full hover:bg-violet-600'>See Products </Link>

            </div>
        </div>
    );
};

export default CategoryCard;