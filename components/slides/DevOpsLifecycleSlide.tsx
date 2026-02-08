import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevOpsLifecycleSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">The Lifecycle</span>
    </div>
  );

  // Layout Constants for an 800x450 coordinate system
  // Center is (400, 225)
  // The loop is drawn using symmetrical cubic bezier curves
  
  const phases = [
    // --- DEV LOOP (Left Side) ---
    // 1. PLAN: Top-Inner Left
    { id: 1, label: "PLAN", icon: "📋", x: 300, y: 145, color: "blue" },
    // 2. CODE: Top-Outer Left
    { id: 2, label: "CODE", icon: "💻", x: 140, y: 185, color: "blue" },
    // 3. BUILD: Bottom-Outer Left
    { id: 3, label: "BUILD", icon: "🏗️", x: 140, y: 265, color: "blue" },
    // 4. TEST: Bottom-Inner Left
    { id: 4, label: "TEST", icon: "🧪", x: 300, y: 305, color: "blue" },

    // --- OPS LOOP (Right Side) ---
    // 5. RELEASE: Top-Inner Right
    { id: 5, label: "RELEASE", icon: "📦", x: 500, y: 145, color: "green" },
    // 6. DEPLOY: Top-Outer Right
    { id: 6, label: "DEPLOY", icon: "🚀", x: 660, y: 185, color: "green" },
    // 7. OPERATE: Bottom-Outer Right
    { id: 7, label: "OPERATE", icon: "⚙️", x: 660, y: 265, color: "green" },
    // 8. MONITOR: Bottom-Inner Right
    { id: 8, label: "MONITOR", icon: "📊", x: 500, y: 305, color: "green" },
  ];

  // Perfect Infinity Path Definition
  // M 400 225 (Center)
  // Left Loop Top: C 340 125, 100 125, 100 225
  // Left Loop Bottom: C 100 325, 340 325, 400 225
  // Right Loop Top: C 460 125, 700 125, 700 225
  // Right Loop Bottom: C 700 325, 460 325, 400 225
  
  // Note: To make the animation flow Plan->Code->Build->Test->Release... 
  // We need to trace the path in that specific direction.
  // Direction: Center -> Up-Left -> Far-Left -> Down-Left -> Center -> Up-Right -> Far-Right -> Down-Right -> Center
  
  const infinityPath = `
    M 400 225
    C 340 125, 100 125, 100 225
    C 100 325, 340 325, 400 225
    C 460 125, 700 125, 700 225
    C 700 325, 460 325, 400 225
    Z
  `;

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="22"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        
        {/* Main Diagram Container */}
        <div className="relative w-[800px] h-[450px] flex items-center justify-center scale-90 md:scale-100">
            
            {/* SVG Infinity Loop Track */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
                <defs>
                    <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Background Track (Faint) */}
                <path 
                    d={infinityPath}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                    strokeLinecap="round"
                />

                {/* Animated Gradient Overlay */}
                <motion.path 
                    d={infinityPath}
                    fill="none"
                    stroke="url(#infinityGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Flow Particles */}
                <circle r="3" fill="white">
                    <animateMotion 
                        dur="8s" 
                        repeatCount="indefinite"
                        path={infinityPath}
                        keyPoints="0;1"
                        keyTimes="0;1"
                    />
                </circle>
                 <circle r="3" fill="white">
                    <animateMotion 
                        dur="8s" 
                        begin="4s"
                        repeatCount="indefinite"
                        path={infinityPath}
                        keyPoints="0;1"
                        keyTimes="0;1"
                    />
                </circle>
            </svg>

            {/* Central Badge */}
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute z-30 w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-slate-50"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
                <div className="flex flex-col items-center">
                    <div className="flex -space-x-1 mb-1">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">DevOps</span>
                    <span className="text-[8px] font-bold text-slate-300">Continuous</span>
                </div>
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border border-blue-100 animate-ping opacity-20"></div>
            </motion.div>

            {/* Phase Cards */}
            {phases.map((phase, index) => {
                const isDev = phase.color === 'blue';
                const borderColor = isDev ? 'border-blue-200' : 'border-green-200';
                const textColor = isDev ? 'text-blue-700' : 'text-green-700';
                const badgeColor = isDev ? 'bg-blue-500' : 'bg-green-500';
                const glowColor = isDev ? 'group-hover:shadow-blue-200' : 'group-hover:shadow-green-200';
                const bgGradient = isDev ? 'from-blue-50 to-white' : 'from-green-50 to-white';

                return (
                    <motion.div
                        key={phase.id}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1), type: "spring", stiffness: 120 }}
                        className="absolute z-20"
                        style={{ 
                            left: phase.x, 
                            top: phase.y,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1, y: -5 }}
                            className={`
                                relative w-28 h-20 rounded-xl bg-gradient-to-b ${bgGradient} 
                                border ${borderColor} shadow-lg ${glowColor} transition-all duration-300
                                flex flex-col items-center justify-center gap-1 cursor-pointer group
                            `}
                        >
                            {/* Number Badge */}
                            <div className={`
                                absolute -top-2 -right-2 w-5 h-5 rounded-full ${badgeColor} 
                                text-white text-[9px] font-bold flex items-center justify-center 
                                border-2 border-white shadow-sm z-10
                            `}>
                                {phase.id}
                            </div>

                            {/* Icon */}
                            <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                {phase.icon}
                            </div>
                            
                            {/* Label */}
                            <div className={`text-[10px] font-black tracking-wider ${textColor}`}>
                                {phase.label}
                            </div>
                            
                            {/* Bottom Accent Bar */}
                            <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${badgeColor} opacity-50`}></div>
                        </motion.div>

                        {/* Connection Dot to Curve (Visual Anchor) */}
                        <div className={`
                            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300 -z-10
                            ${index < 4 ? 'translate-y-12' : 'translate-y-12'} 
                            /* This places a dot roughly near the line if we wanted exact connection lines, 
                               but for this clean look we omit complex lines and let the cards float */
                        `}></div>

                    </motion.div>
                );
            })}

        </div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsLifecycleSlide;