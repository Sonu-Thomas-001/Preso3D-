import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const GitFlowWorkflowSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">GitFlow Workflow</span>
    </div>
  );

  const branches = [
    {
        title: "Main / Master",
        desc: "Stores the official release history. Only production-ready code exists here.",
        color: "bg-blue-50 border-blue-200 text-blue-700",
        icon: "🛡️"
    },
    {
        title: "Develop",
        desc: "Integration branch for features. Serves as the source for release branches.",
        color: "bg-purple-50 border-purple-200 text-purple-700",
        icon: "⚡"
    },
    {
        title: "Feature Branches",
        desc: "Branched off Develop. Used for new features. Merged back into Develop.",
        color: "bg-green-50 border-green-200 text-green-700",
        icon: "✨"
    },
    {
        title: "Release & Hotfix",
        desc: "Release preps for production. Hotfix patches production directly.",
        color: "bg-orange-50 border-orange-200 text-orange-700",
        icon: "🔥"
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="32"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center justify-center px-4 relative">
        
        {/* Intro Text */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl text-center mb-8"
        >
            <p className="text-slate-600 text-sm md:text-base font-medium">
                GitFlow is a robust branching model designed for project releases. It assigns very specific roles to different branches and defines how they interact.
            </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {branches.map((branch, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-5 rounded-2xl border-l-8 shadow-md bg-white ${branch.color.split(' ')[1]} flex gap-4 items-start`}
                >
                    <div className="text-3xl bg-white/50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                        {branch.icon}
                    </div>
                    <div>
                        <h3 className={`text-lg font-bold mb-1 ${branch.color.split(' ')[2]}`}>{branch.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            {branch.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Example Box */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-3 shadow-inner max-w-3xl"
        >
             <span className="text-xl">💡</span>
             <p className="text-xs text-slate-500 italic">
                Example: Team works on <span className="font-mono text-green-600">feature/login</span> → Merges to <span className="font-mono text-purple-600">develop</span> → Creates <span className="font-mono text-orange-600">release/1.0</span> → Finalizes into <span className="font-mono text-blue-600">master</span>.
             </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default GitFlowWorkflowSlide;