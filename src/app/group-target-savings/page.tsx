"use client";

import { FaUsers, FaLock, FaChartLine } from 'react-icons/fa';
import { MdGroups, MdSavings } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";

const GroupTargetSavings = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#121412] px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Fade direction="up">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                                Save Together, <br />
                                Achieve More with <br />
                                <span className="text-blue-500 font-semibold">Group Savings</span>
                            </h1>
                        </Fade>
                        <Fade direction="up">
                            <p className="mt-6 text-slate-200 text-sm md:text-base leading-relaxed">
                                Join forces with friends, family, or colleagues to reach your financial goals faster. Our group target savings feature makes it easy to save collectively while maintaining transparency and trust.
                            </p>
                        </Fade>
                    </div>
                    <div className="relative h-[300px] md:h-[400px]">
                        <img 
                            src="/images/group-savings.jpg" 
                            alt="Group Savings" 
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <Fade direction="up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Why Choose Group Target Savings?</h2>
                            <p className="mt-4 text-lg text-gray-600">Experience the power of collective saving with features designed for group success</p>
                        </div>
                    </Fade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Fade direction="up" cascade>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <FaUsers className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Group Management</h3>
                                <p className="text-gray-600">Easily create and manage savings groups with built-in tools for tracking contributions and progress.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <FaLock className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Transactions</h3>
                                <p className="text-gray-600">Bank-grade security ensures all group contributions are protected and properly tracked.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <FaChartLine className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                                <p className="text-gray-600">Monitor your group's savings progress with real-time updates and detailed analytics.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-[#28166F] rounded-lg px-6 py-12 md:py-16 text-center">
                    <Fade direction="up">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Ready to start saving as a group?
                        </h2>
                        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                            Join thousands of groups already saving together on Savevest. Create your group target savings account today and start working towards your collective goals.
                        </p>
                        <button className="bg-white text-[#28166F] px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition duration-300">
                            Start Saving Together
                        </button>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default GroupTargetSavings;
