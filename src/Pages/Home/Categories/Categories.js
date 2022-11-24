import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold py-3'>Used Product Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;