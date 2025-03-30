// import Testimonials from "../components/Testimonials"
// import Image from 'next/image';
import ClientsSection from '@/components/ClientsSection';
import { FaApple, FaAndroid, FaLock, FaWallet } from 'react-icons/fa'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { BiSolidBank } from "react-icons/bi";
import Accordion from '@/components/Accordion';

export default function Home() {

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
                <a href="http://" target="_blank" className='bg-slate-200 hover:bg-blue-400 rounded-sm duration-200 px-4 py-3 flex space-x-2 text-black items-center'>
                  <FaApple className='w-6 h-6' />
                  <span className='text-sm font-medium'>Get on iPhone</span>
                </a>

                <a href="http://" target="_blank" className='bg-slate-200 hover:bg-blue-400 rounded-sm duration-200 px-4 py-3 flex space-x-2 text-black items-center'>
                  <FaAndroid className='w-6 h-6' />
                  <span className='text-sm font-medium'>Get on Android</span>
                </a>
              </div>
            </Fade>
          </div>
          <div className='relative h-[300px] md:h-[550px] w-full'>
            <img src="/images/save-hero.jpg" alt="mockup img" className='ml-auto w-full md:w-[90%] h-full object-cover object-left' />

            <div className="space-y-4 absolute -left-2 top-11 w-[55%] animate-float">
              <img src='/images/hero-tag1.jpeg' alt='tag' className='rounded-lg' />
              <img src='/images/hero-tag2.jpeg' alt='tag' className='rounded-lg' />
            </div>

          </div>
        </div>
      </section>

      <ClientsSection />

      <section className="section-about py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <Fade direction='up'>
            <div>
              <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">about savevest</p>
            </div>
          </Fade>

          <Fade direction='up' delay={150}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">What Savevest Offers</h2>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-16">
          <div>
            <Fade direction='up'>
              <h1 className='text-2xl md:text-4xl font-medium'>The <span className="font-semibold text-blue-500">Easiest</span> Way To <br /> Save Money</h1>
            </Fade>
          </div>
          <div>
            <div className="space-y-5">
              <Fade direction='up'>
                <div className="bg-gray-50 hover:bg-blue-500 group rounded-sm duration-200 px-6 py-6 flex items-start space-x-5">
                  <BiSolidBank className='w-12 h-12 text-gray-700 group-hover:text-white -mt-1' />
                  <div>
                    <h1 className="text-lg md:text-xl text-gray-900 group-hover:text-white ">Save without thinking about it.</h1>
                    <p className="mt-3 text-gray-700 group-hover:text-white  text-sm md:text-base">Set it. Forget it. Whether it&apos;s daily, weekly, or monthly savings, you can save and just watch your wealth grow.</p>
                  </div>
                </div>
              </Fade>

              <Fade direction='up' delay={150}>
                <div className="bg-gray-50 hover:bg-blue-500 group rounded-sm px-6 py-6 flex items-start space-x-5">
                  <FaLock className='w-8 h-8 text-gray-700 group-hover:text-white  -mt-1' />
                  <div>
                    <h1 className="text-lg md:text-xl text-gray-900 group-hover:text-white ">Your Money is Secure.</h1>
                    <p className="mt-3 text-gray-700 group-hover:text-white  text-sm md:text-base">Bank-level security, insured funds, and complete transparency - your savings are always protected.</p>
                  </div>
                </div>
              </Fade>

              <Fade direction='up' delay={250}>
                <div className="bg-gray-50 hover:bg-blue-500 group rounded-sm px-6 py-6 flex items-start space-x-5">
                  <FaWallet className='w-8 h-8 text-gray-700 group-hover:text-white  -mt-1' />
                  <div>
                    <h1 className="text-lg md:text-xl text-gray-900 group-hover:text-white ">Withdraw Anytime. It&apos;s Your Money.</h1>
                    <p className="mt-3 text-gray-700 group-hover:text-white  text-sm md:text-base">Access your savings whenever you need them, or let them grow for even bigger rewards.</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div>

          
        </div>

        {/* <div className="pt-16">
          <Fade direction='up'>
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
          </Fade>
        </div> */}
      </section>


      <section className="section-group-savings bg-[#121412]">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 md:pt-10">
          <div className='pt-8 md:pt-24'>
            <h1 className="text-2xl md:text-5xl font-medium text-white leading-16">Create or join a  <br /> <span className="text-blue-500 font-semibold">savings plan.</span></h1>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-300">Try out our new group savings.</p>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-300">Team up with friends, family, or colleagues to reach your financial goals. Join a savings challenge and stay motivated with shared progress and rewards.</p>

            <button className='px-4 py-3 bg-blue-500 text-sm cursor-pointer text-white rounded-sm mt-4'>Get started</button>
          </div>
          <Fade direction='up'>
            <img src='/images/plan-mockup.png' alt='plan mockup image' className='w-[85%] mx-auto' />
          </Fade>
        </div>
      </section>

      { }

      {/* Wallet Section */}
      <section className="section-why-us text-white pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Fade direction='up'>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-medium mb-3 text-black">Your Money, Always Within Reach</h2>
              <p className="text-sm md:text-base text-gray-700 w-[96%] md:w-[50%] xl:w-[45%] mx-auto">With the Savevest Wallet, you can store, manage, and move your money effortlessly all in one secure place.</p>
            </div>
          </Fade>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-8 md:mt-12">
            <div className="relative w-full h-[450px] group overflow-hidden rounded-sm">
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


            <div className='md:col-span-2'>
              <div className='relative w-full h-[450px] group overflow-hidden rounded-sm'>
                <img
                  src="/images/wallet2.jpg"
                  alt="wallet image 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

                <img src='/images/transactions.jpeg' alt='transactions image' className='absolute top-5 left-4 w-[300px] rounded-lg brightness-95' />

                <div className="absolute bottom-6 left-4 leading-10">
                  <h1 className='text-2xl md:text-3xl text-white '>Track Your Transactions</h1>
                  <p className="text-white text-base mt-2">Get a clear view of every deposit, withdrawal, and transfer.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section className="section-testimonials">
        <Testimonials />
      </section> */}

      <section className="section-faq  bg-[#EDF6F5] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='flex flex-col justify-between'>
            <h1 className="text-3xl md:text-4xl font-medium leading-12">Real support from real<br />  humans</h1>
            <div>
              <button className='px-4 py-3 bg-blue-500 text-sm cursor-pointer text-white rounded-sm mt-4 flex space-x-3 items-center'>
                <span>Contact support</span>
                <MdOutlineArrowOutward className='w-5 h-5' />
              </button>
            </div>
          </div>

          <div>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="section-started py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#121412] max-w-7xl mx-auto items-center rounded-sm overflow-hidden">
          <div className='px-10'>
            <div className="py-8 md:py-0">
              <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4 leading-12">
                Download. Sign up. Save.
              </h1>
              <p className="text-base md:text-md mb-6 text-gray-300">
                Getting started with our platform is just that easy.
              </p>
              <button className="bg-white text-black font-semibold py-3 px-6 text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>
          <div className='w-full h-[450px]'>
            <img
              src="/images/get-started.jpg"
              alt="Person using laptop"
              className="object-cover w-full h-full brightness-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
