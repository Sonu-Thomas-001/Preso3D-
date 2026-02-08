import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const EfficiencyScalabilityBenefitsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Efficiency & Scalability</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="46"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-8 px-8 perspective-1000">
        
        {/* 1. EFFICIENCY CARD */}
        <motion.div 
            className="w-1/2 h-full max-h-[500px] bg-white rounded-3xl border-2 border-emerald-100 shadow-2xl overflow-hidden relative group cursor-default"
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
             {/* Header */}
             <div className="bg-emerald-50 p-6 flex items-center justify-between border-b border-emerald-100">
                 <h2 className="text-2xl font-black text-emerald-800">EFFICIENCY</h2>
                 <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    ⚡
                 </div>
             </div>
             
             {/* Content */}
             <div className="p-8 flex flex-col gap-6">
                <p className="text-slate-600 leading-relaxed text-sm">
                    Containerization maximizes resource utilization by sharing the OS kernel. This reduces CPU and memory overhead significantly compared to VMs.
                </p>
                
                {/* Visual Data */}
                <div className="flex items-end gap-4 h-24 mt-4 border-b border-slate-200 pb-2">
                    <div className="w-1/2 flex flex-col justify-end gap-1">
                        <motion.div initial={{ height: 0 }} animate={{ height: '30%' }} transition={{ delay: 0.5 }} className="w-full bg-slate-300 rounded-t-lg relative group-hover:bg-red-300 transition-colors">
                            <span className="absolute -top-5 left-0 right-0 text-center text-[10px] font-bold text-slate-500">10 VMs</span>
                        </motion.div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-end gap-1">
                        <motion.div initial={{ height: 0 }} animate={{ height: '90%' }} transition={{ delay: 0.8 }} className="w-full bg-emerald-500 rounded-t-lg relative shadow-lg">
                            <span className="absolute -top-5 left-0 right-0 text-center text-[10px] font-bold text-emerald-600">50 Containers</span>
                        </motion.div>
                    </div>
                </div>
                <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Apps per Server</div>
             </div>
        </motion.div>

        {/* 2. SCALABILITY CARD */}
        <motion.div 
            className="w-1/2 h-full max-h-[500px] bg-white rounded-3xl border-2 border-blue-100 shadow-2xl overflow-hidden relative group cursor-default"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
             whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
             {/* Header */}
             <div className="bg-blue-50 p-6 flex items-center justify-between border-b border-blue-100">
                 <h2 className="text-2xl font-black text-blue-800">SCALABILITY</h2>
                 <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    📈
                 </div>
             </div>

             {/* Content */}
             <div className="p-8 flex flex-col gap-6">
                 <p className="text-slate-600 leading-relaxed text-sm">
                    Containers can spin up in milliseconds. This elasticity allows systems to automatically handle traffic spikes instantly.
                </p>

                {/* Visual Elasticity */}
                <div className="h-24 mt-4 flex items-center justify-center gap-2">
                    {[1, 2, 3].map(i => (
                        <motion.div 
                            key={i}
                            className="w-12 h-12 bg-blue-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold text-xs"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + (i * 0.2), type: "spring" }}
                        >
                            Node
                        </motion.div>
                    ))}
                    <motion.div 
                         className="w-12 h-12 bg-blue-200 rounded-lg border-2 border-dashed border-blue-400 flex items-center justify-center text-blue-400 font-bold text-xl"
                         animate={{ opacity: [0.2, 1, 0.2] }}
                         transition={{ duration: 2, repeat: Infinity }}
                    >+</motion.div>
                </div>
                <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Scaling</div>
             </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default EfficiencyScalabilityBenefitsSlide;