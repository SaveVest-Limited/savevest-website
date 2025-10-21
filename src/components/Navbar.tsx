"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Stories", href: "/stories" },
  {
    name: "Plans",
    dropdown: [
      { name: "Self Target Savings", href: "/self-target-savings" },
      { name: "Group Target Savings", href: "/group-target-savings" },
    ],
  },
  { name: "FAQs", href: "/faqs" },
  { name: "Calculator", href: "/savings-calculator" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on nav click
  const closeBar = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/80 py-1"
          : "bg-transparent py-4"
      }`}
      style={{
        borderBottom: isScrolled ? "1px solid #e5e7eb" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-[64px]">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer h-[48px]">
            <img 
              src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"} 
              alt="logo" 
              className="w-[130px] h-auto" 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 h-full">
          {navLinks.map((link) =>
            !link.dropdown ? (
              <Link key={link.name} href={link.href} className="relative group flex items-center h-full">
                <span
                  className={`text-base font-medium transition-colors duration-200 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  } px-2 py-1 flex items-center`}
                >
                  {link.name}
                  <span
                    className={`block h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-1`}
                  />
                </span>
              </Link>
            ) : (
              <div key={link.name} className="relative group flex items-center h-full">
                <button
                  className={`flex items-center gap-1 text-base font-medium px-2 py-1 transition-colors duration-200 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  } focus:outline-none h-full`}
                  onClick={() => setPlansOpen((open) => !open)}
                  onMouseEnter={() => setPlansOpen(true)}
                  onMouseLeave={() => setPlansOpen(false)}
                  type="button"
                >
                  {link.name}
                  <span>
                    {plansOpen ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </span>
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 mt-2 w-56 rounded-xl shadow-2xl bg-white/95 ring-1 ring-black/10 transition-all duration-300 z-40 overflow-hidden ${
                    plansOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setPlansOpen(true)}
                  onMouseLeave={() => setPlansOpen(false)}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-base font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4 h-full">
          <Link href="/">
            <span
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm border-0 outline-none focus:ring-2 focus:ring-blue-400 flex items-center ${
                isScrolled 
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Download App
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center justify-center p-2 rounded-md ${
              isScrolled
                ? "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                : "text-white hover:text-blue-400 hover:bg-white/10"
            } focus:outline-none`}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeBar}
      />
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white/95 shadow-2xl z-50 transform transition-transform duration-300 md:hidden flex flex-col pt-10 px-8 space-y-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-gray-700 hover:text-blue-600"
          onClick={closeBar}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-6 mt-8">
          {navLinks.map((link) =>
            !link.dropdown ? (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeBar}
                className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ) : (
              <div key={link.name} className="flex flex-col space-y-2">
                <span className="text-lg font-medium text-gray-800">{link.name}</span>
                <div className="ml-4 flex flex-col space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeBar}
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className="mt-auto pb-10">
          <Link href="/">
            <span className="block w-full text-center bg-blue-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base tracking-wide border-0 outline-none focus:ring-2 focus:ring-blue-400">
              Download App
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;