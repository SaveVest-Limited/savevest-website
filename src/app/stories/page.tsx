import { FaHeart } from "react-icons/fa";

const Stories = () => {
    return (
        <div className="min-h-screen">
            <section className="section-hero max-w-7xl mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl text-gray-800 font-semibold leading-14">Real experiences - see how <br className="hidden md:block" /> <span className="text-blue-500">Savevest</span> is changing lives</h1>
                        <p className="text-sm md:text-base text-gray-700 mt-4">Stories of happy customers using Savevest to improve <br className="hidden md:block" /> their financial lives.</p>

                        <div className="flex items-center space-x-3 mt-6">
                            <button className='px-4 py-3 bg-blue-500 text-sm cursor-pointer text-white rounded-sm'>Add your story</button>
                            <FaHeart className="w-8 h-8 animate-pulse text-red-600" />
                        </div>
                    </div>
                    <div>
                        <img src='/images/stories-hero.png' alt="images for stories page" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stories;