import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Investments", href: "/investments" },
        { name: "Contact", href: "/contact" }
    ];

    const legalLinks = [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Disclaimer", href: "/disclaimer" }
    ];

    const socialLinks = [
        { icon: <Facebook size={24} />, href: "https://facebook.com/savevest" },
        { icon: <Twitter size={24} />, href: "https://twitter.com/savevest" },
        { icon: <Instagram size={24} />, href: "https://instagram.com/savevest" },
        { icon: <Linkedin size={24} />, href: "https://linkedin.com/company/savevest" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        {/* <h3 className="text-2xl font-bold text-blue-500 mb-4">SaveVest</h3> */}
                        <img src='/images/logo.png' alt='logo' className='w-[130px] mb-4' />
                        <p className="text-gray-400 mb-4">
                            Empowering financial growth through innovative savings and investment solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-blue-500">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-500 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-blue-500">Legal</h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-500 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4 text-blue-500">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Mail size={20} className="text-blue-500" />
                                <span className="text-gray-400">hello@savevest.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone size={20} className="text-blue-500" />
                                <span className="text-gray-400">+234 (0) 123 456 7890</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin size={20} className="text-blue-500" />
                                <span className="text-gray-400">Lagos, Nigeria</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                    <p className="text-gray-500">
                        © {currentYear} SaveVest. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;