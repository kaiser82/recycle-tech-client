import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { FaCheck } from 'react-icons/fa';

const AllSellers = () => {
    const [deletingUser, setDeletingUser] = useState(null)

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://used-laptop-resale-server-kaiser82.vercel.app/sellers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('recycleToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch {
            }
        }
    });

    const closeModal = () => {
        setDeletingUser(null)
    }
    console.log(users)

    const handleDeleteUser = (user) => {
        console.log(user)
        fetch(`https://used-laptop-resale-server-kaiser82.vercel.app/users/sellers/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('recycleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Doctor ${user.name} deleted successfully`)
                    refetch();
                }
            })
    };

    const handleVerify = (user) => {
        fetch(`https://used-laptop-resale-server-kaiser82.vercel.app/users/sellers/${user._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('recycleToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Seller verified successfully.');
                    refetch();
                }
            })
    }


    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold py-5 uppercase text-center'>List Of All Sellers</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Role</th>
                                <th>Verify</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> {user?.role}</td>
                                    <td>
                                        {
                                            user?.verify === 'verified' ?

                                                <p className='flex items-center space-x-2'>
                                                    <span className='text-lg font-semibold text-green-500'><FaCheck /></span>
                                                    <span><button className='btn btn-sm btn-disabled bg-green-600 text-white'>verified</button></span>
                                                </p> :
                                                <button onClick={() => handleVerify(user)} className='btn btn-sm btn-warning'>Undefined</button>
                                        }
                                    </td>
                                    <td><label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                {
                    deletingUser && <ConfirmationModal
                        title={`Are you sure, you want to delete: ${deletingUser.name}`}
                        message={`If you delete, ${deletingUser.name}'s information will be lost permanently.`}
                        successAction={handleDeleteUser}
                        successButtonName="delete"
                        modalData={deletingUser}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }

            </div>
        </div>
    );
};

export default AllSellers;