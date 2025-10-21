"use client";

import { FaUser, FaChartLine } from 'react-icons/fa';
import { MdSavings } from 'react-icons/md';

const SelfTargetSavings = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />

            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-28">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                                <span className="text-blue-400 text-sm font-medium">
                                    Personal Savings
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                                Set Your Goals,
                                <br />
                                Save at Your Pace
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                                Take control of your financial future with personalized savings targets. Our self-directed savings feature helps you build disciplined saving habits while earning competitive returns.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                                    Start Saving Now
                                </button>
                                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                                <img
                                    src="/images/self-savings.jpg"
                                    alt="Personal Savings"
                                    className="w-full h-[400px] object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
                            <span className="text-blue-600 text-sm font-medium">
                                Why Choose Self Target Savings
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            Features Designed for Success
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            Customize your savings journey with tools built for personal financial growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                image: "/images/savings-plan.jpeg",
                                title: "Personalized Goals",
                                description:
                                    "Set and adjust your savings targets based on your personal financial objectives and timeline.",
                            },
                            {
                                image: "/images/wallet.jpeg",
                                title: "Flexible Deposits",
                                description:
                                    "Choose your preferred deposit frequency and amount with automated or manual savings options.",
                            },
                            {
                                image: "/images/bank-accounts.jpeg",
                                title: "Growth Tracking",
                                description:
                                    "Monitor your savings progress with detailed analytics and performance insights.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 hover:bg-blue-600 rounded-3xl px-8 transition-all duration-300 flex flex-col group cursor-pointer"
                                onClick={() => console.log(`Clicked on ${feature.title}`)}
                            >
                                <div className="pt-8">
                                    <h3 className="text-2xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="flex justify-center mt-auto">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full max-w-sm h-auto object-contain border-8 border-b-0 border-gray-900 rounded-t-4xl pointer-events-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-1">
                        <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-16 text-center border border-gray-700">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Start Your Savings Journey Today
                            </h2>
                            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                                Join thousands of individuals already growing their wealth with Savevest. Create your personal savings target today and take the first step towards financial freedom.
                            </p>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SelfTargetSavings;
