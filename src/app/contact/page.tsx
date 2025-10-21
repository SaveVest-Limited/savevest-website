"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-blue-600 py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Contact Us
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Have questions or need support? We're here to help. Get in touch with our team and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Get in Touch
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <FaEnvelope className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">support@savevesting.com</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <FaPhone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+234 (0) 123 456 7890</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <FaMapMarkerAlt className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                            <p className="text-gray-600">
                                123 Financial District<br />
                                Lagos, Nigeria
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl mt-16 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;