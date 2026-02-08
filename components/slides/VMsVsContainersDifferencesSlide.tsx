import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const VMsVsContainersDifferencesSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Key Differences</span>
    </div>
  );

  const cards = [
    {
        title: "Architecture",
        vm: "Heavy. Includes full Guest OS.",
        container: "Light. Shares Host Kernel.",
        icon: "🏗️",
        color: "blue"
    },
    {
        title: "Isolation",
        vm: "Strong. Hardware-level isolation.",
        container: "Weaker. Process-level isolation.",
        icon: "🔒",
        color: "purple"
    },
    {
        title: "Performance",
        vm: "Slower boot (minutes). High overhead.",
        container: "Instant boot (seconds). Low overhead.",
        icon: "⚡",
        color: "amber"
    },
    {
        title: "Use Case",
        vm: "Legacy apps, multi-OS needs.",
        container: "Microservices, Cloud-Native.",
        icon: "🎯",
        color: "green"
    },
    {
        title: "Portability",
        vm: "Low. Large image sizes.",
        container: "High. Run anywhere.",
        icon: "📦",
        color: "teal"
    },
    {
        title: "Scaling",
        vm: "Slow. Requires provisioning.",
        container: "Rapid. Elastic scaling.",
        icon: "📈",
        color: "rose"
    }
  ];

  const getColorClass = (color: string) => {
      const map: any = {
          blue: "border-blue-500 bg-blue-50",
          purple: "border-purple-500 bg-purple-50",
          amber: "border-amber-500 bg-amber-50",
          green: "border-green-500 bg-green-50",
          teal: "border-teal-500 bg-teal-50",
          rose: "border-rose-500 bg-rose-50"
      };
      return map[color];
  };

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="44"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center px-4">
        
        <div className="grid grid-cols-3 gap-6 w-full max-w-5xl h-[85%]">
            {cards.map((card, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={`relative rounded-2xl border-t-8 shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col justify-between ${getColorClass(card.color)}`}
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">{card.title}</h3>
                        <div className="text-3xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">{card.icon}</div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                         <div className="bg-white/60 p-2 rounded-lg border border-slate-200/50">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Virtual Machine</span>
                            <p className="text-xs text-slate-700 font-medium">{card.vm}</p>
                         </div>
                         <div className="bg-white p-2 rounded-lg border border-white shadow-sm transform translate-x-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Container</span>
                            <p className="text-xs text-slate-800 font-bold">{card.container}</p>
                         </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </SlideLayout>
  );
};

export default VMsVsContainersDifferencesSlide;