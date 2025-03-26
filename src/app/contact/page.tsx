"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        description: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Form submission logic
        console.log(formData);
    };

    const socialLinks = [
        { icon: Facebook, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
        { icon: Twitter, url: '#' },
        // { icon: WhatsApp, url: '#' }
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center">
                    <div>
                        <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">contact us</p>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">Reach Out To Us</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 p-6 mt-16 md:mt-28 lg:mt-36">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6" />
                                    <span>+234(0)703-149-4931</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="w-6 h-6" />
                                    <span>support@savevestsavers.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin className="w-6 h-6" />
                                    <span>2a, Lateef Jakande Road, Adigidgbi, Ikeja, Lagos State</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-8">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="hover:bg-white/20 p-2 rounded-full transition-colors"
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />

                                <select
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="">Select Enquiry Type</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="suggestions">Suggestions</option>
                                    <option value="visitation">Visitation</option>
                                </select>

                                <textarea
                                    name="description"
                                    placeholder="Your Message"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                    className="resize-none w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export default Contact;