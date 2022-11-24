import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, categoryName, image } = category
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{categoryName}</h2>
                <Link to={`/category/${_id}`} className='btn'>See Products </Link>

            </div>
        </div>
    );
};

export default CategoryCard;