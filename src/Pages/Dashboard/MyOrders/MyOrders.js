import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('recycleToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(orders);



    return (
        <div>
            <h2 className='text-3xl font-bold uppercase text-center py-5'>All My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={index} className='hover'>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={order?.image} alt="Laptop" />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.productName}</td>
                                <td>${order.productPrice}</td>
                                <td>
                                    {
                                        order?.productPrice && !order.paid ?
                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                <button className='btn btn-sm btn-warning'>Pay now</button>
                                            </Link> :
                                            <button className='btn btn-sm btn-secondary' disabled>Paid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;