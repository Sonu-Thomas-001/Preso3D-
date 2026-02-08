import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SlideLayoutProps {
  title: React.ReactNode; // Changed to Node to allow complex titles
  subtitle?: string; // Added optional subtitle support
  titleColor?: 'blue' | 'green';
  id?: string;
  isPresenting?: boolean;
  children: React.ReactNode;
  noContentPadding?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.4 }
  }
};

const GuviHclLogo = () => (
  <div className="flex items-center gap-2 select-none">
    {/* GUVI Logo */}
    <div className="flex items-center gap-1">
      <div className="w-6 h-6 rounded-full bg-[#46c256] text-white flex items-center justify-center font-bold text-[10px] shadow-sm leading-none pt-0.5">
        8
      </div>
      <span className="font-bold text-slate-800 tracking-tight text-lg">GUVI</span>
    </div>
    
    {/* Separator */}
    <span className="text-slate-300 font-light text-xl mx-1">|</span>
    
    {/* HCL Logo */}
    <span className="font-extrabold text-[#00529b] italic text-xl tracking-wide">HCL</span>
  </div>
);

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  title, 
  subtitle,
  titleColor = 'green',
  id, 
  isPresenting = false, 
  children,
  noContentPadding = false
}) => {
  const titleColorClass = titleColor === 'blue' ? 'text-[#00529b]' : 'text-[#46c256]';

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full h-full relative overflow-hidden flex flex-col bg-white ${
        isPresenting ? 'rounded-none shadow-none' : 'rounded-xl border border-gray-200 shadow-2xl'
      }`}
    >
      {/* --- Header --- */}
      <div className="px-8 pt-6 pb-2 flex justify-between items-start shrink-0 z-20 bg-white">
        <div className="flex flex-col">
          <motion.div variants={itemVariants} className={`text-3xl font-bold tracking-tight ${titleColorClass}`}>
            {title}
          </motion.div>
          {subtitle && (
            <motion.div variants={itemVariants} className="text-lg text-slate-500 font-medium mt-1">
              {subtitle}
            </motion.div>
          )}
        </div>
        
        <motion.div variants={itemVariants}>
          <GuviHclLogo />
        </motion.div>
      </div>

      {/* --- Content Area --- */}
      <div className={`flex-grow relative z-10 overflow-hidden flex flex-col ${noContentPadding ? '' : 'px-12 py-4'}`}>
         <motion.div variants={itemVariants} className="h-full w-full">
             {children}
         </motion.div>
      </div>

      {/* --- Footer --- */}
      <motion.div 
          variants={itemVariants} 
          className="h-8 bg-[#46c256] flex items-center justify-between px-4 text-white text-[9px] font-semibold tracking-wide shrink-0 z-20 relative"
      >
          <div className="flex-1 truncate text-center sm:text-left">
             GUVI - Grab Ur Vernacular Imprint - TRUSTED BY 2 MILLION+ LEARNERS | 1000 Hiring Partners | 100+ Education Institutions
          </div>
          <div className="bg-white text-[#46c256] px-1.5 py-0.5 text-[8px] rounded ml-2 font-bold min-w-[30px] text-center hidden sm:block">
            www.guvi.in
          </div>
      </motion.div>
    </motion.div>
  );
};

export default SlideLayout;