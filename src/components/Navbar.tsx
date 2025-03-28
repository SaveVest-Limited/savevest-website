"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const closeBar = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            setIsScrolled(scrollPosition > viewportHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`
            ${isScrolled
                ? 'fixed top-0 left-0 right-0 bg-black shadow-sm z-50 animate-slide-down'
                : 'bg-white'
            } transition-all duration-300`
        }>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between py-5">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <div className="flex items-center cursor-pointer">
                                <img src="/images/logo.png" alt='logo' className="w-[130px]" />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - Center */}
                    <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
                        <div className="flex space-x-8">
                            <Link href="/">
                                <span className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium cursor-pointer`}>
                                    Home
                                </span>
                            </Link>
                            <Link href="/about">
                                <span className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium cursor-pointer`}>
                                    Stories
                                </span>
                            </Link>
                            <Link href="/services">
                                <span className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium cursor-pointer`}>
                                    FAQs
                                </span>
                            </Link>
                            <Link href="/contact">
                                <span className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium cursor-pointer`}>
                                    Calculator
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Sign Up Button - Right */}
                    <div className="hidden md:flex space-x-2 items-center">
                        <Link href="/signup">
                            <span className={`${isScrolled ? 'bg-white text-black hover:bg-gray-200' : 'bg-transparent text-black'} border border-gray-300 px-4 py-3 text-sm font-medium cursor-pointer transition duration-300`}>
                                Sign in
                            </span>
                        </Link>

                        <Link href="/signup">
                            <span className={`${isScrolled ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-400 text-black'} border border-blue-400 px-4 py-3 text-sm font-medium cursor-pointer transition duration-300`}>
                                Create free account
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-white hover:text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'} focus:outline-none`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isScrolled ? 'bg-black' : ''}`}>
                        <Link href="/" onClick={closeBar}>
                            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-white hover:text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} cursor-pointer`}>
                                Home
                            </span>
                        </Link>
                        <Link href="/about" onClick={closeBar}>
                            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-white hover:text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} cursor-pointer`}>
                                About
                            </span>
                        </Link>
                        <Link href="/services" onClick={closeBar}>
                            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-white hover:text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} cursor-pointer`}>
                                Services
                            </span>
                        </Link>
                        <Link href="/contact" onClick={closeBar}>
                            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-white hover:text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} cursor-pointer`}>
                                Contact
                            </span>
                        </Link>
                        <Link href="/signup" onClick={closeBar}>
                            <span className={`mt-4 inline-block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'bg-white text-black hover:bg-gray-200' : 'text-white bg-blue-600 hover:bg-blue-700'} cursor-pointer`}>
                                Sign Up
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;