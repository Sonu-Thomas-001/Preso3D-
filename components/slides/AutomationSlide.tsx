import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const AutomationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Automation</span>
    </div>
  );

  const points = [
    "Automation is central to DevOps and focuses on reducing manual, repetitive, and error-prone tasks across the software delivery pipeline.",
    "It includes automating code builds, testing, deployments, infrastructure provisioning, configuration management, and monitoring.",
    "By using tools such as CI/CD pipelines, infrastructure as code, and automated testing frameworks, organizations achieve consistency, repeatability, and faster execution.",
    "Automation not only accelerates delivery but also improves reliability by minimizing human error."
  ];

  // Gear Component
  const Gear = ({ size, color, speed, direction, x, y, z = 0 }: any) => (
    <motion.div
        className={`absolute rounded-full flex items-center justify-center ${color} shadow-lg`}
        style={{ width: size, height: size, left: x, top: y, transform: `translateZ(${z}px)` }}
        animate={{ rotate: direction === 'cw' ? 360 : -360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
        {/* Teeth */}
        {[...Array(8)].map((_, i) => (
            <div 
                key={i} 
                className={`absolute w-[15%] h-[120%] ${color} rounded-sm`}
                style={{ transform: `rotate(${i * 45}deg)` }} 
            />
        ))}
        {/* Inner Hole */}
        <div className="absolute w-[40%] h-[40%] bg-white rounded-full border-2 border-slate-200 shadow-inner z-10" />
    </motion.div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="13"
      isPresenting={isPresenting}
    >
       <div className="flex h-full items-center gap-8 relative overflow-hidden">
         
         {/* Left Content */}
         <div className="w-1/2 flex flex-col gap-6 z-10">
            {points.map((text, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-4 items-start"
                >
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-green-100 border border-green-400 flex items-center justify-center shrink-0">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify bg-white/50 p-2 rounded-lg backdrop-blur-sm border border-white/60 shadow-sm">
                        {text}
                    </p>
                </motion.div>
            ))}
         </div>

         {/* Right Illustration: The Automation Engine */}
         <div className="w-1/2 h-full relative perspective-1000 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] transform-style-3d">
                {/* Background Plate */}
                <div className="absolute inset-0 bg-slate-100 rounded-3xl border border-slate-200 transform rotate-6 opacity-50"></div>

                {/* Main Drive Gear */}
                <Gear size={140} color="bg-blue-500" speed={8} direction="cw" x="20%" y="20%" z={20} />
                
                {/* Secondary Gears */}
                <Gear size={90} color="bg-green-500" speed={5} direction="ccw" x="60%" y="10%" z={10} />
                <Gear size={110} color="bg-purple-500" speed={7} direction="ccw" x="45%" y="55%" z={30} />
                
                {/* Small Connector */}
                <Gear size={60} color="bg-orange-400" speed={4} direction="cw" x="10%" y="60%" z={15} />

                {/* Floating Label */}
                <motion.div 
                    className="absolute bottom-0 right-0 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 z-50"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <span className="font-bold text-slate-800 text-sm">Automated Pipeline</span>
                </motion.div>
            </div>
         </div>

       </div>
    </SlideLayout>
  );
};

export default AutomationSlide;