import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
    const { loading } = useContext(AuthContext)
    const [products, setProducts] = useState([]);
    const [booking, setBooking] = useState(null)
    console.log(products)
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`https://used-laptop-resale-server-kaiser82.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    if (loading) {
        return <Loading />
    }
    return (
        <div className='py-5'>
            <h2 className='text-4xl font-bold text-center py-4 mb-1 bg-violet-100'>Chose Your Product From {products?.length} {id} Laptops</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard key={product._id} product={product} setBooking={setBooking}></ProductCard>)
                }
            </div>
            <div>
                {
                    booking &&
                    <BookingModal booking={booking} setBooking={setBooking}></BookingModal>
                }
            </div>
        </div>
    );
};

export default CategoryProducts;