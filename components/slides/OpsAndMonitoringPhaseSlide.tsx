import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const OpsAndMonitoringPhaseSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Phases: Operations & Monitoring</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="24"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-8 perspective-1000 px-4">
        
        {/* Operations Phase */}
        <motion.div 
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            className="w-1/2 h-[85%] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden relative"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            
            <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Phase 06</span>
                        <h3 className="text-white text-3xl font-bold mt-1">Operations</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                        <span className="text-2xl">⚙️</span>
                    </div>
                </div>

                <div className="space-y-6 flex-grow">
                     <p className="text-slate-300 text-sm leading-relaxed">
                        Ensure stable, efficient operations through <strong>proactive management</strong> and self-healing systems.
                    </p>
                    
                    {/* Visual: Server Rack */}
                    <div className="flex gap-2 justify-center py-4">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-16 h-24 rounded bg-slate-800 border border-slate-700 flex flex-col gap-1 p-1">
                                {[1,2,3,4,5].map(j => (
                                    <div key={j} className="h-1.5 w-full bg-slate-700 rounded-sm flex items-center px-0.5 gap-0.5">
                                        <div className="w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                        <p className="text-xs text-slate-400 italic">
                            "Auto-scaling cloud instances handle demand spikes without manual intervention."
                        </p>
                    </div>
                </div>
            </div>
             
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20"></div>
        </motion.div>

        {/* Monitoring Phase */}
        <motion.div 
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-1/2 h-[85%] bg-white rounded-2xl border border-slate-200 shadow-xl flex flex-col overflow-hidden relative"
        >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-400"></div>

             <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Phase 07</span>
                        <h3 className="text-slate-800 text-3xl font-bold mt-1">Monitoring</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/30">
                        <span className="text-2xl">📊</span>
                    </div>
                </div>

                 <div className="space-y-6 flex-grow">
                     <p className="text-slate-600 text-sm leading-relaxed">
                        Close the loop by collecting <strong>metrics, logs, and feedback</strong> to drive continuous improvement.
                    </p>

                    {/* Visual: Graph */}
                    <div className="relative h-24 w-full bg-slate-50 rounded-lg border border-slate-100 overflow-hidden flex items-end px-2">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <path d="M0 80 Q 50 70 100 40 T 200 30 T 300 60" fill="none" stroke="#f97316" strokeWidth="2" />
                            <path d="M0 80 Q 50 70 100 40 T 200 30 T 300 60 V 100 H 0 Z" fill="url(#gradOrange)" opacity="0.2" />
                             <defs>
                                <linearGradient id="gradOrange" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#f97316" />
                                    <stop offset="100%" stopColor="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="bg-orange-50 p-3 rounded border border-orange-100">
                        <p className="text-xs text-slate-500 italic">
                            "Performance metrics drive code optimization in the next sprint."
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default OpsAndMonitoringPhaseSlide;