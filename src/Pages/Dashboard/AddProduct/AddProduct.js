import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://used-laptop-resale-server-kaiser82.vercel.app/users/${user.email}`, {
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
    const verify = (users.verify)



    const handleAddProduct = (data) => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const postTime = date + ' ' + time;

        const { category_id, productName, image, price, resalePrice, yearsOfUse, location, mobile } = data

        const product = {
            category_id,
            productName,
            image,
            price,
            resalePrice,
            yearsOfUse,
            location,
            mobile,
            seller: user.displayName,
            email: user.email,
            time: postTime,
            sellerStatus: verify
        }
        console.log(product)

        fetch('https://used-laptop-resale-server-kaiser82.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product added successfully.');
                navigate('/dashboard/myproducts')
            })
    };

    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Enter Product Details
                        </h1>
                        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Product name</label>
                                <input type="text" name="name" {...register("productName", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Lenovo Legion" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Resale Price</label>
                                <input type="number" name="resalePrice" {...register("resalePrice", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="12345" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Original Price</label>
                                <input type="number" name="email" {...register("price", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="12345" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Product condition</label>
                                <select {...register("condition")} className="select select-bordered w-full rounded-lg">
                                    <option >excellent</option>
                                    <option>good</option>
                                    <option>fair</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Mobile no</label>
                                <input type="number" name="email" {...register("mobile", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="01711123123" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
                                <input type="text" name="location" {...register("location", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Dhaka" />
                                {errors.name && <span className='label-text text-red-500'>{errors.name?.message}</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Product category ID</label>
                                <select {...register("category_id")} className="select select-bordered w-full rounded-lg">
                                    <option >637f2a88460053f520faaa1d</option>
                                    <option>637f2a88460053f520faaa1e</option>
                                    <option>637f2a88460053f520faaa1f</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Years of used</label>
                                <input type="double" name="used"
                                    {...register("yearsOfUse", { required: true })}
                                    placeholder="12345" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Image URL</label>
                                <input type="text" name="used"
                                    {...register("image", { required: true })}
                                    placeholder="https://www.google.com/" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                            </div>
                            <button type="submit" className="w-full text-white btn bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Product</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;