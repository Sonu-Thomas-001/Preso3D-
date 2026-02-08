import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ContinuousDeliverySlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Continuous Delivery</span>
    </div>
  );

  const points = [
    "Continuous delivery keeps software in a deployable state at all times by automatically building, testing, and validating every code change.",
    "Changes are integrated frequently, tested thoroughly, and prepared for release through automated pipelines.",
    "This reduces release risk by promoting smaller, incremental changes, enabling faster time-to-market and improved quality."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="15"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full gap-4 pt-2">
        
        {/* Top: Explanation Cards */}
        <div className="grid grid-cols-3 gap-4 z-10">
            {points.map((text, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#46c256]"
                >
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Bottom: 3D Pipeline Visualization */}
        <div className="flex-grow relative flex items-center justify-center overflow-hidden perspective-1000">
            
            {/* The Conveyor Belt */}
            <div className="relative w-full h-32 bg-slate-100 rounded-lg transform rotate-x-12 flex items-center border-y-4 border-slate-300 shadow-inner overflow-hidden">
                {/* Moving Packages */}
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-xl flex items-center justify-center border border-white/20 z-10"
                        initial={{ x: -100, rotateY: 20 }}
                        animate={{ x: 1200 }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 1, // Stagger packages
                        }}
                    >
                        <span className="text-white font-bold text-xs">Build</span>
                        <div className="absolute -bottom-2 w-full h-2 bg-black/20 blur-sm rounded-full"></div>
                    </motion.div>
                ))}

                {/* Processing Stations */}
                <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-yellow-400 opacity-50 z-0"></div>
                <div className="absolute left-1/4 top-2 text-[10px] font-bold text-slate-400 -translate-x-1/2">TEST</div>
                
                <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-green-400 opacity-50 z-0"></div>
                <div className="absolute left-1/2 top-2 text-[10px] font-bold text-slate-400 -translate-x-1/2">VALIDATE</div>

                <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-blue-400 opacity-50 z-0"></div>
                <div className="absolute left-3/4 top-2 text-[10px] font-bold text-slate-400 -translate-x-1/2">STAGE</div>

            </div>

             {/* Background Glow */}
             <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-green-50 to-transparent opacity-50 pointer-events-none"></div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default ContinuousDeliverySlide;