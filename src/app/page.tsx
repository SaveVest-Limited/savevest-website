import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Wallet,
  PiggyBank
} from 'lucide-react'

export default function Home() {
  const offerings = [
    {
      // icon: <TrendingUp className="text-blue-500" size={48} />,
      title: "Financial Advisory Services",
      description: "If you feel overwhelmed and you don’t know where to start, we offer free advisory services to help you navigate the investment space. You can also subscribe to our blog on savings & investments.",
      image: "/images/save-image1.jpg"
    },
    {
      // icon: <Wallet className="text-blue-500" size={48} />,
      title: "Investment Services",
      description: "Our personalized investment service offers tailored solutions to meet your unique goals and preferences. Our experienced team works closely with you to create a strategic investment portfolio that aligns with your financial situation and risk tolerance.",
      image: "/images/save-image2.jpg"
    },
    {
      // icon: <PiggyBank className="text-blue-500" size={48} />,
      title: "Savings",
      description: "Your temptations stand no chance. This plan allows you to automate saving money daily, weekly, or monthly. Suitable for regular income earners, traders, freelancers, and students. The system encourages you by rewarding diligent savers.",
      image: "/images/save-image3.jpg"
    }
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-section rounded-[30px] mt-6 pt-8 px-10 items-center grid grid-cols-1 md:grid-cols-2">
          <div className="pl-2 md:pl-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">Welcome to Savevest.</h1>
            <p className="mt-4 text-slate-200 text-sm md:text-base">
              SaveVest is an online “Savings & Investment platform” that enables you to Save regularly and earn interest on your savings. We also encourage short and long term investments. Our customers can testify to our efficient and reliable way of transacting business.
            </p>

            <button className="flex items-center space-x-3 text-white bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-2.5 mt-4 cursor-pointer">
              <span>Get the app</span>
              <ChevronRight />
            </button>
          </div>
          <div>
            <img src="/images/mockup-img.png" alt="mockup img" />
          </div>
        </div>
      </section>

      <section className="section-about py-16 px-4 container mx-auto">
        <div className="text-center">
          <div>
            <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">about savevest</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">What Savevest Offers</h2>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl flex flex-col"
              >
                <div className="p-6 flex-grow">
                  {/* <div className="mb-4">
                  {offering.icon}
                </div> */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {offering.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-[200px] object-cover hover:scale[1.05] duration-200 rounded-b-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white border border-gray-100 rounded-xl overflow-hidden mt-8">
            {/* Content Section */}
            <div className="p-8 md:pr-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Transforming Financial Futures
                </h2>
                <p className="text-gray-600 mb-6">
                  Our innovative approach combines cutting-edge technology with
                  personalized financial strategies to help you achieve your
                  long-term financial goals.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm md:text-base text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Personalized Financial Planning
                  </li>
                  <li className="flex items-center text-sm md:text-base text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Advanced Investment Strategies
                  </li>
                  <li className="flex items-center text-sm md:text-base text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Comprehensive Wealth Management
                  </li>
                </ul>
                <button className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div>
              <div className="w-full h-[220px] md:h-[400px]">
                <img
                  src="/images/save-image4.jpg"
                  alt="Financial Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Why Choose Us Section */}
      {/* <section className="section-why-us bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Award-Winning Excellence
              </h3>
              <p className="text-gray-600">
                Recognized for outstanding performance and innovative solutions
                across multiple industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Globe className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Serving clients worldwide with localized expertise and
                international perspective.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-testimonials"></section>

      <section className="section-contact"></section>
    </div>
  );
}
