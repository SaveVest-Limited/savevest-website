const FAQs = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <section className="py-24">
                    <div className="text-center">
                        <div>
                            <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">faqs</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">Frequently Asked Questions.</h2>

                        <form>
                            <div className="mt-10">
                                <input type="search" placeholder="Search for a question..." className="w-full md:w-1/2 mx-auto px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                            </div>
                        </form>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-8 py-10 rounded-md bg-gray-50 border border-gray-200">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">General</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-md md:text-lg font-medium mb-2">Why SaveVest?</h4>
                                    <p className="text-gray-700 text-sm md:text-base mb-4">Savevest helps make saving and investing seamless. SaveVest takes away the stress and planning required to save and invest on a regular basis through its automated and easy-to-use platform. Your savings also generate interest, up to 5% per annum, till a set maturity date.</p>
                                </div>

                                <div>
                                    <h4 className="text-md md:text-lg font-medium mb-2">Why should I save on SaveVest?</h4>
                                    <p className="text-gray-700 text-sm md:text-base mb-4">SaveVest is suitable for anyone who:</p>

                                    <ul className="text-gray-700 mb-4 list-disc pl-6">
                                        <li>never want to miss their saving and investment goals again.</li>
                                        <li>wants to save and invest even while they are asleep.</li>
                                        <li>wants the discipline to keep their savings and investments for a long period of time without tampering with them.</li>
                                        <li>wants to plan their financial goals with easy-to-use financial tools.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-md md:text-lg font-medium mb-2">How are you able to offer higher returns than traditional banks?</h4>
                                    <p className="text-gray-700 text-sm md:text-base mb-4">We do not have the high-cost base of traditional banks. Our operations are lean, driven by our proprietary technology. We invest in our customer’s funds in risk-free instruments offered by the Central Bank of Nigeria, Nigeria’s Debt Management Office (DMO), FGN Bond, and a few low-risk investment opportunities such as corporate bonds and high-quality commercial papers. These cost savings are passed to our customers in the form of higher returns.</p>
                                </div>

                                <div>
                                    <h4 className="text-md md:text-lg font-medium mb-2">What kind of debit cards can I use on SaveVest?</h4>
                                    <p className="text-gray-700 text-sm md:text-base mb-4">SaveVest accepts debit cards issued by all Nigerian banks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FAQs;