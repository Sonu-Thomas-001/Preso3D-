import React from 'react';

const DocsPage: React.FC = () => {
  return (
    <div className="flex max-w-7xl mx-auto pt-24 min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 hidden md:block fixed top-24 bottom-0 border-r border-white/5 pr-6 overflow-y-auto">
         <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Getting Started</h3>
         <ul className="space-y-3 text-sm text-slate-500 mb-8">
            <li className="text-indigo-400 font-medium cursor-pointer">Introduction</li>
            <li className="hover:text-slate-300 cursor-pointer transition-colors">Installation</li>
            <li className="hover:text-slate-300 cursor-pointer transition-colors">Project Structure</li>
         </ul>

         <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Core Concepts</h3>
         <ul className="space-y-3 text-sm text-slate-500">
            <li className="hover:text-slate-300 cursor-pointer transition-colors">Slide Component</li>
            <li className="hover:text-slate-300 cursor-pointer transition-colors">Layouts</li>
            <li className="hover:text-slate-300 cursor-pointer transition-colors">Animation API</li>
            <li className="hover:text-slate-300 cursor-pointer transition-colors">The 3D Container</li>
         </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:pl-72 px-6 pb-20">
         <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Documentation</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
               Welcome to the Preso3D documentation. Learn how to build immersive, interactive presentations using React and standard web technologies.
            </p>
         </div>

         <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Start</h2>
            <div className="bg-[#1e1e1e] p-4 rounded-lg border border-white/10 font-mono text-sm text-slate-300">
               git clone https://github.com/preso3d/starter.git<br/>
               cd starter<br/>
               npm install<br/>
               npm start
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Directory Structure</h2>
            <p className="text-slate-400 mb-4">Preso3D organizes slides as individual components for maximum scalability.</p>
            <div className="bg-[#1e1e1e] p-4 rounded-lg border border-white/10 font-mono text-sm text-slate-300 whitespace-pre">
{`src/
├── components/
│   ├── slides/          # Your slide components go here
│   ├── Slide3DContainer # The parallax physics engine
│   ├── SlideLayout      # HOC for consistent branding
│   └── UIOverlay        # Navigation controls
├── App.tsx              # Main routing and slide registry
└── types.ts             # TypeScript definitions`}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Creating a Slide</h2>
            <p className="text-slate-400 mb-4">Slides are just functional components that receive an <code className="bg-white/10 px-1 rounded">isPresenting</code> prop.</p>
         </div>
      </div>

    </div>
  );
};

export default DocsPage;