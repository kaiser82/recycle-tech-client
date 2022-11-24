import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    console.log(booking)
    const { productName, resalePrice, image } = booking;
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const bookingInfo = {
            productName,
            productPrice: resalePrice,
            userName: name,
            email,
            phone,
            meetingLocation

        }
        // console.log(bookingInfo)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null);
                    toast.success('You have booked the item successfully.')
                }
                else {
                    toast.error(data.message)
                }
            })


    }

    return (
        <>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex items-center justify-center space-x-3'>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={image} alt='product' />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{productName}</h3>
                            <h3 className=" font-bold text-green-600">Price: ${resalePrice}</h3>
                        </div>
                    </div>
                    <form onSubmit={handleBooking} className='space-y-5 mt-5'>

                        <input type="text" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered w-full " />
                        <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="text" name='meetingLocation' placeholder="Meeting Location" className="input input-bordered w-full " />
                        <input type="submit" className='btn w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;