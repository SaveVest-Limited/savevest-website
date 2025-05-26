"use client"

import { useState } from 'react'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

const SavingsCalculator = () => {
    const [targetAmount, setTargetAmount] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const [frequency, setFrequency] = useState('monthly')
    const [showResult, setShowResult] = useState(false)
    const [calculationResult, setCalculationResult] = useState({
        periodicSaving: 0,
        totalInterest: 0
    })

    const calculateSavings = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Convert amounts to numbers
        const goal = parseFloat(targetAmount)
        const today = new Date()
        const endDate = new Date(targetDate)
        const monthsDiff = (endDate.getFullYear() - today.getFullYear()) * 12 + (endDate.getMonth() - today.getMonth())
        
        // Simple interest rate (example: 5% annually)
        const annualInterestRate = 0.05
        
        // Calculate periodic savings needed (simplified calculation)
        let periodsPerYear
        switch(frequency) {
            case 'daily': periodsPerYear = 365; break;
            case 'weekly': periodsPerYear = 52; break;
            default: periodsPerYear = 12;
        }
        
        const totalPeriods = (monthsDiff / 12) * periodsPerYear
        const totalInterest = goal * annualInterestRate * (monthsDiff / 12)
        const periodicSaving = (goal - totalInterest) / totalPeriods

        setCalculationResult({
            periodicSaving: parseFloat(periodicSaving.toFixed(2)),
            totalInterest: parseFloat(totalInterest.toFixed(2))
        })
        setShowResult(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl left-[-10%] top-[-10%]" />
                <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl right-[-8%] top-1/3 animate-pulse" />
                <div className="absolute w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl left-1/4 bottom-[-8%] animate-bounce" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto py-24 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
                            <span className="text-blue-400 text-sm font-medium">Savings Calculator</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
                            See how much you need to save to reach your goals
                        </h1>
                        <p className="text-lg text-gray-300 mb-10 max-w-lg">
                            Plan your financial future with our savings calculator. Set your target, choose your timeline, and we'll help you figure out the perfect saving schedule.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 bg-black/80 hover:bg-black text-white px-7 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base">
                                <FaApple className="text-xl" />
                                App Store
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-black/80 hover:bg-black text-white px-7 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base">
                                <FaGooglePlay className="text-xl" />
                                Play Store
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
                        {!showResult ? (
                            <form onSubmit={calculateSavings}>
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            How much do you want to save? ₦
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={Number(targetAmount).toLocaleString()}
                                            onChange={(e) => setTargetAmount(e.target.value.replace(/,/g, ''))}
                                            className="w-full px-5 py-4 rounded-full bg-white/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md text-base"
                                            placeholder="Enter amount"
                                            onKeyPress={(e) => {
                                                if (!/[0-9]/.test(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            By when do you want to save this?
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={targetDate}
                                            onChange={(e) => setTargetDate(e.target.value)}
                                            className="w-full px-5 py-4 rounded-full bg-white/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            How often do you want to save?
                                        </label>
                                        <select
                                            value={frequency}
                                            onChange={(e) => setFrequency(e.target.value)}
                                            className="w-full px-5 py-4 rounded-full bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md text-base"
                                        >
                                            <option value="daily">Daily</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base tracking-wide border-0 outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        Calculate
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-white mb-6">Your Savings Plan</h3>
                                <div className="bg-white/10 border border-white/20 rounded-2xl p-8 mb-6 inline-block">
                                    <p className="text-lg text-gray-200 mb-4">
                                        To save ₦{parseInt(targetAmount).toLocaleString()} by{' '}
                                        <span className="text-blue-300 font-semibold">{new Date(targetDate).toLocaleDateString()}</span>, you need to save:
                                    </p>
                                    <p className="text-4xl font-bold text-blue-400 mb-4">
                                        ₦{calculationResult.periodicSaving.toLocaleString()} <span className="text-base font-medium text-white">{frequency}</span>
                                    </p>
                                    <p className="text-gray-300">
                                        You'll earn approximately <span className="text-green-400 font-semibold">₦{calculationResult.totalInterest.toLocaleString()}</span> in interest
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowResult(false)}
                                    className="mt-8 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                                >
                                    Calculate Again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavingsCalculator;
