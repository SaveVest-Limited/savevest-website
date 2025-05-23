import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { name: "About", href: "/about" },
        { name: "Privacy", href: "/privacy-policy" },
        { name: "Terms", href: "/terms" },
        { name: "Contact", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "https://facebook.com/savevesters" },
        { icon: <Twitter size={20} />, href: "https://twitter.com/savevesters" },
        { icon: <Instagram size={20} />, href: "https://instagram.com/savevesters" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/savevesters" },
    ];

    return (
        <footer className="relative border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center space-y-8">
                    {/* Logo */}
                    <img src="/images/logo.png" alt="SaveVest" className="w-[130px]" />
                    
                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-purple-600 transition-colors text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-600 transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                        © {currentYear} SaveVest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;