import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const VirtualMachinesDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Virtual Machine Architecture</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="41"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col items-center justify-center perspective-1000 relative">
        
        {/* 3D Stack Container */}
        <motion.div 
            className="relative w-[500px] h-[400px] flex flex-col justify-end items-center"
            initial={{ rotateX: 20, rotateY: 0 }}
            animate={{ rotateX: 10, rotateY: 10 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* 1. Host Hardware (Base) */}
            <motion.div 
                className="w-full h-16 bg-slate-800 rounded-lg shadow-2xl border-b-8 border-slate-900 flex items-center justify-center relative z-10"
                style={{ transform: 'translateZ(0px)' }}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
                <div className="text-slate-400 font-bold tracking-widest uppercase">Host Hardware</div>
                {/* Side Faces for 3D effect */}
                <div className="absolute -right-2 top-2 h-full w-2 bg-slate-700 transform skew-y-12 origin-top-left"></div>
                <div className="absolute -top-2 left-2 w-full h-2 bg-slate-600 transform skew-x-12 origin-bottom-left"></div>
            </motion.div>

            {/* 2. Host OS */}
            <motion.div 
                className="w-[95%] h-12 bg-blue-600 rounded-lg shadow-lg border-b-4 border-blue-800 flex items-center justify-center relative z-20 -mt-2"
                style={{ transform: 'translateZ(20px)' }}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
                 <div className="text-white font-bold tracking-wide uppercase text-sm">Host Operating System</div>
                 <div className="absolute -right-2 top-2 h-full w-2 bg-blue-700 transform skew-y-12 origin-top-left"></div>
            </motion.div>

            {/* 3. Hypervisor */}
            <motion.div 
                className="w-[90%] h-12 bg-green-500 rounded-lg shadow-lg border-b-4 border-green-700 flex items-center justify-center relative z-30 -mt-2"
                style={{ transform: 'translateZ(40px)' }}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
                 <div className="text-white font-bold tracking-wide uppercase text-sm">Hypervisor</div>
                 <div className="absolute -right-2 top-2 h-full w-2 bg-green-600 transform skew-y-12 origin-top-left"></div>
            </motion.div>

            {/* 4. VMs Layer (Multiple Blocks) */}
            <div className="w-[90%] flex justify-between gap-4 -mt-2 relative z-40 px-2">
                {[1, 2, 3].map((num, i) => (
                    <motion.div 
                        key={i}
                        className="flex-1 flex flex-col"
                        style={{ transform: 'translateZ(60px)' }}
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                         {/* Guest OS (Heavy) */}
                         <div className="h-16 bg-slate-200 border-2 border-slate-300 rounded-b-lg flex items-center justify-center relative group">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Guest OS</span>
                            <div className="absolute -right-1 top-1 h-full w-1 bg-slate-300 transform skew-y-12 origin-top-left"></div>
                         </div>
                         
                         {/* App */}
                         <div className="h-12 bg-white border-2 border-slate-100 rounded-t-lg shadow-sm flex items-center justify-center relative -mb-1 z-50">
                            <span className="text-xs font-black text-slate-700">VM {num}</span>
                            <div className="absolute -right-1 top-1 h-full w-1 bg-slate-100 transform skew-y-12 origin-top-left"></div>
                            <div className="absolute -top-1 left-1 w-full h-1 bg-slate-50 transform skew-x-12 origin-bottom-left"></div>
                         </div>
                    </motion.div>
                ))}
            </div>

            {/* Connectors (Visual only) */}
            <div className="absolute top-0 right-[-120px] h-full flex flex-col justify-center gap-4">
                 <div className="bg-white/80 p-2 rounded text-xs text-slate-600 shadow-sm border border-slate-200 w-28">
                    Hardware Level
                 </div>
                 <div className="bg-white/80 p-2 rounded text-xs text-slate-600 shadow-sm border border-slate-200 w-28">
                    Software Layer
                 </div>
                 <div className="bg-white/80 p-2 rounded text-xs text-slate-600 shadow-sm border border-slate-200 w-28">
                    Virtual Machines
                 </div>
            </div>

        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default VirtualMachinesDiagramSlide;