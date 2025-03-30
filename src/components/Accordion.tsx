"use client"


import React, { useState } from 'react';
const AccordionItem = ({ 
  number,
  title,
  content,
  isOpen,
  toggleAccordion
}: {
  number: string;
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleAccordion}
      >
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold text-gray-800">
            {number.padStart(2, '0')}
          </div>
          <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        </div>
        <button className="text-2xl text-gray-700">
          {isOpen ? '−' : '+'}
        </button>
      </div>
      
      {isOpen && (
        <div className="mt-4 text-gray-600 max-w-2xl">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
    const [openItem, setOpenItem] = useState<number | null>(1);

    const items = [
        {
            id: 1,
            number: '1',
            title: "Why should I save on SaveVest?",
            content: "Savevest helps make saving and investing seamless. SaveVest takes away the stress and planning required to save and invest on a regular basis through its automated and easy-to-use platform. Your savings also generate interest, up to 5% per annum, till a set maturity date."
        },
        {
            id: 2,
            number: '2',
            title: "How much can I save on SaveVest?",
            content: "You can start your saving plans with as low as ₦5,000 (Five Thousand Naira). However, if you are saving or investing over a million, SaveVest will require you to provide additional documents. We are doing this to protect you as our customer and to guide you against money laundering."
        },
        {
            id: 3,
            number: '3',
            title: "What rate of return do I earn on my plans?",
            content: "We offer you a minimum of 5% per annum and this return accrues to you on a daily basis. You can earn as high as 10% per annum on longer durations. This compares with less than 1% that banks give to your savings account."
        }
    ];
    const toggleAccordion = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    number={item.number}
                    title={item.title}
                    content={item.content}
                    isOpen={openItem === item.id}
                    toggleAccordion={() => toggleAccordion(item.id)}
                />
            ))}
        </div>
    );
};

export default Accordion;