import {
  ChevronRight,
  Clock,
  CheckCircle,
  Calendar,
  DollarSign,
  HelpCircle,
  Target,
} from 'lucide-react'
import Testimonials from "../components/Testimonials"
import ClientsSection from '@/components/ClientsSection';

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

  const features = [
    {
      icon: <Clock className="text-blue-500 group-hover:text-white" size={48} />,
      title: "Always On Time",
      description: "We are quick to answer your questions and fulfill your requests concerning our services for saving and investing."
    },
    {
      icon: <CheckCircle className="text-blue-500 group-hover:text-white" size={48} />,
      title: "Hard Working",
      description: "We are arguably one of the most hard working savings and investments company there is, and our clientele can speak of the exquisite delivery of our services"
    },
    {
      icon: <Calendar className="text-blue-500 group-hover:text-white" size={48} />,
      title: "24/7 Availability",
      description: "Our services are available 24/7 round the clock digitally to meet your passive and urgent financial needs."
    },
    {
      icon: <DollarSign className="text-blue-500 group-hover:text-white" size={48} />,
      title: "Maximum Profitability",
      description: "We have put in the work to make your savings and investments yield profitable returns."
    },
    {
      icon: <HelpCircle className="text-blue-500 group-hover:text-white" size={48} />,
      title: "Classified Transactions",
      description: "Through our digital platform, we've ensured there is a smooth transition in managing your financial information."
    },
    {
      icon: <Target className="text-blue-500 group-hover:text-white" size={48} />,
      title: "Always Accurate",
      description: "The basis of our services stands on accuracy, with this we have set up the most reliable financial management system."
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

      <section className="section-about py-16 px-4 max-w-7xl mx-auto">
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
                <button className="flex items-center space-x-3 text-white bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-2.5 mt-4 cursor-pointer">
                  <span>Get started</span>
                  <ChevronRight />
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

      <ClientsSection />

      {/* Why Choose Us Section */}
      <section className="section-why-us bg-black text-white py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-4">
              <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">why choose us</p>
            </div>

            <h2 className="text-3xl lg:text-4xl font-semibold mb-3 text-white">We Should Work Together</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 text-center hover:bg-blue-500 group duration-200"
              >
                <div className="flex justify-center mb-4 group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-testimonials">
        <Testimonials />
      </section>

      <section className="section-contact"></section>
    </div>
  );
}
