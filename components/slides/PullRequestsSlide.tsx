import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const PullRequestsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Pull Requests (PRs)</span>
    </div>
  );

  const points = [
    "Pull requests are a collaborative mechanism for proposing, reviewing, and merging code changes from one branch into another.",
    "PRs provide visibility into changes, enable discussion, and enforce quality checks before integration.",
    "They are often integrated with CI pipelines to automatically run builds, tests, and security scans.",
    "Example: A developer submits a pull request to merge a feature branch into the develop branch. The PR triggers automated unit tests and static code analysis, and only after all checks pass can the code be approved and merged."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="36"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center gap-10 px-4">
        
        {/* Left: Text Content */}
        <div className="w-1/2 flex flex-col gap-4">
            {points.map((text, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="bg-white/60 p-3 rounded-xl border-l-4 border-green-500 shadow-sm"
                >
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Right: 3D PR Visualization */}
        <div className="w-1/2 h-full flex items-center justify-center perspective-1000 relative">
             <motion.div 
                className="relative w-80 h-96 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
                initial={{ rotateY: -15, rotateX: 5 }}
                animate={{ rotateY: -5, rotateX: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
             >
                {/* Header */}
                <div className="bg-slate-50 border-b border-slate-200 p-3 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 text-green-600">
                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                        <span className="text-xs font-bold text-slate-700">PR #42: Feature Login</span>
                    </div>
                    <div className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Open</div>
                </div>

                {/* Diff View */}
                <div className="flex-grow p-4 bg-slate-50 flex flex-col gap-2 font-mono text-[8px] overflow-hidden">
                    <div className="flex bg-red-50 text-red-700 p-1 rounded border border-red-100 opacity-50">
                        <span className="mr-2">-</span> const user = null;
                    </div>
                    <div className="flex bg-green-50 text-green-700 p-1 rounded border border-green-100 shadow-sm transform scale-105 origin-left">
                        <span className="mr-2">+</span> const user = authenticate(creds);
                    </div>
                     <div className="flex bg-green-50 text-green-700 p-1 rounded border border-green-100 shadow-sm">
                        <span className="mr-2">+</span> if (user) login();
                    </div>
                    
                    {/* Floating Comments */}
                    <motion.div 
                        className="absolute right-4 top-24 bg-blue-600 text-white p-2 rounded-lg shadow-lg max-w-[120px] z-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        style={{ translateZ: 30 }}
                    >
                         <p className="text-[8px] leading-tight">LGTM! Tests passed.</p>
                         <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-200 rounded-full border-2 border-white"></div>
                    </motion.div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white border-t border-slate-200 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px]">✓</div>
                        <span className="text-[10px] text-slate-500">All checks passed</span>
                    </div>
                    <motion.button 
                        className="w-full bg-green-600 text-white py-2 rounded-lg text-xs font-bold shadow-md"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Merge Pull Request
                    </motion.button>
                </div>
             </motion.div>

             {/* Background Elements */}
             <div className="absolute top-10 -right-10 w-24 h-24 bg-green-400 rounded-full blur-3xl opacity-20"></div>
             <div className="absolute bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

        </div>
      </div>
    </SlideLayout>
  );
};

export default PullRequestsSlide;