import GetStarted from "@/components/GetStarted";
const Services = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4">
                <section className="py-24">
                    <div className="text-center">
                        <div>
                            <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">services</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">What We Do</h2>
                    </div>

                    <div className="space-y-12 mt-16 md:mt-28 lg:mt-36">
                        {/* Service 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl lg:text-4xl font-semibold mb-6">Financial Advisory Services</h3>
                                
                                <div className="space-y-6 w-full md:w-[85%]">
                                    <p className="text-gray-600 text-sm md:text-base">If you feel overwhelmed and you don’t know where to start, we offer free advisory services to help you navigate the investment space. You can also subscribe to our blog on savings & investments.</p>
                                    <p className="text-gray-600 text-sm md:text-base">We partner with the top investment firms to bring a wide array of Nigerian mutual funds to you. These funds are professionally managed and present you with the perfect option to diversify.</p>
                                </div>
                                
                                <button className="mt-6 text-white bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-2.5 cursor-pointer">
                                    Sign up
                                </button>
                            </div>
                            {/* Image */}
                            <div className="md:w-1/2">
                                <img
                                    src="/images/save-image1.jpg"
                                    alt="Service 1"
                                    className="w-full h-[400px] object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-start gap-6 relative">
                            {/* Content */}
                            <div className="md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl lg:text-4xl font-semibold mb-6">Investment Services</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl mb-3">Mergers & Acquisitions</h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            We assist companies with mergers and acquisitions. Our team analyzes market trends, finances, and operations to identify opportunities and provide support from due diligence to post-merger integration, using our industry expertise and contacts to give our clients an advantage.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl mb-3">Financial Crisis</h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            We provide top-notch financial crisis management services that cater to your needs. Our highly knowledgeable team offers practical recommendations and tailored strategies to help you overcome any financial challenge. Contact us today to learn more.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl mb-3">Individual Investment Services</h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            Our personalized investment service offers tailored solutions to meet your unique goals and preferences. Our experienced team works closely with you to create a strategic investment portfolio that aligns with your financial situation and risk tolerance. We offer a range of investment options, including stocks, bonds, mutual funds, and ETFs. Our process involves careful research and ongoing monitoring to make adjustments as needed. Trust us to provide effective investment solutions for a secure financial future.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl mb-3">
                                            Corporate & Partnership Investment Services
                                        </h3>

                                        <p className="text-gray-600 text-sm md:text-base mb-4">Corporate Partnership Investment Services offers tailored investment solutions for businesses, including stocks, bonds, mutual funds, ETFs, and alternatives. Our team provides ongoing monitoring and reporting for improved investment performance. Exceptional customer service and relationship-building are our priorities in helping you reach your financial objectives. Contact us for more information.</p>
                                        <p className="text-gray-600 text-sm md:text-base mb-4">Our Investment Account enables you to set aside either a lump sum amount or periodic contributions over time for long-term savings and investment.</p>
                                        <p className="text-gray-600 text-sm md:text-base mb-4">We take things a step further by helping you earn interest on your interest, and not just your invested funds.</p>
                                    </div>
                                    
                                   
                                   <div>
                                        <h3 className="text-xl mb-3">
                                            Benefits
                                        </h3>

                                        <ul className="mt-2 list-disc list-inside text-gray-700">
                                            <li>Easy entry and exit of investment</li>
                                            <li>Available in both Naira and Dollar denominations</li>
                                            <li>Funds are professionally managed to generate returns</li>
                                            <li>Funds can be accessed within 24 Hours at no cost and penalty at maturity</li>
                                            <li>Funds will be availed directly to the Beneficiary to prevent the diversion of funds</li>
                                        </ul>
                                   </div>

                                   <div>
                                        <button className="mt-6 text-white bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-2.5 cursor-pointer">
                                           Start Investing
                                        </button>
                                   </div>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="md:w-1/2 sticky top-2">
                                <img
                                    src="/images/save-image2.jpg"
                                    alt="Service 2"
                                    className="w-full h-[400px] object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex flex-col md:flex-row items-start gap-6 relative">
                            {/* Content */}
                            <div className="md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl lg:text-4xl font-semibold mb-6">Savings</h3>

                                <div className="space-y-6">
                                    <h3 className="text-xl mb-3">Our Savings Plan</h3>

                                    <p className="text-gray-600 text-sm md:text-base">
                                        REGULAR SAVINGS: Your temptations stand no chance. This plan allows you to automate saving money daily, weekly, or monthly. Suitable for regular income earners, traders, freelancers, and students. The system encourages you by rewarding diligent savers. You can decide to withdraw your savings plus interest at the end of 12 months or continue with your savings.
                                    </p>

                                    <p className="text-gray-600 text-sm md:text-base">You can however withdraw up to 25% of your savings on any of our Free Withdrawal days without being charged (Jan 2, April 2, July 2, and Oct 2). Withdrawal on any other day attracts 5% of the amount withdrawn.</p>
                                    <p className="text-gray-600 text-sm md:text-base">TARGET SAVINGS: This plan allows you to meet your savings goals. We help you save for future events in your life such as your House rent, buying a property, children’s education, getting your dream car, savings towards a vacation, accumulating capital for your business or just providing the means to buy what you have always dreamed of. Kickstart a long-term periodic saving commitment to a goal you want to achieve, and we make it happen. Suitable for regular income earners, professionals, businessmen, and women.</p>
                                    <p className="text-gray-600 text-sm md:text-base">FUTURE SAVINGS: Prepare for a happy retirement through a financial plan that is convenient for you and meets your future financial plans. Just start to save and prepare financially for your happy retirement. The Savings Plan gives you peace of mind about future expenses. And if something happens to you and you can&quot;t earn the fund saved, your beneficiary will be contacted based on your record with us.</p>
                                    <h3 className="text-xl mb-3">Get on the right side of Savings Today!</h3>
                                    <p className="text-gray-600 text-sm md:text-base">Saving can be much more than just storing money. Automate your savings and earn up to 5% interest per annum. No penalties. No fees. Absolutely free.</p>
                                    <div>
                                        <button className="mt-6 text-white bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-2.5 cursor-pointer">
                                            Start Investing
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            {/* Image */}
                            <div className="md:w-1/2 sticky top-2">
                                <img
                                    src="/images/save-image3.jpg"
                                    alt="Service 3"
                                    className="w-full h-[450px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <GetStarted />
        </div>
    )
}

export default Services;