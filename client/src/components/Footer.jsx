
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-full py-16" style={{ backgroundColor: '#27202F' }}>
            <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                    <div className="flex flex-col flex-shrink-0">
                        <div>ServEase</div>
                        <p className="text-sm leading-none mt-4" style={{ color: '#FFFFFF' }}>Copyright © 2024 ServEase</p>
                        <p className="text-sm leading-none mt-4" style={{ color: '#FFFFFF' }}>All rights reserved</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            <div className="w-8 h-8 flex-shrink-0 cursor-pointer rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-opacity-75" style={{ backgroundColor: '#3B5998' }}>
                                <BsFacebook color="#FFFFFF"/>
                            </div>
                            <div className="w-8 h-8 flex-shrink-0 cursor-pointer rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-opacity-75" style={{ backgroundColor: '#1DA1F2' }}>
                                <BsTwitter color="#FFFFFF"/>
                            </div>
                            <div className="w-8 h-8 flex-shrink-0 cursor-pointer rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-opacity-75" style={{ backgroundColor: '#C13584' }}>
                                <BsInstagram color="#FFFFFF"/>
                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-0 ml-8">
                        <h2 className="text-base font-semibold leading-4" style={{ color: '#FFC529' }}>Company</h2>
                        <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Your Everyday Meals</p>
                        <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Convi</p>
                        <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>About Us</p>
                        <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Contact us</p>
                        <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Testimonials</p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold leading-4" style={{ color: '#FFC529' }}>Support</h2>
                        <Link to="/">    
                            <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Home</p>
                        </Link>
                        <Link to="/providers">  
                            <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Tiffin Provider</p>
                        </Link>
                        <Link to="/registerProvider"> 
                            <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Provider SignUp</p>
                        </Link>
                        <Link to="/loginProvider">    
                            <p className="hover:text-gray-400 text-base leading-4 mt-6 cursor-pointer" style={{ color: '#FFFFFF' }}>Provider Login</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
