"use client";

import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { FaExclamationTriangle } from 'react-icons/fa';

const DeleteAccount = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        reason: '',
        confirmation: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle account deletion logic here
        console.log('Account deletion requested:', formData);
    };

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-[#121412] px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Fade direction="up">
                        <h1 className="text-white text-3xl md:text-4xl font-medium leading-tight">
                            Delete Your Account
                        </h1>
                        <p className="mt-4 text-slate-200 text-sm md:text-base">
                            We&apos;re sorry to see you go. Please note that this action cannot be undone and all your data will be permanently deleted.
                        </p>
                    </Fade>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                        <div className="flex items-center">
                            <FaExclamationTriangle className="text-red-400 mr-3" />
                            <p className="text-red-700">
                                Warning: This action is permanent and irreversible
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Confirm your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 focus:border-[#28166F] focus:outline-none focus:ring-1 focus:ring-[#28166F]"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Confirm your password
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                className="mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 focus:border-[#28166F] focus:outline-none focus:ring-1 focus:ring-[#28166F]"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>

                        <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                                Why are you deleting your account?
                            </label>
                            <select
                                id="reason"
                                required
                                className="mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 focus:border-[#28166F] focus:outline-none focus:ring-1 focus:ring-[#28166F]"
                                value={formData.reason}
                                onChange={(e) => setFormData({...formData, reason: e.target.value})}
                            >
                                <option value="">Select a reason</option>
                                <option value="not-useful">Not finding it useful</option>
                                <option value="different-service">Using a different service</option>
                                <option value="too-expensive">Too expensive</option>
                                <option value="privacy">Privacy concerns</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="confirmation"
                                required
                                className="h-4 w-4 rounded border-gray-300 text-[#28166F] focus:ring-[#28166F]"
                                checked={formData.confirmation}
                                onChange={(e) => setFormData({...formData, confirmation: e.target.checked})}
                            />
                            <label htmlFor="confirmation" className="ml-2 block text-sm text-gray-700">
                                I understand that this action is permanent and cannot be undone
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white px-4 py-3 rounded-sm font-medium hover:bg-red-700 transition duration-300"
                        >
                            Permanently Delete Account
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default DeleteAccount;
