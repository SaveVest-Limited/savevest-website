import React from "react";

const clients = [
    "/images/clients/entrepreneur.webp",
    "/images/clients/msnbc.webp",
    "/images/clients/hubspot.webp",
    "/images/clients/forbes.webp",
];

const ClientsSection = () => {
    return (
        <div className="overflow-hidden bg-white py-10">
            <div className="max-w-7xl mx-auto px-3">
                <h1 className="text-xl md:text-4xl mb-6 font-semibold">Our Clients</h1>
            </div>
            <div className="relative flex w-full">
                <div className="flex whitespace-nowrap animate-scroll">
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <img
                            key={index}
                            src={client}
                            alt={`Client ${index}`}
                            className="w-32 h-auto mx-6"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsSection;