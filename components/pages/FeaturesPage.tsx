import React from 'react';
import { motion } from 'framer-motion';

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">Under the Hood</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Preso3D is not just a template. It's a rendering engine designed to bridge the gap between web applications and presentation software.
        </p>
      </div>

      {/* Feature 1: Engine */}
      <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
         <div className="w-full md:w-1/2">
            <div className="w-full aspect-square bg-gradient-to-br from-slate-900 to-black rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
                {/* Visual Representation of Layers */}
                <motion.div 
                   className="w-40 h-40 bg-indigo-600/20 border border-indigo-500/50 rounded-xl absolute z-10 backdrop-blur-sm"
                   animate={{ rotateX: 20, rotateY: 20, z: 50 }}
                   transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.div 
                   className="w-40 h-40 bg-white/5 border border-white/10 rounded-xl absolute z-0"
                   animate={{ rotateX: 20, rotateY: 20, z: 0 }}
                   transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                />
            </div>
         </div>
         <div className="w-full md:w-1/2">
            <h3 className="text-indigo-400 font-mono text-sm mb-2">01. THE ENGINE</h3>
            <h2 className="text-3xl font-bold text-white mb-4">CSS3D Transforms & Physics</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
               Unlike heavy WebGL libraries that drain battery and break text selection, Preso3D utilizes hardware-accelerated CSS3D transforms managed by Framer Motion's spring physics. 
            </p>
            <ul className="space-y-3">
               <li className="flex items-center gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> 60fps animations on mobile devices
               </li>
               <li className="flex items-center gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Native DOM text rendering (SEO friendly)
               </li>
               <li className="flex items-center gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Zero-layout-shift transitions
               </li>
            </ul>
         </div>
      </div>

      {/* Feature 2: Component System */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-32">
         <div className="w-full md:w-1/2">
             <div className="w-full aspect-video bg-[#1e1e1e] rounded-3xl border border-white/10 p-6 font-mono text-xs overflow-hidden shadow-2xl">
                <div className="flex gap-1.5 mb-4 opacity-50">
                   <div className="w-3 h-3 rounded-full bg-white/20"></div>
                   <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <div className="text-blue-400">{'<SlideLayout'}</div>
                <div className="pl-4 text-sky-300">title=<span className="text-orange-300">"Architecture"</span></div>
                <div className="pl-4 text-sky-300">id=<span className="text-orange-300">"slide-4"</span></div>
                <div className="text-blue-400">{'>'}</div>
                <div className="pl-4 text-white">
                   {'<'}motion.div <span className="text-purple-400">animate</span>={'{...}'}{'>'}<br/>
                   &nbsp;&nbsp;...content...<br/>
                   {'<'}/motion.div{'>'}
                </div>
                <div className="text-blue-400">{'</SlideLayout>'}</div>
             </div>
         </div>
         <div className="w-full md:w-1/2">
            <h3 className="text-indigo-400 font-mono text-sm mb-2">02. COMPONENT SYSTEM</h3>
            <h2 className="text-3xl font-bold text-white mb-4">Everything is a Component</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
               Stop fighting with slide masters and rigid templates. In Preso3D, slides are just React components. 
               This means you can import live data, interactive charts, or even entire mini-apps directly into your deck.
            </p>
         </div>
      </div>

      {/* Feature 3: Accessibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
             <h3 className="text-xl font-bold text-white mb-4">Accessibility First</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
                Because we use standard HTML elements, screen readers can parse your presentation perfectly. 
                Keyboard navigation is built-in, supporting arrow keys, spacebar, and escape sequences.
             </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
             <h3 className="text-xl font-bold text-white mb-4">Developer Experience</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
                Written in TypeScript for type safety. Styled with Tailwind for rapid iteration. 
                Animated with Framer Motion for declarative physics. The stack you love, now for slides.
             </p>
          </div>
      </div>

    </div>
  );
};

export default FeaturesPage;