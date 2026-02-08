import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const BusinessBenefitsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#00529b] text-xl font-bold mt-1 text-center w-full">Business Benefits of DevOps</span>
    </div>
  );

  // Data for the visual flow
  const benefits = [
    { title: "Fast Solutions", color: "bg-pink-500", icon: "⏱️", pos: "top" },
    { title: "Increased Efficiency", color: "bg-purple-800", icon: "⚙️", pos: "bottom" },
    { title: "Improved Customer Experience", color: "bg-yellow-400", icon: "👥", pos: "top" },
    { title: "Faster ROI", color: "bg-pink-400", icon: "📊", pos: "bottom" }, // displayed visually higher in image but logic follows wave
    { title: "Reduced Failures And Rollbacks", color: "bg-blue-400", icon: "🛡️", pos: "top" }, // Logic adjustment for wave
    { title: "Continuous Improvement", color: "bg-red-500", icon: "🔁", pos: "bottom" },
    { title: "Improved Performance", color: "bg-teal-400", icon: "🚀", pos: "top" }, // Logic adjustment for wave
  ];
  
  // Re-ordering to match the specific visual layout of the image more closely
  // The image has a wave line. Let's position them absolute for best replication.
  const items = [
    { id: 1, title: "Fast Solutions", icon: "clock", color: "text-pink-500", x: "10%", y: "40%" },
    { id: 2, title: "Increased Efficiency", icon: "gear", color: "text-indigo-900", x: "22%", y: "25%" },
    { id: 3, title: "Improved Customer Experience", icon: "users", color: "text-yellow-400", x: "35%", y: "40%" }, // Center top-ish
    { id: 4, title: "Faster ROI", icon: "chart", color: "text-pink-400", x: "48%", y: "25%" },
    { id: 5, title: "Reduced Failures And Rollbacks", icon: "shield", color: "text-blue-400", x: "65%", y: "60%" },
    { id: 6, title: "Continuous Improvement", icon: "sync", color: "text-red-500", x: "45%", y: "75%" },
    { id: 7, title: "Improved Performance", icon: "gauge", color: "text-teal-400", x: "25%", y: "75%" },
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="12"
      isPresenting={isPresenting}
    >
      <div className="relative w-full h-full mt-4">
        
        {/* Wave Path Background - Simulated */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 400">
           <path d="M 100 160 Q 250 80 350 160 T 600 160 T 850 160" fill="none" stroke="gray" strokeWidth="8" />
           <path d="M 350 160 Q 450 300 600 240" fill="none" stroke="gray" strokeWidth="8" />
           <path d="M 250 300 Q 350 300 450 300" fill="none" stroke="gray" strokeWidth="8" />
        </svg>

        {/* Since SVG paths are hard to perfect blindly, let's use a CSS grid approach to structure it cleaner */}
        <div className="flex flex-wrap justify-center items-center h-full content-center gap-x-4 gap-y-12 relative">
            
            {/* Top Row */}
            <div className="flex justify-around w-full px-12 items-end">
                 <BenefitItem icon="⏱️" color="text-pink-500" title="Fast Solutions" />
                 <BenefitItem icon="⚙️" color="text-indigo-900" title="Increased Efficiency" className="mb-8" />
                 <BenefitItem icon="👥" color="text-yellow-400" title="Improved Customer Experience" />
                 <BenefitItem icon="📈" color="text-pink-400" title="Faster ROI" className="mb-8" />
            </div>

            {/* Connecting Wave Line (Visual approximation) */}
            <div className="w-11/12 h-4 bg-gradient-to-r from-pink-200 via-yellow-200 to-blue-200 rounded-full my-[-20px] relative z-0"></div>

            {/* Bottom Row */}
            <div className="flex justify-around w-full px-20 items-start">
                 <BenefitItem icon="🚀" color="text-teal-400" title="Improved Performance" />
                 <BenefitItem icon="🔄" color="text-red-500" title="Continuous Improvement" className="mt-8" />
                 <BenefitItem icon="🛡️" color="text-blue-400" title="Reduced Failures And Rollbacks" />
            </div>
        </div>
      </div>
    </SlideLayout>
  );
};

const BenefitItem = ({ icon, color, title, className = "" }: { icon: string, color: string, title: string, className?: string }) => (
    <div className={`flex flex-col items-center text-center z-10 w-32 ${className}`}>
        <div className={`text-4xl mb-2 ${color} bg-white p-2 rounded-full shadow-sm border border-slate-100`}>{icon}</div>
        <span className={`text-xs font-bold leading-tight ${color.replace('text-', 'text-opacity-80 text-')}`}>{title}</span>
    </div>
);

export default BusinessBenefitsSlide;