import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const CodeReviewsAndIntegrationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Quality & Integration</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="38"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-8 px-4 perspective-1000">
        
        {/* Card 1: Code Reviews */}
        <motion.div 
            className="w-1/2 h-full max-h-[450px] bg-white rounded-2xl border border-indigo-100 shadow-xl overflow-hidden relative group"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
            <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex justify-between items-center">
                <h3 className="text-indigo-900 font-bold text-lg">Code Reviews</h3>
                <span className="text-2xl">🧐</span>
            </div>
            
            <div className="p-6 relative z-10">
                <p className="text-sm text-slate-600 mb-4">
                    Ensures code meets standards for <span className="text-indigo-600 font-bold">readability, security, and performance</span>.
                </p>
                
                {/* Visual: Code Scanning */}
                <div className="relative bg-slate-900 rounded-lg p-3 font-mono text-[10px] text-slate-300 shadow-inner mb-4 overflow-hidden">
                    <div className="opacity-50">
                        function processData(data) {'{'}<br/>
                        &nbsp;&nbsp;if (!data) return;<br/>
                        &nbsp;&nbsp;// TODO: optimize loop<br/>
                        &nbsp;&nbsp;for(let i=0; i&lt;data.length; i++) {'{'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;save(data[i]);<br/>
                        &nbsp;&nbsp;{'}'}<br/>
                        {'}'}
                    </div>
                    {/* Scanner Bar */}
                    <motion.div 
                        className="absolute left-0 right-0 h-1 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Pop-up Comment */}
                    <motion.div 
                        className="absolute right-2 top-6 bg-yellow-100 text-yellow-800 p-1 rounded border border-yellow-300 text-[8px]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        Use for...of loop?
                    </motion.div>
                </div>

                <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded border border-slate-100 italic">
                    "Encourages knowledge sharing and reduces defects before merge."
                </div>
            </div>
        </motion.div>

        {/* Card 2: DevOps Integration */}
        <motion.div 
            className="w-1/2 h-full max-h-[450px] bg-white rounded-2xl border border-blue-100 shadow-xl overflow-hidden relative group"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex justify-between items-center">
                <h3 className="text-blue-900 font-bold text-lg">DevOps Integration</h3>
                <span className="text-2xl">♾️</span>
            </div>

            <div className="p-6 relative z-10">
                 <p className="text-sm text-slate-600 mb-4">
                    Tightly couples Git workflows with <span className="text-blue-600 font-bold">CI/CD & Automation</span>.
                </p>

                {/* Visual: Gears */}
                <div className="relative h-24 w-full flex items-center justify-center mb-4">
                    <motion.div 
                        className="w-16 h-16 border-4 border-dashed border-blue-400 rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    >
                        <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    </motion.div>
                    <motion.div 
                        className="w-12 h-12 border-4 border-dashed border-green-400 rounded-full flex items-center justify-center -ml-2"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    >
                         <div className="w-6 h-6 bg-green-100 rounded-full"></div>
                    </motion.div>
                </div>

                <ul className="space-y-2">
                    <li className="flex gap-2 items-center text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Branch policies enforce review requirements.
                    </li>
                    <li className="flex gap-2 items-center text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Automated tests must pass before merge.
                    </li>
                </ul>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default CodeReviewsAndIntegrationSlide;