import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ThankYouSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title={<span></span>} 
      titleColor="green"
      id="end"
      isPresenting={isPresenting}
      noContentPadding={true}
      hideHeader={true}
      hideFooter={true}
      backgroundClass="bg-slate-900"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden perspective-1000">
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#1e293b_0%,#0f172a_100%)] animate-spin-slow-reverse opacity-50"></div>
             {/* Particles */}
             {[...Array(20)].map((_, i) => (
                 <motion.div
                    key={i}
                    className="absolute bg-blue-500 rounded-full opacity-20"
                    style={{
                        width: Math.random() * 10 + 2,
                        height: Math.random() * 10 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                 />
             ))}
        </div>

        {/* 3D Text Content */}
        <motion.div 
            className="relative z-10 flex flex-col items-center"
            initial={{ rotateX: 20, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <motion.div 
                className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tighter drop-shadow-2xl mb-4"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
            >
                Thank You!
            </motion.div>
            
            <p className="text-slate-400 text-xl md:text-2xl font-light tracking-widest uppercase mb-12">
                Questions?
            </p>

            {/* Social / Contact Links (Mock) */}
            <div className="flex gap-6">
                {['LinkedIn', 'GitHub', 'Email'].map((item, i) => (
                    <motion.div 
                        key={i}
                        className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 font-bold hover:bg-white hover:text-slate-900 transition-all cursor-pointer shadow-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.1, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </motion.div>
        
        {/* Footer Brand */}
        <div className="absolute bottom-8 text-slate-600 text-sm font-mono opacity-50">
            Powered by Preso3D
        </div>

      </div>
    </SlideLayout>
  );
};

export default ThankYouSlide;