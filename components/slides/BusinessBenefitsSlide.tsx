import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const BusinessBenefitsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Business Benefits</span>
    </div>
  );

  const benefits = [
    { title: "Fast Solutions", icon: "⏱️", color: "bg-pink-100 border-pink-300 text-pink-700" },
    { title: "Efficiency", icon: "⚙️", color: "bg-purple-100 border-purple-300 text-purple-700" },
    { title: "Customer XP", icon: "👥", color: "bg-yellow-100 border-yellow-300 text-yellow-700" },
    { title: "Faster ROI", icon: "📊", color: "bg-emerald-100 border-emerald-300 text-emerald-700" },
    { title: "Reduced Failures", icon: "🛡️", color: "bg-blue-100 border-blue-300 text-blue-700" },
    { title: "Continuous Imp.", icon: "🔁", color: "bg-orange-100 border-orange-300 text-orange-700" },
    { title: "Performance", icon: "🚀", color: "bg-teal-100 border-teal-300 text-teal-700" },
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="12"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center perspective-1000 overflow-visible">
        
        {/* 3D Grid Container */}
        <div className="grid grid-cols-4 gap-6 transform rotate-x-12 rotate-y-12 scale-90" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateZ(-5deg) translateY(20px)' }}>
            
            {benefits.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, z: -100, y: 50 }}
                    animate={{ opacity: 1, z: 0, y: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 120, damping: 12 }}
                    whileHover={{ scale: 1.1, z: 50, transition: { duration: 0.2 } }}
                    className={`
                        relative w-40 h-40 rounded-2xl shadow-xl flex flex-col items-center justify-center
                        border-b-8 border-r-8 ${item.color} bg-white
                        cursor-pointer group
                    `}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Floating Icon */}
                    <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300 drop-shadow-md">
                        {item.icon}
                    </div>
                    
                    {/* Title */}
                    <span className={`text-sm font-black text-center uppercase tracking-wide px-2 leading-tight ${item.color.split(' ').pop()}`}>
                        {item.title}
                    </span>

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl pointer-events-none"></div>
                </motion.div>
            ))}

            {/* Decorative Filler Block to complete grid if needed or just empty space */}
            <motion.div 
                className="w-40 h-40 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center opacity-50"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.8 }}
            >
                <div className="text-slate-300 font-bold text-center">DevOps<br/>Success</div>
            </motion.div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default BusinessBenefitsSlide;