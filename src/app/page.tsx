"use client";

import React, { useState, useEffect } from "react";
import {
  FaApple,
  FaAndroid,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  MdOutlineArrowOutward,
  MdSecurity,
  MdTrendingUp,
  MdGroupWork,
} from "react-icons/md";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - (startTime || 0)) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="transform hover:scale-105 transition-all duration-500"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  primary = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        relative overflow-hidden group transition-all duration-300
        ${
          primary
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
        }
        px-6 py-3 rounded-full font-semibold
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] before:transition-transform before:duration-700
        hover:before:translate-x-[100%]
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-2xl mb-4 bg-white">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300 rounded-2xl"
        onClick={onToggle}
      >
        <span className="text-gray-900 font-medium text-lg">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-blue-600" />
        ) : (
          <FaChevronDown className="text-blue-600" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

export default function ModernSavevestLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const faqData = [
    {
      question: "How secure is my money with Savevest?",
      answer:
        "Your funds are protected by bank-level security, FDIC insurance, and advanced encryption. We use multi-factor authentication and continuous monitoring to keep your money safe.",
    },
    {
      question: "Can I withdraw my money anytime?",
      answer:
        "Absolutely! Your savings are always accessible. You can withdraw funds instantly to your linked bank account or Savevest wallet whenever you need them.",
    },
    {
      question: "How much interest can I earn?",
      answer:
        "Our competitive interest rates are significantly higher than traditional savings accounts, with rates updated regularly based on market conditions. The more you save, the more you earn.",
    },
    {
      question: "What are group savings plans?",
      answer:
        "Group savings allow you to save with friends, family, or colleagues toward shared goals. Everyone contributes, tracks progress together, and celebrates milestones as a team.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
                <span className="text-white text-sm font-medium">
                  🚀 Trusted by 100K+ savers
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
                The Smart Way to Save <br className="hidden md:block" /> and
                Invest
              </h1>

              <p className="text-sm md:text-base text-white leading-relaxed max-w-lg">
                Savevest helps you save money, grow it automatically, and reach
                your goals faster. You can save alone or with friends, track
                your progress, and celebrate milestones together. Everything is
                simple, safe, and designed to make saving fun and easy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <FaApple className="w-5 h-5" />
                  Get on iPhone
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <FaAndroid className="w-5 h-5" />
                  Get on Android
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[95%] md:w-[65%]">
                <img
                  src="/images/hero-phone.jpeg"
                  alt="Piggybank App Interface"
                  className="w-full object-contain border-8 border-b-0 border-gray-900 rounded-t-4xl"
                />

                {/* Floating elements */}
                <div
                  className="absolute -left-8 bottom-32 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg z-10"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  <div className="text-sm font-semibold">+₦1,247</div>
                  <div className="text-xs opacity-80">This month</div>
                </div>

                <div
                  className="absolute -right-8 top-32 bg-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg z-10"
                  style={{ animation: "float 6s ease-in-out infinite 2s" }}
                >
                  <div className="text-sm font-semibold">Goal: 85%</div>
                  <div className="text-xs opacity-80">Almost there!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-14">
            Download the App and <br className="hidden md:block" />
            Start{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Saving.
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-2 max-w-2xl">
            Join thousands of users who are already building their financial
            future with Savevest. Our intuitive app makes saving money
            effortless and rewarding.
          </p>
          <img
            src="/images/under-hero.png"
            alt="Download Savevest App"
            className="w-[85%] mx-auto object-cover rounded-2xl"
          />
        </div>
      </section> */}

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-blue-600 text-sm font-medium">
                Why Choose Savevest
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              The Future of Saving
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Experience next-generation financial tools designed for the modern
              saver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/savings-plan.jpeg",
                title: "Save on the go",
                description:
                  "Don't fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.",
              },
              {
                image: "/images/wallet.jpeg",
                title: "Build discipline",
                description:
                  "With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.",
              },
              {
                image: "/images/bank-accounts.jpeg",
                title: "Quick withdrawal",
                description:
                  "Access your funds instantly when you need them. Fast and secure withdrawals with just a few taps.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-blue-600 rounded-3xl px-8 transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => console.log(`Clicked on ${feature.title}`)}
              >
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full max-w-sm h-auto object-contain border-8 border-b-0 border-gray-900 rounded-t-4xl pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Savings Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex items-center px-8 lg:px-16 py-32">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl text-white font-bold leading-tight">
                Saving is easier when you're not doing it alone.
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                With Savevest, you can team up with friends or family to reach
                shared goals, motivate each other, and celebrate every win
                together.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time progress tracking",
                  "Milestone celebrations",
                  "Friendly competitions",
                  "Shared goal setting",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <GlowButton
                primary
                className="px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm border-0 outline-none focus:ring-2 focus:ring-blue-400 flex items-center"
              >
                <span className="mr-2">Start Group Savings</span>
                <MdOutlineArrowOutward className="w-5 h-5 inline-flex" />
              </GlowButton>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/get-started.jpg"
              alt="Group Savings Interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      {/* <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl text-gray-900 font-bold mb-4">
              Your Digital Wallet
            </h2>
            <p className="text-base text-gray-400 max-w-3xl mx-auto">
              Seamlessly manage, store, and grow your money with our intelligent
              wallet system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative group overflow-hidden rounded-3xl h-96">
                <img
                  src="/images/wallet1.jpg"
                  alt="Instant transactions"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-300">
                    Instant deposits & withdrawals
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative group overflow-hidden rounded-3xl h-96">
                <img
                  src="/images/wallet2.jpg"
                  alt="Transaction tracking"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/80 to-transparent" />

                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-xs">
                  <div className="text-white font-semibold mb-2">
                    Recent Transactions
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Grocery Shopping</span>
                      <span>-$67.50</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>Salary Deposit</span>
                      <span>+$3,250.00</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Coffee</span>
                      <span>-$4.95</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Smart Analytics
                  </h3>
                  <p className="text-gray-300">
                    AI-powered insights and spending patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-gray-900">
                Questions?
              </span>
              <br />
              <span className="text-blue-600">
                We&apos;ve got answers.
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              24/7 human support from our expert team. Real people, real
              solutions, real fast.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 mb-3">
              <span>Contact Support</span>
              <MdOutlineArrowOutward className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-[85%]">
                <img
                  src="/images/cta.jpeg"
                  alt="Savevest App"
                  className="object-contain border-8 border-b-0 border-gray-900 rounded-t-4xl"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=4" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <span className="text-gray-600 font-medium">100K+</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Join 100K+ people who save and invest with us
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <FaApple className="w-5 h-5" />
                  Get on iPhone
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <FaAndroid className="w-5 h-5" />
                  Get on Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
      `}</style>
    </div>
  );
}
