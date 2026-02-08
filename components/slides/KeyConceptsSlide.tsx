import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const KeyConceptsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Key Concepts</span>
    </div>
  );

  const points = [
    { text: "Collaboration is a foundational DevOps principle that emphasizes breaking down silos between development, operations, quality assurance, and security teams.", highlight: "Breaking Silos" },
    { text: "Instead of working in isolation, teams share responsibility for the entire application lifecycle—from design and development to deployment and ongoing operations.", highlight: "Shared Responsibility" },
    { text: "This collaborative culture improves communication, transparency, and accountability, enabling faster decision-making and reduced handoff delays.", highlight: "Communication" },
    { text: "Practices such as cross-functional teams, shared dashboards, common goals (for example, service reliability and deployment success), and blameless post-incident reviews help build trust.", highlight: "Trust & Goals" }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="11"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center gap-12 px-4 perspective-1000">
        
        {/* Left: 3D Concept Graphic */}
        <div className="w-1/3 flex items-center justify-center relative h-full">
            <motion.div 
                className="relative w-64 h-64"
                initial={{ rotateY: -30, rotateX: 10 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                 {/* Central Collaboration Sphere */}
                 <div className="absolute inset-0 m-auto w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-green-500 shadow-2xl flex items-center justify-center z-10 opacity-90 backdrop-blur-md border-4 border-white/20">
                    <span className="text-white font-bold text-lg drop-shadow-md">Collaboration</span>
                 </div>
                 
                 {/* Orbiting Elements */}
                 <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                 />
                 <motion.div 
                    className="absolute -inset-8 rounded-full border border-slate-200 opacity-50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                 />

                 {/* Floating Badges */}
                 <motion.div className="absolute top-0 right-0 bg-white p-2 rounded-lg shadow-lg text-xs font-bold text-slate-600" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>Dev</motion.div>
                 <motion.div className="absolute bottom-0 left-0 bg-white p-2 rounded-lg shadow-lg text-xs font-bold text-slate-600" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>Ops</motion.div>
                 <motion.div className="absolute top-0 left-0 bg-white p-2 rounded-lg shadow-lg text-xs font-bold text-slate-600" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>QA</motion.div>
                 <motion.div className="absolute bottom-0 right-0 bg-white p-2 rounded-lg shadow-lg text-xs font-bold text-slate-600" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }}>Sec</motion.div>

            </motion.div>
        </div>

        {/* Right: Content Cards */}
        <div className="w-2/3 flex flex-col gap-4">
            {points.map((item, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 50, rotateY: 10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="bg-white/60 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all group"
                >
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-2 h-8 bg-gradient-to-b from-[#46c256] to-emerald-600 rounded-full"></div>
                        <h3 className="font-bold text-slate-700 text-sm group-hover:text-[#46c256] transition-colors">{item.highlight}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify pl-5">
                        {item.text}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </SlideLayout>
  );
};

export default KeyConceptsSlide;