import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: "About Us", href: "/about" },
        { name: "Stories", href: "/stories" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
    ];

    const productLinks = [
        { name: "Self Target Savings", href: "/self-target-savings" },
        { name: "Group Target Savings", href: "/group-target-savings" },
        { name: "Savings Calculator", href: "/savings-calculator" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookie-policy" },
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "https://facebook.com/savevesters", label: "Facebook" },
        { icon: <Twitter size={20} />, href: "https://twitter.com/savevesters", label: "Twitter" },
        { icon: <Instagram size={20} />, href: "https://instagram.com/savevesters", label: "Instagram" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/savevesters", label: "LinkedIn" },
    ];

    const contactInfo = [
        { icon: <Mail size={20} />, text: "support@savevest.com" },
        { icon: <Phone size={20} />, text: "+234 800 000 0000" },
        { icon: <MapPin size={20} />, text: "Lagos, Nigeria" },
    ];

    return (
        <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
            {/* Watermark background text */}
            <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0">
                <span
                    className="font-extrabold text-[16vw] md:text-[10vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] text-gray-200 uppercase tracking-widest"
                    style={{
                        lineHeight: 1,
                        letterSpacing: '0.1em',
                        opacity: 0.5,
                        whiteSpace: 'nowrap',
                        userSelect: 'none',
                    }}
                >
                    SAVEVEST
                </span>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                {/* Main Footer Content */}
                <div className="py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Image src="/images/logo.png" alt="SaveVest" className="w-[130px]" width={130} height={40} />
                        <p className="text-gray-600 text-base md:text-sm">
                            Empowering individuals and groups to achieve their financial goals through smart savings solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#28166F] transition-colors"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6 md:mb-4 text-lg md:text-base tracking-wide">Company</h3>
                        <ul className="space-y-4 md:space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-600 hover:text-[#28166F] transition-colors text-base md:text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6 md:mb-4 text-lg md:text-base tracking-wide">Products</h3>
                        <ul className="space-y-4 md:space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-600 hover:text-[#28166F] transition-colors text-base md:text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6 md:mb-4 text-lg md:text-base tracking-wide">Contact Us</h3>
                        <ul className="space-y-4 md:space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-center space-x-3 text-gray-600 text-base md:text-sm">
                                    <span className="text-[#28166F]">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 py-8 md:py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} SaveVest. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-gray-500 hover:text-[#28166F] transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Perfcreg Solutions Footer Note */}
            <div className="w-full bg-blue-600 py-3">
                <div className="text-center">
                    <p className="text-white text-sm">
                        Powered by{' '}
                        <a 
                            href="https://www.perfcreg.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-gray-800 transition-colors"
                        >
                            Perfcreg Solutions
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;