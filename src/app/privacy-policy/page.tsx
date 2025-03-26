const PrivacyPolicy = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <section className="py-24">
                    <div className="text-center">
                        <div>
                            <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">privacy policy</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">Privacy Policy for Savevest Limited.</h2>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-8 py-10 rounded-md bg-gray-50 border border-gray-200">
                    <p className="text-gray-700 text-md">Effective Date: 1st of January 2025</p>
                    <p className="text-gray-700 text-md mt-6">Welcome to SaveVest Limited (“SaveVest”, “we”, “our”, “us”). Your privacy and trust are important to us, and we are committed to protecting your data while providing secure, seamless, and efficient savings services. This Privacy Policy outlines the procedures, benefits, disclaimers, and details of our services, including Ajo (Thrift Savings), Target Savings, Group Target Savings, and Wallet features. Additionally, it explains your rights, including how to delete your account.</p>

                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">1. Information We Collect</h3>
                            <h4 className="text-md md:text-lg font-medium mb-2">Personal Data:</h4>
                            <p className="text-gray-700 text-sm md:text-base mb-4">We collect the following types of personal data:</p>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Date of birth</li>
                                <li>Bank verification number (BVN)</li>
                                <li>Payment and transaction details</li>
                                <li>Savings preferences</li>
                            </ul>
                            
                            <h4 className="text-md md:text-lg font-medium mb-2">Usage Data:</h4>
                            <p className="text-gray-700 text-sm md:text-base mb-4">We collect information on how you interact with our app, including device information, IP address, and usage analytics.</p>
                            
                            
                            <h4 className="text-md md:text-lg font-medium mb-2"> Cookies and Tracking:</h4>
                            <p className="text-gray-700 text-sm md:text-base mb-4">Our app uses cookies and similar technologies to improve user experience.</p>

                           
                            
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">2. How We Use Your Information</h3>
                            <p className="text-gray-700 text-sm md:text-base mb-4">We use your information to:</p>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Create and manage your account.</li>
                                <li>Facilitate savings plans and transactions.</li>
                                <li>Ensure compliance with legal and regulatory requirements.</li>
                                <li>Improve app functionality and customer support.</li>
                                <li>Communicate updates, promotional offers, and important notifications.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">3. Breakdown of Savings Services</h3>
                            <h4 className="text-md md:text-lg font-medium mb-2">Ajo (Thrift Savings):</h4>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Procedure: Participants join a savings group and contribute a fixed amount at agreed intervals. Members take turns receiving the pooled funds.</li>
                                <li>Benefits: Encourages discipline and provides access to lump sums for personal or business needs.</li>
                                <li>Disclaimers: Participation is subject to group agreements, and payouts depend on adherence to contribution schedules.</li>
                                <li>Operational Value: Minimum contribution is <span className="font-semibold">₦10,000.00</span>; payouts rotate based on agreed terms.</li>
                                <li>
                                    Do&apos;s and Don&apos;ts:
                                    <ul className="list-disc pl-6">
                                        <li>Do: Commit to your savings schedule.</li>
                                        <li>Don&apos;t: Default on contributions to avoid penalties or exclusion.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4 className="text-md md:text-lg font-medium mb-2">Target Savings:</h4>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Procedure: Users set a financial goal, specify a duration, and make periodic contributions.</li>
                                <li>Benefits: Helps users save toward specific goals with potential interest accrual.</li>
                                <li>Disclaimers: Early withdrawal may incur penalties or affect interest rates.</li>
                                <li>Operational Value: The minimum savings threshold is <span className="font-semibold">₦1000</span>; interest rates are 2.5% per annum.</li>
                                <li>
                                    Do&apos;s and Don&apos;ts:
                                    <ul className="list-disc pl-6">
                                        <li>Do: Stay consistent with your contributions.</li>
                                        <li>Don&apos;t:  Withdraw prematurely unless necessary.</li>
                                    </ul>
                                </li>
                            </ul>
                            
                            
                            <h4 className="text-md md:text-lg font-medium mb-2">Group Target Savings:</h4>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Procedure: Multiple users collaborate to save toward a common goal.</li>
                                <li>Benefits: Fosters teamwork and shared financial discipline.</li>
                                <li>Disclaimers: Group withdrawals require unanimous consent or adherence to group rules.</li>
                                <li>Operational Value: Minimum group contribution is <span className="font-semibold">₦10,000</span>.</li>
                                <li>
                                    Do&apos;s and Don&apos;ts:
                                    <ul className="list-disc pl-6">
                                        <li>Do: Engage in transparent communication with group members.</li>
                                        <li>Don&apos;t:  Misuse group funds or fail to honor commitments.</li>
                                    </ul>
                                </li>
                            </ul>



                            <h4 className="text-md md:text-lg font-medium mb-2">Wallet Features:</h4>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Procedure: Users can store, transfer, and withdraw funds via the in-app wallet.</li>
                                <li>Benefits: Provides secure, quick, and flexible financial transactions.</li>
                                <li> Disclaimers: Wallet funds are non-interest-bearing.</li>
                                <li>Operational Value: Minimum wallet balance is <span className="font-semibold">₦1,000</span>.</li>
                                <li>
                                    Do&apos;s and Don&apos;ts:
                                    <ul className="list-disc pl-6">
                                        <li>Do: Use wallet features responsibly.</li>
                                        <li>Don&apos;t:  Share wallet credentials with unauthorized persons.</li>
                                    </ul>
                                </li>
                            </ul>
                            
                            
    
                            
                            
                            
                            
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">4. Account Deletion</h3>
                            <h4 className="text-md md:text-lg font-medium mb-2">Steps to Delete Your Account:</h4>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Log into the SaveVest mobile app.</li>
                                <li>Navigate to the “Settings” section.</li>
                                <li>Select “Account Management.”</li>
                                <li>Click “Delete Account” and follow the prompts.</li>
                                <li>Confirm your request via email or OTP verification.</li>
                            </ul>
                            
                            

                            <h4 className="text-md md:text-lg font-medium mb-2">Upon account deletion:</h4>
                            <p className="text-gray-700 text-sm md:text-base mb-4">We collect information on how you interact with our app, including device information, IP address, and usage analytics.</p>

                            <ul className="text-gray-700 mb-4 list-disc pl-6">
                                <li>Your data will be removed from our system within 30 days, except as required by legal or regulatory obligations.</li>
                                <li>Outstanding savings balances must be resolved before account deletion.</li>
                            </ul>

                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">5. Security Measures</h3>
                            <p className="text-gray-700 text-sm md:text-base mb-4">We implement advanced encryption, secure servers, and authentication protocols to protect your data. However, no system is 100% foolproof; users are encouraged to safeguard their login credentials.</p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">6. Updates to the Privacy Policy</h3>
                            <p className="text-gray-700 text-sm md:text-base mb-4">We may update this policy periodically. Changes will be communicated via in-app notifications or email. Continued use of our services after updates indicates acceptance of the revised policy.</p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">7. Contact Us</h3>
                            <p className="text-gray-700 text-sm md:text-base mb-4">If you have questions or concerns about this Privacy Policy, contact us at:</p>

                            <ul className="text-gray-700 mb-4 pl-6">
                                <li className="font-semibold">SaveVest Limited.</li>
                                <li><span className="font-semibold">Address:</span> 2a, Lateef Jakande Road, Agidingbi, Ikeja, Lagos State.</li>
                                <li><span className="font-semibold">Email:</span> <a className='text-blue-500 underline' href="mailto:support@savevesting.com">support@savevesting.com</a>, <a className='text-blue-500 underline' href="mailto:savevestsavers@gmail.com">savevestsavers@gmail.com</a></li>
                                <li><span className="font-semibold">Phone:</span> +234(0)703-149-4931</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <hr className="my-8 text-gray-300" />
                            <h4 className="font-semibold text-sm md:text-base">Thank you for choosing SaveVest. Together, let’s achieve your financial goals!</h4>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy;