import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null)

    const url = `http://localhost:5000/products?email=${user.email}`
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('recycleToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const closeModal = () => {
        setDeletingProduct(null)
    }

    const handleDeleteProduct = (product) => {
        console.log(product)
        fetch(`http://localhost:5000/products/${deletingProduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('recycleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Product: ${deletingProduct.productName} deleted successfully`)
                    refetch();
                }
            })
    };


    // const handleAdvertise = (product) => {
    //     console.log(product)
    //     fetch('http://localhost:5000/advertises', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             toast.success('Product added for advertise.');

    //         })
    // }

    const handleAdvertise = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('recycleToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Added for advertisement.');
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-3xl font-bold uppercase text-center py-5'>My Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Sales Status</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <tr key={product._id} className='hover'>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={product.image} alt="laptop" />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.productName}</td>
                                <td>${product.resalePrice}</td>
                                <td> <button className='btn btn-sm btn-primary'>Available</button> </td>
                                <td>
                                    {
                                        product?.advertise === 'yes' ?
                                            <button disabled className='btn btn-sm btn-accent' >Yes</button>
                                            :
                                            <button onClick={() => handleAdvertise(product)} className='btn btn-sm btn-accent' >Yes</button>
                                    }
                                </td>
                                <td> <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure, you want to delete: ${deletingProduct.productName}`}
                    message={`If you delete, ${deletingProduct.productName}'s information will be lost permanently.`}
                    successAction={handleDeleteProduct}
                    successButtonName="delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;