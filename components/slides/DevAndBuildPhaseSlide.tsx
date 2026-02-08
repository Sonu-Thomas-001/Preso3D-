import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevAndBuildPhaseSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Phases: Development & Build</span>
    </div>
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 }
    })
  };

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="21"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-8 perspective-1000 px-4">
        
        {/* Development Phase Card */}
        <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-1/2 h-[85%] bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-100 shadow-xl flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 relative"
        >
            {/* Header/Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 text-6xl opacity-10 rotate-12 transform translate-x-2 -translate-y-2">
                    💻
                </div>
                <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                    <span className="bg-white/20 p-2 rounded-lg text-lg">02</span>
                    Development
                </h3>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow relative z-10">
                 {/* Visual Decoration */}
                 <div className="absolute right-4 top-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                 </div>

                <div className="space-y-4 text-sm text-slate-600 font-medium">
                    <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <p>Integrate <strong>Continuous Integration (CI)</strong> to frequently commit, build, and validate code changes.</p>
                    </div>
                    <div className="flex gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <p>Use <strong>VCS (Git)</strong> for collaboration, branching, and automated quality checks.</p>
                    </div>
                </div>

                <div className="mt-auto bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">Example Workflow</span>
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                        "Developers push code to Git repo → triggers automated CI pipeline → compiles app & runs unit tests."
                    </p>
                </div>
            </div>
            
             {/* Hover Glow */}
             <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full group-hover:bg-blue-400/30 transition-colors"></div>
        </motion.div>

        {/* Build Phase Card */}
        <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-1/2 h-[85%] bg-white/80 backdrop-blur-xl rounded-2xl border border-orange-100 shadow-xl flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 relative"
        >
            {/* Header/Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 text-6xl opacity-10 rotate-12 transform translate-x-2 -translate-y-2">
                    🏗️
                </div>
                <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                    <span className="bg-white/20 p-2 rounded-lg text-lg">03</span>
                    Build
                </h3>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow relative z-10">
                 {/* Visual Decoration */}
                 <div className="absolute right-4 top-4 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center opacity-50 group-hover:rotate-90 transition-transform duration-700">
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>

                <div className="space-y-4 text-sm text-slate-600 font-medium">
                    <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <p>Emphasize <strong>automation and standardization</strong> to create reliable, repeatable builds.</p>
                    </div>
                    <div className="flex gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <p>Use CI servers to package apps (e.g., <strong>Docker containers</strong>) ensuring consistency across environments.</p>
                    </div>
                </div>

                <div className="mt-auto bg-orange-50 p-4 rounded-xl border border-orange-100">
                     <span className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1 block">Example Workflow</span>
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                        "CI pipeline uses Docker to build app image → same image runs in Dev, Test, & Prod."
                    </p>
                </div>
            </div>

            {/* Hover Glow */}
             <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-400/20 blur-3xl rounded-full group-hover:bg-orange-400/30 transition-colors"></div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DevAndBuildPhaseSlide;