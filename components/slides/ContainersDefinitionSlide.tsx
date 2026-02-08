import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ContainersDefinitionSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Containers Defined</span>
    </div>
  );

  const points = [
    "Containerization packages applications and their dependencies into lightweight containers that run on a container engine such as Docker and share the host operating system kernel.",
    "Unlike VMs, containers do not require a full guest OS, making them smaller, faster to start, and more resource-efficient.",
    "Containers focus on application-level isolation rather than hardware-level isolation, which improves portability and consistency across environments."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="42"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center gap-12 px-4 perspective-1000">
        
        {/* Left: Content */}
        <div className="w-1/2 flex flex-col gap-6">
             {points.map((text, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white/60 p-4 rounded-xl border-l-4 border-blue-500 shadow-sm backdrop-blur-sm"
                >
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </motion.div>
            ))}
            
            <motion.div 
                className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-xs italic text-blue-800"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            >
                <strong>Example:</strong> A Java microservice packaged in Docker runs identically on a laptop, test server, and cloud cluster.
            </motion.div>
        </div>

        {/* Right: 3D Container Metaphor */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
            <motion.div 
                className="relative w-64 h-64"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* The Cube (Container) */}
                <div className="absolute inset-0 w-full h-full transform-style-3d">
                    {/* Front Face */}
                    <div className="absolute w-full h-full bg-blue-600 border-4 border-blue-400 flex flex-col items-center justify-center shadow-lg backface-hidden" style={{ transform: 'translateZ(128px)' }}>
                        <div className="w-full h-full border-2 border-dashed border-blue-400/30 absolute"></div>
                        <div className="text-6xl mb-2">📦</div>
                        <div className="text-white font-black tracking-widest text-2xl">APP</div>
                        <div className="text-blue-200 text-xs font-mono mt-1">Libs & Bins</div>
                        {/* Ribs */}
                        <div className="absolute top-0 bottom-0 left-4 w-2 bg-black/10"></div>
                        <div className="absolute top-0 bottom-0 right-4 w-2 bg-black/10"></div>
                        <div className="absolute top-0 bottom-0 left-12 w-2 bg-black/10"></div>
                        <div className="absolute top-0 bottom-0 right-12 w-2 bg-black/10"></div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute w-full h-full bg-blue-700 border-4 border-blue-500 flex items-center justify-center backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(128px)' }}>
                         <div className="text-white font-black tracking-widest text-2xl opacity-50">DOCKER</div>
                    </div>

                    {/* Right Face */}
                    <div className="absolute w-full h-full bg-blue-500 border-4 border-blue-300 flex items-center justify-center backface-hidden" style={{ transform: 'rotateY(90deg) translateZ(128px)' }}>
                         {/* Ribs */}
                        <div className="absolute top-0 bottom-0 left-8 w-4 bg-black/10"></div>
                        <div className="absolute top-0 bottom-0 right-8 w-4 bg-black/10"></div>
                    </div>

                    {/* Left Face */}
                    <div className="absolute w-full h-full bg-blue-500 border-4 border-blue-300 flex items-center justify-center backface-hidden" style={{ transform: 'rotateY(-90deg) translateZ(128px)' }}>
                        {/* Ribs */}
                        <div className="absolute top-0 bottom-0 left-8 w-4 bg-black/10"></div>
                        <div className="absolute top-0 bottom-0 right-8 w-4 bg-black/10"></div>
                    </div>

                    {/* Top Face */}
                    <div className="absolute w-full h-full bg-blue-400 border-4 border-blue-200 flex items-center justify-center backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(128px)' }}></div>

                    {/* Bottom Face */}
                    <div className="absolute w-full h-full bg-blue-800 border-4 border-blue-600 flex items-center justify-center backface-hidden" style={{ transform: 'rotateX(-90deg) translateZ(128px)' }}></div>
                </div>

            </motion.div>
            
            {/* Shadow */}
            <div className="absolute bottom-10 w-40 h-10 bg-black/20 blur-xl rounded-[100%]"></div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ContainersDefinitionSlide;