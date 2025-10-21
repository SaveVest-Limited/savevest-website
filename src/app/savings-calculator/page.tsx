"use client"

import { useState } from 'react'


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
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-blue-600 py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto md:text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Savings Calculator
            </h1>
            <p className="text-base text-white/90 max-w-2xl mx-auto">
              Plan your financial future with our savings calculator. Set your target, choose your timeline, and we&apos;ll help you figure out the perfect saving schedule.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-300 rounded-3xl p-10">
              {!showResult ? (
                <form onSubmit={calculateSavings}>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        How much do you want to save? ₦
                      </label>
                      <input
                        type="text"
                        required
                        value={Number(targetAmount).toLocaleString()}
                        onChange={(e) =>
                          setTargetAmount(e.target.value.replace(/,/g, ""))
                        }
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-base"
                        placeholder="Enter amount"
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        By when do you want to save this?
                      </label>
                      <input
                        type="date"
                        required
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        How often do you want to save?
                      </label>
                      <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-base"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-base"
                    >
                      Calculate
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Your Savings Plan
                  </h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-6">
                    <p className="text-lg text-gray-700 mb-4">
                      To save ₦{parseInt(targetAmount).toLocaleString()} by{" "}
                      <span className="text-blue-600 font-semibold">
                        {new Date(targetDate).toLocaleDateString()}
                      </span>
                      , you need to save:
                    </p>
                    <p className="text-4xl font-bold text-blue-600 mb-4">
                      ₦{calculationResult.periodicSaving.toLocaleString()}{" "}
                      <span className="text-base font-medium text-gray-900">
                        {frequency}
                      </span>
                    </p>
                    <p className="text-gray-700">
                      You&apos;ll earn approximately{" "}
                      <span className="text-green-600 font-semibold">
                        ₦{calculationResult.totalInterest.toLocaleString()}
                      </span>{" "}
                      in interest
                    </p>
                  </div>
                  <button
                    onClick={() => setShowResult(false)}
                    className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Calculate Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
}

export default SavingsCalculator;
