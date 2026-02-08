import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevelopMasterBranchSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="33"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center justify-center pt-2">
        
        {/* Branch Labels */}
        <div className="w-full max-w-3xl flex gap-4 mb-8">
            <div className="bg-blue-200 border border-blue-400 text-blue-800 px-4 py-1 text-sm font-bold shadow-sm">Master</div>
            <div className="bg-purple-200 border border-purple-400 text-purple-800 px-4 py-1 text-sm font-bold shadow-sm">Develop</div>
        </div>

        {/* Diagram */}
        <div className="w-full max-w-3xl relative h-40">
            <svg width="100%" height="100%" viewBox="0 0 600 150">
                 {/* Master Line */}
                <line x1="0" y1="50" x2="600" y2="50" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
                
                {/* Develop Line (Branches off Master) */}
                <path d="M 50 50 C 50 100, 100 100, 120 100 L 600 100" stroke="#64748b" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Master Nodes (Tags) */}
                {/* v0.1 */}
                <g transform="translate(120, 50)">
                    <circle r="8" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="2" />
                    <rect x="-15" y="-35" width="30" height="20" rx="4" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="1" />
                    <text x="0" y="-22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">v0.1</text>
                    <line x1="0" y1="-15" x2="0" y2="-8" stroke="#1e3a8a" strokeWidth="1" />
                    {/* Arrow down to develop start */}
                    <line x1="0" y1="8" x2="0" y2="42" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
                </g>

                {/* v0.2 */}
                <g transform="translate(300, 50)">
                    <circle r="8" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="2" />
                    <rect x="-15" y="-35" width="30" height="20" rx="4" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="1" />
                    <text x="0" y="-22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">v0.2</text>
                     <line x1="0" y1="-15" x2="0" y2="-8" stroke="#1e3a8a" strokeWidth="1" />
                </g>

                 {/* v1.0 */}
                 <g transform="translate(500, 50)">
                    <circle r="8" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="2" />
                    <rect x="-15" y="-35" width="30" height="20" rx="4" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="1" />
                    <text x="0" y="-22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">v1.0</text>
                     <line x1="0" y1="-15" x2="0" y2="-8" stroke="#1e3a8a" strokeWidth="1" />
                </g>


                {/* Develop Nodes */}
                <circle cx="180" cy="100" r="8" fill="#c084fc" stroke="#6b21a8" strokeWidth="2" />
                <circle cx="220" cy="100" r="8" fill="#c084fc" stroke="#6b21a8" strokeWidth="2" />
                
                {/* Merge back to Master at v0.2 */}
                <circle cx="300" cy="100" r="8" fill="#c084fc" stroke="#6b21a8" strokeWidth="2" />
                <path d="M 300 100 L 300 58" stroke="#64748b" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrowhead)" />

                <circle cx="400" cy="100" r="8" fill="#c084fc" stroke="#6b21a8" strokeWidth="2" />
                
                {/* Merge back to Master at v1.0 */}
                 <circle cx="500" cy="100" r="8" fill="#c084fc" stroke="#6b21a8" strokeWidth="2" />
                 <path d="M 500 100 L 500 58" stroke="#64748b" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrowhead)" />
                
                 {/* Arrowhead Def */}
                 <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                    </marker>
                </defs>
            </svg>
        </div>

        <h3 className="text-xl font-serif text-slate-600 mt-8">Develop and Master Branches</h3>

      </div>
    </SlideLayout>
  );
};

export default DevelopMasterBranchSlide;