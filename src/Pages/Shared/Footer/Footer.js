import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/footer.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-violet-600 text-white">
            <div className='lg:flex justify-center items-center lg:space-x-5'>
                <div className="avatar bg-violet-100">
                    <div className="w-16 rounded ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={logo} alt='' />
                    </div>
                </div>
                <div>
                    <p>RecycleTech Ltd.<br />Providing reliable tech since 2000</p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Sell Used Laptop</Link>
                <Link className="link link-hover">Buy Used Laptop</Link>
                <Link to='/blogs' className="link link-hover">Blogs</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;