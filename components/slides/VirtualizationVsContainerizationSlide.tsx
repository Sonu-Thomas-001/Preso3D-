import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const VirtualizationVsContainerizationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Virt vs Containerization</span>
    </div>
  );

  const points = [
    "Virtualization involves running multiple VMs on a single physical server using a hypervisor. Each VM includes a full Guest OS, making them isolated but resource-heavy.",
    "Containerization packages apps and dependencies into lightweight containers sharing the Host OS kernel. They start fast, use fewer resources, but have slightly weaker isolation."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="40"
      isPresenting={isPresenting}
    >
      <div className="flex h-full gap-8 px-4 items-center perspective-1000">
        
        {/* Left Column: Comparison Visuals */}
        <div className="w-3/5 h-[400px] flex items-end justify-center gap-12 relative">
            
            {/* VM Stack (Heavy) */}
            <motion.div 
                className="w-40 flex flex-col items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* App Layer */}
                <div className="w-full h-16 bg-blue-500 rounded-t-lg border-2 border-blue-600 flex items-center justify-center text-white font-bold shadow-lg z-40 relative">
                    App A
                    <div className="absolute top-1 right-2 text-[8px] opacity-70">VM 1</div>
                </div>
                {/* Guest OS (The Weight) */}
                <div className="w-full h-24 bg-slate-600 border-x-2 border-slate-700 flex items-center justify-center text-slate-300 font-bold text-sm shadow-inner z-30 relative">
                    Guest OS
                    <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-red-500 text-white text-[9px] px-1 rounded rotate-90 origin-bottom">Heavy</div>
                </div>
                {/* Hypervisor */}
                <div className="w-full h-12 bg-green-600 border-x-2 border-green-700 flex items-center justify-center text-white font-bold text-sm z-20">
                    Hypervisor
                </div>
                {/* Infrastructure */}
                <div className="w-44 h-12 bg-slate-800 rounded-b-lg border-2 border-slate-900 flex items-center justify-center text-slate-400 font-bold text-xs z-10 -mx-2">
                    Infrastructure
                </div>
                
                <h3 className="mt-4 font-bold text-slate-700">Virtual Machines</h3>
            </motion.div>


            {/* Container Stack (Light) */}
            <motion.div 
                className="w-40 flex flex-col items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Apps (Side by Side) */}
                <div className="w-full flex gap-1 z-40">
                    <div className="w-1/2 h-16 bg-blue-500 rounded-t-lg border-2 border-blue-600 flex items-center justify-center text-white font-bold shadow-lg">App A</div>
                    <div className="w-1/2 h-16 bg-blue-500 rounded-t-lg border-2 border-blue-600 flex items-center justify-center text-white font-bold shadow-lg">App B</div>
                </div>
                
                {/* Container Engine */}
                <div className="w-full h-12 bg-blue-400 border-x-2 border-blue-500 flex items-center justify-center text-white font-bold text-sm z-30">
                    Docker Engine
                </div>
                
                {/* Host OS (Shared) */}
                <div className="w-full h-12 bg-slate-400 border-x-2 border-slate-500 flex items-center justify-center text-white font-bold text-sm z-20">
                    Host OS
                </div>

                {/* Infrastructure */}
                <div className="w-44 h-12 bg-slate-800 rounded-b-lg border-2 border-slate-900 flex items-center justify-center text-slate-400 font-bold text-xs z-10 -mx-2">
                    Infrastructure
                </div>

                <h3 className="mt-4 font-bold text-slate-700">Containers</h3>
            </motion.div>

        </div>

        {/* Right Column: Text Points */}
        <div className="w-2/5 flex flex-col gap-6">
             {points.map((text, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.2) }}
                    className="bg-white/80 p-4 rounded-xl shadow-md border-l-4 border-[#46c256]"
                >
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </motion.div>
            ))}
            
            <motion.div 
                className="mt-4 p-3 bg-slate-100 rounded-lg border border-slate-200 text-xs italic text-slate-600"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            >
                "Containers start in seconds vs Minutes for VMs."
            </motion.div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default VirtualizationVsContainerizationSlide;