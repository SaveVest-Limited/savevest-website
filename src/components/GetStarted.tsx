import Link from 'next/link'

const GetStarted = () => {
    return (
        <section className="bg-[#0F0F0F] py-16 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center px-4">
                <div>
                    <h1 className="text-3xl md:text-6xl font-semibold leading-snug text-white my-6">Get Started <br /> With Just A Click!</h1>
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
    )
}

export default GetStarted;