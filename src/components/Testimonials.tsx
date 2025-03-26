"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "SaveVest automated savings option helps me to save more.",
            name: "Femi Kolawole",
            title: "Student, University Of Ibadan"
        },
        {
            quote: "Their 24/7 customer service makes it easy for me to access my money anytime I need it.",
            name: "Mercy Imador",
            title: "Accountant, Felicity Apparels"
        },
        {
            quote: "SaveVest is so cool, I get monthly reports at zero cost how wonderful. 😊",
            name: "Ayodeji Akande",
            title: "Designer, Immaculate Models"
        },
        {
            quote: "Being able to invest in a real company had always been my target. With SaveVest, it became easier with lots of benefits since I started using their platform.",
            name: "Feranmi Mafoluku",
            title: "Gift Card Vendor"
        },
        {
            quote: "Saving had always been a tug of war for months running into years for me. I got introduced to SaveVest by a friend, and so far they've lived up to expectation through their advisory service that helped me set up.",
            name: "Emmanuel Williams",
            title: "Small Business Owner"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center">
                <div className="mb-4">
                    <p className="text-xs uppercase text-blue-500 bg-blue-50 px-3 py-2 rounded-2xl font-semibold inline-block">testimonials</p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-black">Our Happy Customers</h2>
            </div>

            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white shadow-lg rounded-xl p-8 mb-8 relative">
                    <Quote className="absolute top-4 left-4 text-blue-500 opacity-20" size={64} />
                    <p className="text-base text-gray-800 mb-10 italic relative z-10">
                        &quot;{testimonials[currentIndex].quote}&quot;
                    </p>

                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-gray-800">
                            {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-gray-600">
                            {testimonials[currentIndex].title}
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={prevTestimonial}
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;