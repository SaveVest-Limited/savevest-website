import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";

const About = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4">
                <section className="py-16">
                    <div className="text-center">
                        <div>
                            <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">about us</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">Our Story</h2>
                    </div>

                    <h3 className="text-gray-700 text-sm lg:text-lg mt-6 mb-8 text-center w-[98%] md:w-[55%] lg:w-[50%] mx-auto">SaveVest is a registered Cooperative under the Lagos State Government (LSCS 17111). All our transactions are done through the bank thereby giving a trace for all transactions.</h3>
                    <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden">
                        <img src='/images/about-img.jpg' alt="save-img" className="h-full w-full object-cover" />
                    </div>
                </section>

                <section className="section-about py-16">
                    <div className="grid grid-cols-1 md:grid-cols-[26rem_1fr] gap-4 w-full">
                        <div>
                            <div className="flex items-center space-x-3">
                                <h3 className="text-base md:text-xl text-gray-700">About us</h3>
                                <div className="w-[55px]">
                                    <hr className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-gray-500 text-2xl md:text-4xl pr-0 md:pr-10 leading-snug">SaveVest is run by finance and technology <span className="text-gray-800 font-medium">professionals with over 20 years</span> aggregate domain experience in fund management and investment banking.</h1>
                        </div>
                    </div>
                </section>
            </div>

            <ClientsSection />

            <section className="bg-[#0F0F0F] py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center">
                    <div>
                        <h1 className="text-2xl md:text-6xl font-semibold leading-snug text-white my-6">Get Started <br /> With Just A Click!</h1>
                    </div>
                    <div>
                        <p className="text-sm md:text-base text-gray-300 mb-6">We have the expertise to keep your Savings and Investments Secured. Click the button below to achieve your goals with our expert team’s help and easily access all the information needed for creating a better future.</p>
                        
                        <div className="flex space-x-3">
                            <Link href='/' className="flex items-center space-x-3 text-black bg-white rounded-full px-6 py-2.5 mt-4 cursor-pointer">
                                <span>Get started</span>
                            </Link>

                            <button className="flex items-center space-x-3 text-white bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-2.5 mt-4 cursor-pointer">
                                <span>Get the app</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;