import {
  ChevronRight,
  Clock,
  CheckCircle,
  Calendar,
  DollarSign,
  HelpCircle,
  Target,
} from 'lucide-react'
// import Testimonials from "../components/Testimonials"
import Image from 'next/image';
import ClientsSection from '@/components/ClientsSection';
import { FaApple, FaAndroid, FaLock, FaWallet, FaUsers } from 'react-icons/fa'
import { Fade } from "react-awesome-reveal";
import { BiSolidBank } from "react-icons/bi";

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
      <section className="px-4 bg-[#121412] sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[30px] py-12 px-2 md:px-10 items-center grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Fade direction='up'>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-snug">Your Money.<br /> Your Future. <br /> <span className="text-blue-500 font-semibold">Start Saving</span> Today!</h1>
            </Fade>
            <Fade direction='up'>
              <p className="mt-4 text-slate-200 font-normal text-sm md:text-base w-[85%] leading-8">
                Flexible savings plans tailored for you. With Savevest, you earn high interest, automate your savings, and join thousands growing their wealth effortlessly.
              </p>
            </Fade>

            <Fade direction='up'>
              <div className="flex items-center space-x-3 mt-6">
                <a href="http://" target="_blank" className='bg-slate-200 hover:bg-blue-400 duration-200 px-4 py-3 flex space-x-2 text-black items-center'>
                  <FaApple className='w-6 h-6' />
                  <span className='text-sm font-medium'>Get on iPhone</span>
                </a>

                <a href="http://" target="_blank" className='bg-slate-200 hover:bg-blue-400 duration-200 px-4 py-3 flex space-x-2 text-black items-center'>
                  <FaAndroid className='w-6 h-6' />
                  <span className='text-sm font-medium'>Get on Android</span>
                </a>
              </div>
            </Fade>
          </div>
          <div className='relative h-[300px] md:h-[550px] w-full'>
            <img src="/images/save-hero.jpg" alt="mockup img" className='ml-auto w-full md:w-[90%] h-full object-cover object-left' />
          </div>
        </div>
      </section>

      <ClientsSection />

      <section className="section-about py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <div>
            <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">about savevest</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">What Savevest Offers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-16">
          <div>
            <h1 className='text-2xl md:text-4xl font-medium'>The <span className="font-semibold text-blue-500">Easiest</span> Way To <br /> Save Money</h1>
          </div>
          <div>
            <div className="space-y-5">
              <div className="bg-gray-50 hover:bg-blue-500 group duration-200 px-6 py-6 flex items-start space-x-5">
                <BiSolidBank className='w-12 h-12 text-gray-700 group-hover:text-white -mt-1' />
                <div>
                  <h1 className="text-lg md:text-xl text-gray-900 group-hover:text-white ">Save without thinking about it.</h1>
                  <p className="mt-3 text-gray-700 group-hover:text-white  text-sm md:text-base">Set it. Forget it. Whether it's daily, weekly, or monthly savings, you can save and just watch your wealth grow.</p>
                </div>
              </div>

              <div className="bg-gray-50 hover:bg-blue-500 group px-6 py-6 flex items-start space-x-5">
                <FaLock className='w-8 h-8 text-gray-700 group-hover:text-white  -mt-1' />
                <div>
                  <h1 className="text-lg md:text-xl text-gray-900 group-hover:text-white ">Your Money is Secure.</h1>
                  <p className="mt-3 text-gray-700 group-hover:text-white  text-sm md:text-base">Bank-level security, insured funds, and complete transparency - your savings are always protected.</p>
                </div>
              </div>

              <div className="bg-gray-50 hover:bg-blue-500 group px-6 py-6 flex items-start space-x-5">
                <FaWallet className='w-8 h-8 text-gray-700 group-hover:text-white  -mt-1' />
                <div>
                  <h1 className="text-lg md:text-xl text-gray-900 group-hover:text-white ">Withdraw Anytime. It's Your Money.</h1>
                  <p className="mt-3 text-gray-700 group-hover:text-white  text-sm md:text-base">Access your savings whenever you need them, or let them grow for even bigger rewards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl flex flex-col"
              >
                <div className="p-6 flex-grow">
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
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white border border-gray-100 rounded-xl overflow-hidden mt-8">
            
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

            
            <div>
              <div className="w-full h-[220px] md:h-[400px]">
                <img
                  src="/images/save-image4.jpg"
                  alt="Financial Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div> */}
        </div>

        <div className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex space-x-4 items-center">
                <div className="p-8 bg-gray-50 rounded-lg">
                  <FaUsers className='w-10 h-10 text-gray-800' />
                </div>

                <div className="content">
                <h1 className="text-lg md:text-2xl font-medium text-gray-800">Try our new <span className="text-blue-500 font-semibold">group savings.</span></h1>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700">Team up with friends, family, or colleagues to reach your financial goals. Join a savings challenge and stay motivated with shared progress and rewards.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      

      {/* Wallet Section */}
      <section className="section-why-us bg-[#EDF6F5] text-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-medium mb-3 text-black">Your Money, Always Within Reach</h2>
            <p className="text-sm md:text-base text-gray-700 w-[96%] md:w-[50%] xl:w-[45%] mx-auto">With the Savevest Wallet, you can store, manage, and move your money effortlessly all in one secure place.</p>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-8 md:mt-12">
            <div className="relative w-full h-[450px] group overflow-hidden">
              <img
                src="/images/wallet1.jpg"
                alt="wallet image 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/60"></div>

              <h1 className="text-2xl md:text-3xl text-white absolute bottom-6 left-4 leading-10">
                Instant Deposits & Withdrawals
              </h1>
            </div>

            <div className='md:col-span-2 relative w-full h-[450px] group overflow-hidden'>
              <img
                src="/images/wallet2.jpg"
                alt="wallet image 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/60"></div>

              <div className="absolute bottom-6 left-4 leading-10">
                <h1 className='text-2xl md:text-3xl text-white '>Track Your Transactions</h1>
                <p className="text-white text-base mt-2">Get a clear view of every deposit, withdrawal, and transfer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section-testimonials">
        <Testimonials />
      </section> */}

      <section className="section-started py-24">
        <div className="relative w-full h-[600px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/get-started.jpg"
              alt="Hero background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-white max-w-xl text-center md:text-left py-8 md:py-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Click. Pay. Done.
              </h1>
              <p className="text-lg mb-6 text-gray-200">
                Getting started with our solution is easy — just like our payments.
              </p>
              <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            {/* Image Container for Larger Screens */}
            <div className="hidden md:block w-1/2 lg:w-2/5 relative h-[400px]">
              <Image
                src="/images/get-started.jpg"
                alt="Person using laptop"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
