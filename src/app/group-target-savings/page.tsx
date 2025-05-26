"use client";

import { FaUsers, FaLock, FaChartLine } from 'react-icons/fa';

const GroupTargetSavings = () => {
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
                                    Group Savings
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                                    Save Together,
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Achieve More
                                </span>
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                                Join forces with friends, family, or colleagues to reach your financial goals faster. Our group target savings feature makes it easy to save collectively while maintaining transparency and trust.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    Start Group Savings
                                </button>
                                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                                <img
                                    src="/images/group-savings.jpg"
                                    alt="Group Savings"
                                    className="w-full h-[400px] object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
                {/* Background texture */}
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
                
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
                            <span className="text-purple-400 text-sm font-medium">
                                Why Choose Group Target Savings
                            </span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                            Features Designed for Groups
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Experience the power of collective saving with tools built for group success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaUsers className="h-6 w-6" />,
                                title: "Group Management",
                                description: "Easily create and manage savings groups with built-in tools for tracking contributions and progress.",
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                icon: <FaLock className="h-6 w-6" />,
                                title: "Secure Transactions",
                                description: "Bank-grade security ensures all group contributions are protected and properly tracked.",
                                gradient: "from-purple-500 to-pink-500",
                            },
                            {
                                icon: <FaChartLine className="h-6 w-6" />,
                                title: "Progress Tracking",
                                description: "Monitor your group's savings progress with real-time updates and detailed analytics.",
                                gradient: "from-green-500 to-emerald-500",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/20 transition-all duration-500"
                            >
                                <div
                                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
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
                                Start Saving as a Group Today
                            </h2>
                            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                                Join thousands of groups already saving together on Savevest. Create your group target savings account today and start working towards your collective goals.
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

export default GroupTargetSavings;
