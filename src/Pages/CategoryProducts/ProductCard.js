import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import { MdVerifiedUser } from "react-icons/md";

const ProductCard = ({ product, setBooking }) => {
    const { _id, productName, image, price, resalePrice, seller, yearsOfUse, time, location, sellerStatus } = product;
    const { user } = useContext(AuthContext)

    const handleReportToAdmin = () => {
        const reportItem = {
            productId: _id,
            productName,
            image,
            resalePrice,
            seller,
            reporter: user?.displayName,
            reporterEmail: user?.email
        }
        console.log(reportItem);
        fetch('https://used-laptop-resale-server-kaiser82.vercel.app/reports', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null);
                    toast.success('Item is reported to admin.')
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div className="card bg-purple-50 shadow-xl">
            <figure className="px-10 pt-10 h-80">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <div className='space-y-1'>
                    <p> <span className='font-semibold'>Location:</span> <span> {location}</span></p>
                    <p className='font-semibold'>Original Price: <span className='text-blue-500'>${price}</span> </p>
                    <p className='font-semibold'> <span>Resale Price:</span> <span className='text-green-500'> ${resalePrice}</span></p>
                    <p> <span className='font-semibold'>Years of use:</span> <span> {yearsOfUse}</span></p>
                    <p> <span className='font-semibold'>Time of post:</span> <span> {time}</span></p>
                    <p className='flex items-center justify-center space-x-2'>
                        {
                            sellerStatus && <span className='text-2xl  text-green-700'> <MdVerifiedUser /> </span>
                        }
                        <span className='font-semibold'>Seller:</span> <span> {seller}</span>
                    </p>
                </div>
            </div>
            <div className='flex justify-between pb-2 '>
                <button className='btn btn-sm btn-accent w-1/2 '>Add to Wishlist</button>
                <button onClick={handleReportToAdmin} className='btn btn-sm btn-error w-1/2'>Report to admin</button>
            </div>
            <label onClick={() => setBooking(product)} htmlFor="booking-modal" className='btn hover:bg-primary'>Book Now </label>
        </div>
    );
};

export default ProductCard;