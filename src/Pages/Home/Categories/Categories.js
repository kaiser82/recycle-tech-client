import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)

    useEffect(() => {
        fetch('https://used-laptop-resale-server-kaiser82.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='text-4xl font-bold py-3 px-2 text-center'>Chose Product Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;