import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const AdvancedGitWorkflowsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Version Control Systems: Advanced Git Workflows</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="31"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Text Content */}
        <div className="flex gap-3 items-start pr-8">
             <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                Version Control Systems (VCS) are essential for managing source code changes, and Git has become the de facto standard due to its distributed nature, flexibility, and strong support for collaboration. Advanced Git workflows define structured ways for teams to manage branches, integrate code, and maintain quality, especially in Agile and DevOps environments.
            </p>
        </div>

        {/* Diagram Area */}
        <div className="flex-grow flex items-center justify-center relative">
            <svg viewBox="0 0 600 250" className="w-full h-full max-h-[300px]">
                {/* Definitions for arrowheads */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                    </marker>
                </defs>

                {/* Master Branch Line (Top) */}
                <line x1="50" y1="50" x2="550" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                <text x="50" y="40" fontSize="10" fill="#64748b" fontWeight="bold">Master</text>

                {/* Develop Branch Line (Bottom) */}
                <line x1="50" y1="200" x2="550" y2="200" stroke="#cbd5e1" strokeWidth="2" />
                <text x="50" y="220" fontSize="10" fill="#64748b" fontWeight="bold">Develop</text>

                {/* Feature Branch Lines (Middle) */}
                {/* Feature 1 */}
                <path d="M 150 200 C 150 150, 200 150, 250 150" stroke="#e0e7ff" strokeWidth="2" fill="none" />
                <path d="M 250 150 C 300 150, 300 200, 350 200" stroke="#e0e7ff" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Release Branch */}
                <path d="M 350 200 C 350 120, 400 120, 450 120" stroke="#fce7f3" strokeWidth="2" fill="none" />
                <path d="M 450 120 C 500 120, 500 50, 520 50" stroke="#fce7f3" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />


                {/* Nodes - Master */}
                <circle cx="100" cy="50" r="6" fill="#a855f7" stroke="white" strokeWidth="2" />
                <text x="90" y="30" fontSize="8" fill="#64748b">v1.0</text>
                
                <circle cx="520" cy="50" r="6" fill="#a855f7" stroke="white" strokeWidth="2" />
                <text x="510" y="30" fontSize="8" fill="#64748b">v1.1</text>

                {/* Nodes - Develop */}
                <circle cx="100" cy="200" r="6" fill="#ec4899" stroke="white" strokeWidth="2" />
                <circle cx="150" cy="200" r="6" fill="#ec4899" stroke="white" strokeWidth="2" />
                <circle cx="350" cy="200" r="6" fill="#ec4899" stroke="white" strokeWidth="2" />
                
                {/* Nodes - Feature */}
                <circle cx="200" cy="150" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
                <circle cx="250" cy="150" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />

                {/* Nodes - Release */}
                <circle cx="400" cy="120" r="6" fill="#f59e0b" stroke="white" strokeWidth="2" />
                <circle cx="450" cy="120" r="6" fill="#f59e0b" stroke="white" strokeWidth="2" />

                {/* Merge Lines */}
                {/* Master to Develop init */}
                <path d="M 100 50 L 100 200" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" />

            </svg>
        </div>

      </div>
    </SlideLayout>
  );
};

export default AdvancedGitWorkflowsSlide;