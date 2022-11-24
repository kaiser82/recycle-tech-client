import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }

    const menuItems =
        <>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/blogs'>Blogs</Link> </li>
            <li> <Link to='/'>About</Link> </li>
            {
                user?.uid ? <>
                    <li> <Link to='/dashboard'>Dashboard</Link> </li>
                    <li> <button onClick={handleLogOut}>Signout</button> </li>
                </>
                    : <li> <Link to='login'><button >Login</button></Link> </li>
            }
        </>
    return (
        <div className="navbar bg-violet-500 text-white lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-violet-500 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">RecycleTech</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL ?
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                        :
                        user?.email
                }
            </div>
        </div>
    );
};

export default NavBar;