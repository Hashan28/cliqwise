import React, { useState } from "react";
import { ppcSections } from "../assets/assets";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const PpcWheel = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Function to calculate positions for each section
  const getPosition = (index, total) => {
    const angle = (index * 360) / total - 90; // Start from top (-90 degrees)
    const radius = window.innerWidth < 640 ? 100 : 150; // Smaller radius on mobile
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-20 relative">
      <div
        className="relative max-w-[90%] sm:max-w-[600px] h-auto aspect-square mx-auto flex justify-center items-center">
        {/* Center Circle */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-black text-2xl md:text-4xl font-bold">PPC</span>
        </div>

        {/* PPC Sections */}
        {ppcSections.map((section, index) => {
          const pos = getPosition(index, ppcSections.length);
          return (
            <div
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`absolute cursor-pointer transition-all duration-500 transform
                ${activeSection === section.id ? "scale-110 z-20" : "hover:scale-105"}
                ${activeSection !== null && activeSection !== section.id ? "opacity-50" : "opacity-100"}`}
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div
                className={`${section.color} p-4 md:p-6 rounded-xl w-36 md:w-48 h-36 md:h-48 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300`}
              >
                <div className="text-white mb-2 md:mb-3">
                  {section.icon && typeof section.icon === "function" &&
                    React.createElement(section.icon, { className: "h-5 w-5 md:h-6 md:w-6" })}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{section.title}</h3>
                <p className="text-xs md:text-sm text-white/80">{section.description}</p>
              </div>
            </div>
          );
        })}

        {/* Modal */}
        {activeSection && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl max-w-[95%] md:max-w-lg w-full relative transform transition-all duration-500 animate-modal-in">
              {/* Close Button */}
              <button
                onClick={() => setActiveSection(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Section Details */}
              {(() => {
                const section = ppcSections.find((s) => s.id === activeSection);
                if (!section) return null;

                return (
                  <div>
                    <h3 className="text-xl md:text-2xl text-headingText text-center font-bold mb-3 md:mb-4">
                      {section.title}
                    </h3>
                    <p className="text-localText text-center mb-4 md:mb-6">{section.description}</p>
                    <div className="space-y-2 md:space-y-3">
                      {section.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3" />
                          <span className="text-localText text-sm md:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PpcWheel;
