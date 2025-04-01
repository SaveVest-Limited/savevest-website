"use client";

import { FaUser, FaLock, FaChartLine } from 'react-icons/fa';
import { MdSavings } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";

const SelfTargetSavings = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#121412] px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Fade direction="up">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                                Set Your Goals, <br />
                                Save at Your Pace with <br />
                                <span className="text-blue-500 font-semibold">Personal Savings</span>
                            </h1>
                        </Fade>
                        <Fade direction="up">
                            <p className="mt-6 text-slate-200 text-sm md:text-base leading-relaxed">
                                Take control of your financial future with personalized savings targets. Our self-directed savings feature helps you build disciplined saving habits while earning competitive returns.
                            </p>
                        </Fade>
                    </div>
                    <div className="relative h-[300px] md:h-[400px]">
                        <img 
                            src="/images/self-savings.jpg" 
                            alt="Personal Savings" 
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
                            <h2 className="text-3xl font-bold text-gray-900">Why Choose Self Target Savings?</h2>
                            <p className="mt-4 text-lg text-gray-600">Customize your savings journey with features designed for personal success</p>
                        </div>
                    </Fade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Fade direction="up" cascade>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <FaUser className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Goals</h3>
                                <p className="text-gray-600">Set and adjust your savings targets based on your personal financial objectives and timeline.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <MdSavings className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Deposits</h3>
                                <p className="text-gray-600">Choose your preferred deposit frequency and amount with automated or manual savings options.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <FaChartLine className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Tracking</h3>
                                <p className="text-gray-600">Monitor your savings progress with detailed analytics and performance insights.</p>
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
                            Ready to start your savings journey?
                        </h2>
                        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                            Join thousands of individuals already growing their wealth with Savevest. Create your personal savings target today and take the first step towards financial freedom.
                        </p>
                        <button className="bg-white text-[#28166F] px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition duration-300">
                            Start Saving Now
                        </button>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default SelfTargetSavings;
