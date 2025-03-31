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
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            See how much you need to save to reach your goals
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Plan your financial future with our savings calculator. Set your target, choose your timeline, and we&apos;ll help you figure out the perfect saving schedule.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-sm">
                                <FaApple className="text-xl" />
                                App Store
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-sm">
                                <FaGooglePlay className="text-xl" />
                                Play Store
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {!showResult ? (
                            <form onSubmit={calculateSavings}>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            How much do you want to save? ₦
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={Number(targetAmount).toLocaleString()}
                                            onChange={(e) => setTargetAmount(e.target.value.replace(/,/g, ''))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter amount"
                                            onKeyPress={(e) => {
                                                if (!/[0-9]/.test(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            By when do you want to save this?
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={targetDate}
                                            onChange={(e) => setTargetDate(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            How often do you want to save?
                                        </label>
                                        <select
                                            value={frequency}
                                            onChange={(e) => setFrequency(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="daily">Daily</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-3 rounded-sm hover:bg-blue-600 transition duration-200"
                                    >
                                        Calculate
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Savings Plan</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    To save ₦{parseInt(targetAmount).toLocaleString()} by{' '}
                                    {new Date(targetDate).toLocaleDateString()}, you need to save:
                                </p>
                                <p className="text-3xl font-bold text-blue-500 mb-4">
                                    ₦{calculationResult.periodicSaving.toLocaleString()} {frequency}
                                </p>
                                <p className="text-gray-600">
                                    You&apos;ll earn approximately ₦{calculationResult.totalInterest.toLocaleString()} in interest
                                </p>
                                <button
                                    onClick={() => setShowResult(false)}
                                    className="mt-8 px-6 py-3 bg-gray-100 text-gray-700 rounded-sm hover:bg-gray-200 transition duration-200"
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
