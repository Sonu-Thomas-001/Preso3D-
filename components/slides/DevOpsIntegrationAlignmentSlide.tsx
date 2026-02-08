import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevOpsIntegrationAlignmentSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Integration & Alignment</span>
    </div>
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
    })
  };

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="26"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col gap-6 relative z-10 px-4">
        
        {/* Top Section: Integration & Transformation */}
        <div className="flex gap-6 h-[45%]">
             <motion.div 
                custom={0}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="w-1/2 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 flex flex-col justify-center relative overflow-hidden group"
             >
                <div className="absolute right-0 top-0 opacity-10 text-8xl transform translate-x-4 -translate-y-4 group-hover:rotate-12 transition-transform duration-700">🧩</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">🔗</span>
                    SDLC Integration
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify relative z-10">
                    By integrating DevOps practices across all SDLC phases, organizations achieve faster delivery, improved collaboration, higher software quality, and better alignment between business objectives and technical execution.
                </p>
             </motion.div>

             <motion.div 
                custom={1}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="w-1/2 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border-l-4 border-purple-500 flex flex-col justify-center relative overflow-hidden group"
             >
                <div className="absolute right-0 top-0 opacity-10 text-8xl transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">🔄</div>
                 <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">🦋</span>
                    Transformation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify relative z-10">
                    DevOps transforms the SDLC from a linear process into a continuous, feedback-driven lifecycle that supports scalable, resilient, and customer-focused software development.
                </p>
             </motion.div>
        </div>

        {/* Bottom Section: Alignment with Agile */}
        <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="flex-grow bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100 relative overflow-hidden"
        >
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-green-200/50 -translate-y-1/2"></div>
            <motion.div 
                className="absolute top-1/2 left-0 w-20 h-1 bg-green-500 blur-sm -translate-y-1/2"
                animate={{ x: ["0%", "1000%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <h3 className="text-[#15803d] text-lg font-bold mb-4 relative z-10 flex items-center gap-2">
                <span className="bg-white p-1 rounded-md shadow-sm text-xl">🤝</span>
                Agile & DevOps Alignment
            </h3>
            
            <div className="grid grid-cols-3 gap-8 relative z-10">
                <div className="bg-white/60 p-3 rounded-xl border border-white shadow-sm">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Concept</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                        Agile and DevOps are complementary approaches that together enable organizations to deliver software rapidly, reliably, and continuously.
                    </p>
                </div>
                <div className="bg-white/60 p-3 rounded-xl border border-white shadow-sm">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Focus</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                        Agile focuses on <span className="font-semibold text-blue-600">development</span> methodology. DevOps focuses on <span className="font-semibold text-green-600">deployment & operations</span>.
                    </p>
                </div>
                <div className="bg-white/60 p-3 rounded-xl border border-white shadow-sm">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Outcome</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                        Aligned effectively, they create an end-to-end delivery model supporting continuous improvement and operational stability.
                    </p>
                </div>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsIntegrationAlignmentSlide;