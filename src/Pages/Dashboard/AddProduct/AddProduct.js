import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleAddProduct = (data) => {
        console.log(data);
        // createUser(data.email, data.password)
        //     .then(res => {

        //         const user = res.user;
        //         console.log(user);
        //         toast.success("New user created successfully.")
        //         const userInfo = {
        //             displayName: data.name
        //         }
        //         updateUser(userInfo)
        //             .then(() => {
        //                 saveUser(data.name, data.email, data.role);
        //             })
        //             .catch(e => console.log(e.message))
        //     })
        //     .catch(error => {
        //         toast.error(error.message);

        //     });
    }


    // const saveUser = (name, email, role) => {
    //     const user = { name, email, role };
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('save user:', data);
    //             // setCreatedUserEmail(email);
    //         })
    // }

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
                                <input type="text" name="name" {...register("name", { required: "Name field cannot be empty!" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Lenovo Legion" />
                                {errors.name && <span className='label-text text-red-500'>{errors.name?.message}</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                                <input type="number" name="email" {...register("price", { required: "Email field cannot be empty!" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="12345" />
                                {errors.email && <span className='label-text text-red-500'>{errors.email?.message}</span>}
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
                                <input type="number" name="email" {...register("mobile", { required: "Email field cannot be empty!" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="01711123123" />
                                {errors.email && <span className='label-text text-red-500'>{errors.email?.message}</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
                                <input type="text" name="name" {...register("location", { required: "Name field cannot be empty!" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Dhaka" />
                                {errors.name && <span className='label-text text-red-500'>{errors.name?.message}</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Product category</label>
                                <select {...register("condition")} className="select select-bordered w-full rounded-lg">
                                    <option >excellent</option>
                                    <option>good</option>
                                    <option>fair</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Year used</label>
                                <input type="number" name="password"
                                    {...register("password", { required: "Password field cannot be empty!" })}
                                    placeholder="12345" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                {errors.password && <span className='label-text text-red-500'>{errors.password?.message}</span>}
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