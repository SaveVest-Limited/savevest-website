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
    <div className="border border-gray-200/20 rounded-2xl mb-4 backdrop-blur-sm bg-white/5">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/10 transition-colors duration-300 rounded-2xl"
        onClick={onToggle}
      >
        <span className="text-white font-medium text-lg">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-blue-400" />
        ) : (
          <FaChevronDown className="text-blue-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-300 leading-relaxed">{answer}</div>
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
                <div className="absolute -left-8 bottom-32 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg z-10" style={{animation: 'float 6s ease-in-out infinite'}}>
                  <div className="text-sm font-semibold">+₦1,247</div>
                  <div className="text-xs opacity-80">This month</div>
                </div>

                <div className="absolute -right-8 top-32 bg-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg z-10" style={{animation: 'float 6s ease-in-out infinite 2s'}}>
                  <div className="text-sm font-semibold">Goal: 85%</div>
                  <div className="text-xs opacity-80">Almost there!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-16">
            Download the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              App
            </span>{" "}
            and <br className="hidden md:block" />
            Start{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saving
            </span>
          </h2>
          <img
            src="/images/under-hero.png"
            alt="Download Savevest App"
            className="w-[85%] mx-auto object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-blue-600 text-sm font-medium">
                Why Choose Savevest
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              The Future of Saving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience next-generation financial tools designed for the modern
              saver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MdTrendingUp className="w-8 h-8" />,
                title: "AI-Powered Growth",
                description:
                  "Smart algorithms optimize your savings automatically, ensuring maximum returns with minimal effort.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <MdSecurity className="w-8 h-8" />,
                title: "Military-Grade Security",
                description:
                  "Your funds are protected by advanced encryption and multi-layered security protocols.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <MdGroupWork className="w-8 h-8" />,
                title: "Social Savings",
                description:
                  "Join savings challenges with friends and family. Achieve goals together and stay motivated.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Savings Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Save </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Together
                </span>
                <br />
                <span className="text-white">Achieve </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  More
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionary group savings that turn financial goals into
                social experiences. Connect, compete, and celebrate milestones
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

              <GlowButton primary className="inline-flex items-center gap-3">
                <span className="mr-2">Start Group Savings</span>
                <MdOutlineArrowOutward className="w-5 h-5 inline-flex" />
              </GlowButton>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3">
                <img
                  src="/images/get-started.jpg"
                  alt="Group Savings Interface"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Your Digital Wallet
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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

                {/* Transaction card */}
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
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Questions?
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  We&apos;ve got answers.
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                24/7 human support from our expert team. Real people, real
                solutions, real fast.
              </p>

              <GlowButton primary className="inline-flex items-center gap-3">
                <span className="mr-2">Contact Support</span>
                <MdOutlineArrowOutward className="w-5 h-5 inline-flex" />
              </GlowButton>
            </div>

            <div className="space-y-4">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-1">
            <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-16 text-center border border-gray-700">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Download. Sign up. Save.
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Getting started with our platform is just that easy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <GlowButton primary className="text-lg px-8 py-4">
                  Get Started Free
                </GlowButton>
                <GlowButton className="text-lg px-8 py-4">
                  Watch Demo
                </GlowButton>
              </div>

              <div className="text-gray-300 text-sm">
                No hidden fees • FDIC insured • Cancel anytime
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
