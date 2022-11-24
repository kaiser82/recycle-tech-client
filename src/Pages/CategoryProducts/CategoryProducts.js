import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
    const { loading } = useContext(AuthContext)
    const [products, setProducts] = useState([]);
    console.log(products)
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <h2>Category of products {products?.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;