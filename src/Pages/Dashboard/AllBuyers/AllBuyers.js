import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deletingUser, setDeletingUser] = useState(null)

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            try {
                const res = await fetch('https://used-laptop-resale-server-kaiser82.vercel.app/buyer', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('recycleToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch { }
        }
    });

    const closeModal = () => {
        setDeletingUser(null)
    }


    const handleDeleteUser = (user) => {
        console.log(user)
        fetch(`https://used-laptop-resale-server-kaiser82.vercel.app/users/buyers/${user._id}`, {
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
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-3xl font-bold py-5 uppercase text-center'>List Of All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
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
    );
};

export default AllBuyers;