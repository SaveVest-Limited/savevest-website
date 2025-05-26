"use client";

import React, { useState, useEffect } from "react";
import {
  FaApple,
  FaAndroid,
  FaLock,
  FaWallet,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  MdOutlineArrowOutward,
  MdSecurity,
  MdTrendingUp,
  MdGroupWork,
} from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";

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
      className="transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
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
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
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
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen relative overflow-hidden">
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
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <span className="text-blue-400 text-sm font-medium">
                  🚀 Trusted by 100K+ savers
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Your Money.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Your Future.
                </span>
                <br />
                <span className="text-white">Start Saving</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Today!
                </span>
              </h1>

              <p className="text-sm lg:text-lg text-gray-300 leading-relaxed max-w-lg">
                Revolutionary savings platform with AI-powered insights,
                automated investments, and community-driven growth. Join the
                future of personal finance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton
                  primary
                  className="inline-flex items-center justify-center gap-x-3 w-full sm:w-auto"
                >
                  <FaApple className="w-5 h-5 flex-shrink-0 inline-flex mb-1" />
                  <span className="pl-2">Download for iOS</span>
                </GlowButton>
                <GlowButton className="inline-flex items-center justify-center gap-x-3 w-full sm:w-auto">
                  <FaAndroid className="w-5 h-5 flex-shrink-0 inline-flex" />
                  <span className="pl-2">Get on Android</span>
                </GlowButton>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    &#8358;
                    <AnimatedCounter end={125} />
                    M+
                  </div>
                  <div className="text-gray-400 text-sm">Total Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    <AnimatedCounter end={10} />
                    K+
                  </div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">
                    <AnimatedCounter end={15} />%
                  </div>
                  <div className="text-gray-400 text-sm">Avg. Returns</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Main image container */}
                <FloatingCard>
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                    <img
                      src="/images/save-hero.jpg"
                      alt="Savevest App Interface"
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                </FloatingCard>

                {/* Floating elements */}
                <FloatingCard delay={1}>
                  <div className="absolute -left-8 -top-8 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
                    <div className="text-sm font-semibold">+N1,247</div>
                    <div className="text-xs opacity-80">This month</div>
                  </div>
                </FloatingCard>

                <FloatingCard delay={2}>
                  <div className="absolute -right-8 -top-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
                    <div className="text-sm font-semibold">Goal: 85%</div>
                    <div className="text-xs opacity-80">Almost there!</div>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-purple-400 text-sm font-medium">
                Why Choose Savevest
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              The Future of Saving
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/20 transition-all duration-500"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Savings Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
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
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
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
                  We've got answers.
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
