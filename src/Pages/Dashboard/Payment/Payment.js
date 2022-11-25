import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {

    const order = useLoaderData();
    console.log(order);
    const { productName, productPrice } = order;

    return (
        <div>
            <h2 className='text-3xl font-bold uppercase text-center py-5'>Pay for Your Product</h2>
            <div className='text-center py-5'>
                <h4 className='text-xl font-bold'>Your Chosen Product: <span className='text-green-600'>{productName}</span> </h4>
                <h4 className='text-xl font-semibold'>Your Have To Pay: <span className='text-green-600'>${productPrice}</span> </h4>
            </div>
            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;