import React from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onOpenDeck: () => void;
  onNavigate: (page: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenDeck, onNavigate }) => {
  return (
    <div className="relative">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden px-6">
         <div className="max-w-7xl mx-auto text-center relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-sm"
            >
               <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
               v2.0 Beta is Live
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8"
            >
               PowerPoint is for info.<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 animate-gradient-x">Preso3D is for impact.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            >
               Transform static decks into immersive, cinematic 3D experiences. 
               The presentation engine built for developers, by developers.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
               <button onClick={onOpenDeck} className="px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                  Try Live Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
               </button>
               <button onClick={() => onNavigate('docs')} className="px-8 py-4 bg-white/5 text-white border border-white/10 text-lg font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  Read Docs
               </button>
            </motion.div>
         </div>

         {/* 3D Floating Elements Background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none -z-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px]"></div>
         </div>
      </section>

      {/* 2. Architecture Section */}
      <section className="py-24 border-t border-white/5 bg-[#08090C]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { title: "React 19 Native", desc: "Built with concurrent features for silky smooth 60fps rendering on any device.", icon: "⚛️" },
                  { title: "Parallax Physics", desc: "Mouse-driven CSS3D transforms create tangible depth without WebGL overhead.", icon: "🧊" },
                  { title: "Zero Bloat", desc: "No heavy engines. Just pure, performant DOM manipulation and Framer Motion.", icon: "⚡" }
               ].map((card, i) => (
                  <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-500">
                     <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                     <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                     <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Dev-First Preview */}
      <section className="py-32 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Built for code,<br/>not drag-and-drop.</h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Forget clunky GUI builders. Create slides using the component architecture you already know. 
                  Pass props, use hooks, and import any React library directly into your deck.
               </p>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono bg-indigo-900/20 px-3 py-1 rounded border border-indigo-500/20">
                     <span>npm install @preso3d/core</span>
                  </div>
               </div>
            </div>
            
            {/* Code Block Visual */}
            <div className="lg:w-1/2 w-full">
               <div className="rounded-xl bg-[#1E1E1E] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs md:text-sm relative group">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#252526]">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                     </div>
                     <span className="text-slate-500 ml-2">MySlide.tsx</span>
                  </div>
                  <div className="p-6 text-slate-300 leading-relaxed">
                     <span className="text-pink-400">import</span> {'{ Slide, Heading }'} <span className="text-pink-400">from</span> <span className="text-yellow-300">'preso3d'</span>;<br/><br/>
                     <span className="text-blue-400">export const</span> <span className="text-yellow-200">WelcomeSlide</span> = () ={'>'} (<br/>
                     &nbsp;&nbsp;{'<'}<span className="text-green-400">Slide</span> id=<span className="text-yellow-300">"intro"</span>{'>'}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-green-400">Heading</span> parallax=<span className="text-blue-400">{'{20}'}</span>{'>'}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="text-green-400">Heading</span>{'>'}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-green-400">Chart3D</span> data=<span className="text-blue-400">{'{data}'}</span> /{'><br/>'}
                     &nbsp;&nbsp;{'</'}<span className="text-green-400">Slide</span>{'>'}<br/>
                     );
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Interactive Steps */}
      <section className="py-24 bg-[#08090C] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-16">From Component to Keynote</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent border-t border-dashed border-white/20"></div>

               {[
                  { step: "01", title: "Build Components", desc: "Create slides as isolated React components." },
                  { step: "02", title: "Compose Deck", desc: "Arrange your story in the config array." },
                  { step: "03", title: "Present", desc: "Launch immersive mode and captivate." }
               ].map((item, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center">
                     <div className="w-24 h-24 rounded-2xl bg-[#0B0C10] border border-indigo-500/30 flex items-center justify-center text-2xl font-black text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.1)] mb-6">
                        {item.step}
                     </div>
                     <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm max-w-xs">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 relative overflow-hidden text-center px-6">
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
               Ready to ship<br/>your story?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button onClick={onOpenDeck} className="px-10 py-5 bg-white text-black text-xl font-bold rounded-xl hover:scale-105 transition-transform shadow-xl">
                  Start Presenting
               </button>
            </div>
         </div>
         {/* Background Aurora */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

    </div>
  );
};

export default LandingPage;