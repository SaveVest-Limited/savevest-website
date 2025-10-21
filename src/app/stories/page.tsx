"use client"

import React, { useState, useEffect } from "react";
import { FaHeart, FaQuoteLeft, FaStar, FaPlay } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

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
        ${primary
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

interface StoryCardProps {
    name: string;
    title: string;
    story: string;
    avatar: string;
    amount: string;
    timeframe: string;
    rating: number;
    verified?: boolean;
    video?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({
    name,
    title,
    story,
    avatar,
    amount,
    timeframe,
    rating,
    verified = false,
    video = false,
}) => {
    return (
      <div className="group relative bg-white border border-gray-300 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 text-gray-300">
          <FaQuoteLeft className="w-8 h-8" />
        </div>

        {/* Video play button overlay */}
        {video && (
          <div className="absolute top-6 left-6 bg-blue-600 text-white p-2 rounded-full">
            <FaPlay className="w-3 h-3 ml-0.5" />
          </div>
        )}

        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Story content */}
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          &apos;{story}&apos;
        </p>

        {/* Achievement highlight */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <div className="text-2xl font-bold text-green-600 mb-1">{amount}</div>
          <div className="text-sm text-gray-600">saved in {timeframe}</div>
        </div>

        {/* User info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
            {verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <MdVerified className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold text-gray-900 flex items-center gap-2">
              {name}
              {verified && <MdVerified className="w-4 h-4 text-blue-600" />}
            </div>
            <div className="text-sm text-gray-600">{title}</div>
          </div>
        </div>
      </div>
    );
};

export default function ModernStoriesPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const stories = [
        {
            name: "Adunni Adebayo",
            title: "Marketing Manager",
            story: "Savevest completely transformed how I approach saving. The group challenges with my friends made it fun and competitive. I never thought I could save this much in such a short time!",
            avatar: "https://i.pravatar.cc/100?img=5",
            amount: "₦850,000",
            timeframe: "8 months",
            rating: 5,
            verified: true,
            video: true,
        },
        {
            name: "Chinedu Okoro",
            title: "Software Developer",
            story: "The AI-powered insights showed me spending patterns I never noticed. Now I'm saving 40% more each month without feeling restricted. The automated features are game-changing.",
            avatar: "https://i.pravatar.cc/100?img=6",
            amount: "₦1.2M",
            timeframe: "6 months",
            rating: 5,
            verified: true,
        },
        {
            name: "Kemi Ogundimu",
            title: "Small Business Owner",
            story: "As an entrepreneur, managing cash flow was always stressful. Savevest's group savings helped me build an emergency fund while connecting with other business owners. The community aspect is incredible.",
            avatar: "https://i.pravatar.cc/100?img=7",
            amount: "₦2.1M",
            timeframe: "1 year",
            rating: 5,
            verified: true,
            video: true,
        },
    ];

    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-32 bg-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
                  <span className="text-white text-sm font-medium">
                    💚 100K+ Success Stories
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  Real Stories,
                  <br />
                  Real Results
                </h1>

                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  Discover how thousands of people are transforming their
                  financial future with Savevest. Real stories from real users.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:support@savevesting.com?subject=Story" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors duration-300">
                    <span>Share Your Story</span>
                    <FaHeart className="w-4 h-4" />
                  </a>
                  <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-colors duration-300">
                    <span>Watch Videos</span>
                    <FaPlay className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-[85%]">
                  <img
                    src="/images/stories-hero.png"
                    alt="Success stories visualization"
                    className="w-full h-auto object-contain rounded-2xl border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Grid Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
                <span className="text-blue-600 text-sm font-medium">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Inspiring Journeys
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Real people, real results, real transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.slice(0, 3).map((story) => (
                <div key={story.name}>
                  <StoryCard {...story} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Stories Section */}
        {/* <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Watch Their </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear directly from our community members about their financial
                transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  thumbnail: "/images/video1.jpg",
                  title: "From Debt to Dreams",
                  subtitle: "Sarah's 8-month journey",
                  duration: "3:45",
                },
                {
                  thumbnail: "/images/video2.jpg",
                  title: "Building Business Capital",
                  subtitle: "Aisha's entrepreneurship story",
                  duration: "5:12",
                },
                {
                  thumbnail: "/images/video3.jpg",
                  title: "First Home Purchase",
                  subtitle: "James saves for down payment",
                  duration: "4:28",
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all duration-300">
                      <FaPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs bg-black/50 text-white px-2 py-1 rounded mb-2 w-fit">
                      {video.duration}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{video.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

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