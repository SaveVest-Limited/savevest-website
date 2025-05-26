"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const faqData = [
  {
    question: "Why SaveVest?",
    answer:
      "Savevest helps make saving and investing seamless. SaveVest takes away the stress and planning required to save and invest on a regular basis through its automated and easy-to-use platform. Your savings also generate interest, up to 5% per annum, till a set maturity date.",
  },
  {
    question: "Why should I save on SaveVest?",
    answer:
      "SaveVest is suitable for anyone who: never want to miss their saving and investment goals again; wants to save and invest even while they are asleep; wants the discipline to keep their savings and investments for a long period of time without tampering with them; wants to plan their financial goals with easy-to-use financial tools.",
  },
  {
    question: "How are you able to offer higher returns than traditional banks?",
    answer:
      "We do not have the high-cost base of traditional banks. Our operations are lean, driven by our proprietary technology. We invest in our customer's funds in risk-free instruments offered by the Central Bank of Nigeria, Nigeria's Debt Management Office (DMO), FGN Bond, and a few low-risk investment opportunities such as corporate bonds and high-quality commercial papers. These cost savings are passed to our customers in the form of higher returns.",
  },
  {
    question: "What kind of debit cards can I use on SaveVest?",
    answer:
      "SaveVest accepts debit cards issued by all Nigerian banks.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => (
  <div className="border border-white/10 rounded-2xl mb-4 backdrop-blur-sm bg-white/5">
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

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">FAQs</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Savevest. Can't find your answer? Our support team is here to help.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-2xl mx-auto px-4 pb-10">
        <div className="relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a question..."
            className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md text-base"
          />
          <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-400" />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-3xl mx-auto px-4 pb-32">
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center text-gray-400 py-12 text-lg">No results found.</div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQs;