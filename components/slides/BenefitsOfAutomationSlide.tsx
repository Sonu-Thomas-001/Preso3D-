import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const BenefitsOfAutomationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Benefits of Automation</span>
    </div>
  );

  const benefits = [
    { 
        title: "Time to Market", 
        desc: "Accelerate release cycles from months to hours.",
        icon: "⚡", 
        gradient: "from-blue-500 to-cyan-400",
        shadow: "shadow-blue-500/30" 
    },
    { 
        title: "Efficiency", 
        desc: "Eliminate manual toil and repetitive tasks.",
        icon: "⚙️", 
        gradient: "from-purple-500 to-fuchsia-400",
        shadow: "shadow-purple-500/30" 
    },
    { 
        title: "Scalability", 
        desc: "Infrastructure that grows with demand automatically.",
        icon: "📈", 
        gradient: "from-emerald-500 to-green-400",
        shadow: "shadow-emerald-500/30" 
    },
    { 
        title: "Cost Savings", 
        desc: "Optimize resource usage and reduce operational waste.",
        icon: "💰", 
        gradient: "from-amber-500 to-orange-400",
        shadow: "shadow-amber-500/30" 
    },
    { 
        title: "Collaboration", 
        desc: "Unified workflows for Dev, Ops, and QA teams.",
        icon: "🤝", 
        gradient: "from-teal-500 to-cyan-400",
        shadow: "shadow-teal-500/30" 
    },
    { 
        title: "Reliability", 
        desc: "Consistent, repeatable configurations every time.",
        icon: "🛡️", 
        gradient: "from-rose-500 to-red-400",
        shadow: "shadow-rose-500/30" 
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="14"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center perspective-1000 overflow-visible relative">
        
        {/* Background Decor */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-green-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>

        {/* Isometric Grid Container */}
        <motion.div 
            className="grid grid-cols-3 gap-6 w-full max-w-5xl px-8"
            initial={{ rotateX: 20, rotateZ: -2, y: 50, opacity: 0 }}
            animate={{ rotateX: 10, rotateZ: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {benefits.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                        delay: index * 0.1, 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15 
                    }}
                    whileHover={{ 
                        scale: 1.05, 
                        z: 30,
                        rotateX: -5,
                        transition: { duration: 0.2 } 
                    }}
                    className={`
                        relative h-48 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 
                        shadow-xl ${item.shadow} flex flex-col items-center justify-center p-6 text-center
                        group cursor-pointer overflow-hidden
                    `}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}></div>

                    {/* Icon Bubble */}
                    <div className={`
                        w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} 
                        flex items-center justify-center text-2xl shadow-lg mb-4
                        transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300
                    `}>
                        <span className="drop-shadow-md text-white">{item.icon}</span>
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-extrabold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed">
                        {item.desc}
                    </p>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
                </motion.div>
            ))}
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default BenefitsOfAutomationSlide;