import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PageType = 'home' | 'features' | 'about' | 'docs' | 'roadmap';

interface WebsiteLayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenDeck: () => void;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children, currentPage, onNavigate, onOpenDeck }) => {
  
  const navLinks: { id: PageType; label: string }[] = [
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'Vision' },
    { id: 'docs', label: 'Docs' },
    { id: 'roadmap', label: 'Roadmap' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden flex flex-col">
      
      {/* Cinematic Background Noise/Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.03),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0C10]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           {/* Logo */}
           <div 
             className="flex items-center gap-3 cursor-pointer group" 
             onClick={() => onNavigate('home')}
           >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-indigo-500 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-8 h-8 bg-gradient-to-br from-slate-800 to-black rounded-lg border border-white/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Preso<span className="text-indigo-400">3D</span></span>
           </div>

           {/* Links */}
           <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    currentPage === link.id 
                      ? 'text-white bg-white/5 border border-white/5' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
           </div>

           {/* CTA */}
           <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:block text-slate-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <button 
                onClick={onOpenDeck}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-indigo-400/20"
              >
                Launch Demo
              </button>
           </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050608] py-16 relative z-10">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-6 h-6 bg-indigo-900/50 rounded flex items-center justify-center border border-indigo-500/30">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                   </div>
                   <span className="font-bold text-slate-200">Preso3D</span>
                </div>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  The open-source presentation engine for developers. Built with React 19, Tailwind, and Framer Motion. 
                  Designed for impact, performance, and depth.
                </p>
            </div>
            
            <div>
               <h4 className="text-white font-bold mb-4 text-sm">Product</h4>
               <ul className="space-y-2 text-sm text-slate-500">
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors" onClick={() => onNavigate('features')}>Features</li>
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors" onClick={() => onNavigate('roadmap')}>Roadmap</li>
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors" onClick={() => onNavigate('docs')}>Changelog</li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-4 text-sm">Resources</h4>
               <ul className="space-y-2 text-sm text-slate-500">
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors" onClick={() => onNavigate('docs')}>Documentation</li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">License (MIT)</a></li>
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-slate-600">
            <p>&copy; 2024 Preso3D Open Source.</p>
            <div className="flex gap-2 items-center">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span>Systems Operational</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;