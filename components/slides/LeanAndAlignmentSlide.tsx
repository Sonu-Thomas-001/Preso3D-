import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const LeanAndAlignmentSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Lean & Alignment</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="30"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full gap-6 px-4">
        
        {/* Top: LEAN (Waste Reduction) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 items-center bg-white rounded-2xl p-5 shadow-md border-l-4 border-red-500 relative overflow-hidden"
        >
            <div className="w-1/4 flex flex-col items-center justify-center border-r border-slate-100 pr-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-3xl mb-2">🗑️</div>
                <h3 className="text-lg font-black text-slate-800">LEAN</h3>
                <span className="text-[10px] font-bold text-red-500 uppercase">Eliminate Waste</span>
            </div>
            
            <div className="w-3/4 flex flex-col gap-2">
                 <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lean principles maximize customer value by optimizing processes and removing non-value-adding activities. In software, this means faster feedback, reduced handoffs, and continuous learning.
                 </p>
                 <div className="flex items-center gap-2 mt-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                     <span className="text-lg">💡</span>
                     <p className="text-xs text-slate-500 italic">
                        "Automating tests to remove manual approval delays reduces cycle time from weeks to hours."
                     </p>
                 </div>
            </div>

            {/* Visual Funnel Graphic */}
            <div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9-4.03-9-9-4.97 0-9 4.03-9 9 4.97 0 9 4.03 9 9zm0-2c-3.87 0-7-3.13-7-7 3.87 0 7-3.13 7-7 3.87 0 7 3.13 7 7-3.87 0-7 3.13-7 7z"/></svg>
            </div>
        </motion.div>

        {/* Bottom: ALIGNMENT (Gears) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-grow flex gap-6 items-center bg-white rounded-2xl p-5 shadow-md border-l-4 border-blue-500 relative overflow-hidden"
        >
            <div className="w-3/4 flex flex-col gap-3 z-10">
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                    Aligning DevOps with Agile
                </h3>
                 <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    DevOps extends Agile practices beyond development into operations. While Agile ensures rapid, iterative coding, DevOps ensures reliable building, testing, and deployment via automation.
                 </p>
                 <div className="grid grid-cols-2 gap-4 mt-2">
                     <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                         <span className="block text-[10px] font-bold text-blue-600 uppercase">Agile Input</span>
                         <span className="text-xs text-slate-700">Feature completed in Sprint</span>
                     </div>
                     <div className="bg-green-50 p-2 rounded-lg border border-green-100">
                         <span className="block text-[10px] font-bold text-green-600 uppercase">DevOps Output</span>
                         <span className="text-xs text-slate-700">Auto-deployed to Prod</span>
                     </div>
                 </div>
            </div>

            <div className="w-1/4 flex items-center justify-center relative">
                 {/* Animated Gears */}
                 <div className="relative w-24 h-24">
                     <motion.div 
                        className="absolute top-0 left-0 w-14 h-14 bg-blue-500 rounded-full border-4 border-dashed border-white shadow-lg"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                     />
                     <motion.div 
                        className="absolute bottom-0 right-0 w-14 h-14 bg-green-500 rounded-full border-4 border-dashed border-white shadow-lg"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                     />
                 </div>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default LeanAndAlignmentSlide;