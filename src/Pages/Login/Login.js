import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUerEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUerEmail(data.email);
                toast.success("Login successful.")
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                console.log(user);

                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    role: 'buyer'
                }
                console.log(userInfo)



                fetch(`https://used-laptop-resale-server-kaiser82.vercel.app/users/${user.email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {

                        setLoginUerEmail(user?.email)
                        toast.success("Login successful.")
                    })
                    .catch(e => console.log(e.message))



            })
            .catch(e => console.log(e.message))
    }

    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Please Login
                        </h1>
                        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 md:space-y-6">

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" {...register("email", { required: "Email field cannot be empty!" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                                {errors.email && <span className='label-text text-red-500'>{errors.email?.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password"
                                    {...register("password",
                                        {
                                            required: "Password field cannot be empty!",
                                            pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: "Password must contain Minimum eight characters, at least one letter, one number and one special character" }
                                        })}
                                    placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                {errors.password && <span className='label-text text-red-500'>{errors.password?.message}</span>}
                            </div>
                            <div>
                                {
                                    loginError && <p className='label-text text-red-500'>{loginError}</p>
                                }
                            </div>

                            <button type="submit" className="w-full text-white btn bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>
                            <p className="text-sm font-light text-gray-500 ">
                                Don't have an account? <Link to='/signup' className="font-medium text-primary-600 hover:underline ">Signup here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;