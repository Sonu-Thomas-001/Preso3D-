import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const TestingAndDeploymentPhaseSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Phases: Testing & Deployment</span>
    </div>
  );

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 }
    })
  };

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="23"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-6 perspective-1000 px-4">
        
        {/* Testing Phase */}
        <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-1/2 h-full max-h-[450px] bg-white rounded-2xl border border-purple-100 shadow-xl flex flex-col overflow-hidden relative group"
        >
            {/* Header */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-5 flex justify-between items-center">
                <h3 className="text-white text-xl font-bold">04. Testing</h3>
                <span className="text-3xl">🧪</span>
            </div>

            <div className="p-6 flex flex-col gap-4 relative z-10">
                <p className="text-sm text-slate-600 font-medium">
                    Validate functionality, performance, and security <strong>early and continuously</strong>.
                </p>
                
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                    <h4 className="text-xs font-bold text-purple-700 uppercase mb-2">Key Actions</h4>
                    <ul className="space-y-2">
                        <li className="flex gap-2 text-xs text-slate-600 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Automated Unit & Integration Tests
                        </li>
                        <li className="flex gap-2 text-xs text-slate-600 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Security Scans (SAST/DAST)
                        </li>
                        <li className="flex gap-2 text-xs text-slate-600 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Regression Testing
                        </li>
                    </ul>
                </div>

                <div className="mt-2 text-xs text-slate-500 italic border-l-2 border-purple-300 pl-3">
                    "Pipeline fails immediately if vulnerabilities or test failures are detected."
                </div>
            </div>

            {/* Decor */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
        </motion.div>

        {/* Deployment Phase */}
        <motion.div 
             custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-1/2 h-full max-h-[450px] bg-white rounded-2xl border border-teal-100 shadow-xl flex flex-col overflow-hidden relative group"
        >
             {/* Header */}
             <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-5 flex justify-between items-center">
                <h3 className="text-white text-xl font-bold">05. Deployment</h3>
                <span className="text-3xl">🚀</span>
            </div>

            <div className="p-6 flex flex-col gap-4 relative z-10">
                 <p className="text-sm text-slate-600 font-medium">
                    Enable <strong>continuous delivery</strong> through automated, reliable release pipelines.
                </p>

                <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                    <h4 className="text-xs font-bold text-teal-700 uppercase mb-2">Key Strategies</h4>
                    <ul className="space-y-2">
                        <li className="flex gap-2 text-xs text-slate-600 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Infrastructure as Code (IaC)
                        </li>
                        <li className="flex gap-2 text-xs text-slate-600 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Blue-Green Deployments
                        </li>
                        <li className="flex gap-2 text-xs text-slate-600 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Canary Releases
                        </li>
                    </ul>
                </div>

                 <div className="mt-2 text-xs text-slate-500 italic border-l-2 border-teal-300 pl-3">
                    "Traffic gradually shifts to the new version after validation, minimizing risk."
                </div>
            </div>

             {/* Decor */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default TestingAndDeploymentPhaseSlide;