import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const FullGitFlowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="35"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2">
        <div className="flex items-center justify-center h-full w-full">
            <svg viewBox="0 0 800 400" className="w-full h-full max-h-[450px]">
                <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
                    </marker>
                </defs>

                {/* Grid Lines/Guides (Optional, keeping hidden for cleanliness) */}

                {/* Labels */}
                <text x="20" y="50" fontSize="12" fontWeight="bold" fill="#334155">Master</text>
                <text x="20" y="100" fontSize="12" fontWeight="bold" fill="#334155">Hotfixes</text>
                <text x="20" y="150" fontSize="12" fontWeight="bold" fill="#334155">Release branches</text>
                <text x="20" y="200" fontSize="12" fontWeight="bold" fill="#334155">Develop</text>
                <text x="20" y="250" fontSize="12" fontWeight="bold" fill="#334155">Feature branches</text>

                {/* Tracks (Invisible or subtle lines) */}
                <line x1="120" y1="50" x2="780" y2="50" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="120" y1="200" x2="780" y2="200" stroke="#e2e8f0" strokeWidth="1" />


                {/* --- Master Track (Green) --- */}
                {/* Initial Node */}
                <circle cx="150" cy="50" r="8" fill="#10b981" stroke="#065f46" strokeWidth="2" />
                {/* v0.1 */}
                <circle cx="300" cy="50" r="8" fill="#10b981" stroke="#065f46" strokeWidth="2" />
                {/* v0.2 */}
                <circle cx="650" cy="50" r="8" fill="#10b981" stroke="#065f46" strokeWidth="2" />
                {/* v1.0 */}
                <circle cx="750" cy="50" r="8" fill="#10b981" stroke="#065f46" strokeWidth="2" />


                {/* --- Hotfix Track (Red) --- */}
                {/* Hotfix for v0.1 */}
                <circle cx="220" cy="100" r="8" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
                
                {/* Flow: Master -> Hotfix */}
                <path d="M 157 54 L 213 96" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />
                {/* Flow: Hotfix -> Master (Merge) */}
                <path d="M 227 96 L 293 54" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />
                {/* Flow: Hotfix -> Develop (Merge) */}
                <path d="M 220 108 L 220 192" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />


                {/* --- Release Track (Blue) --- */}
                <circle cx="450" cy="150" r="8" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
                <circle cx="500" cy="150" r="8" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
                <circle cx="550" cy="150" r="8" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />

                {/* Flow: Develop -> Release */}
                <path d="M 400 200 L 445 155" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />
                {/* Flow: Release -> Master (Merge) */}
                <path d="M 550 142 L 645 55" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />
                {/* Flow: Release -> Develop (Merge) */}
                <path d="M 550 158 L 600 195" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />


                {/* --- Develop Track (Orange) --- */}
                <circle cx="180" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="220" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="260" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="300" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="350" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="400" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="600" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="650" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
                <circle cx="750" cy="200" r="8" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />

                {/* Flow: Master -> Develop (Init) */}
                <path d="M 150 58 L 180 192" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />


                {/* --- Feature Track (Teal) --- */}
                {/* Feature 1 */}
                <circle cx="300" cy="280" r="8" fill="#2dd4bf" stroke="#134e4a" strokeWidth="2" />
                <circle cx="350" cy="280" r="8" fill="#2dd4bf" stroke="#134e4a" strokeWidth="2" />
                <circle cx="400" cy="280" r="8" fill="#2dd4bf" stroke="#134e4a" strokeWidth="2" />

                {/* Flow: Develop -> Feature */}
                <path d="M 260 208 L 295 275" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />
                {/* Flow: Feature -> Develop */}
                <path d="M 400 272 L 400 208" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />

                 {/* Feature 2 */}
                <circle cx="620" cy="350" r="8" fill="#2dd4bf" stroke="#134e4a" strokeWidth="2" />
                <circle cx="670" cy="350" r="8" fill="#2dd4bf" stroke="#134e4a" strokeWidth="2" />

                {/* Flow: Develop -> Feature 2 */}
                <path d="M 600 208 L 615 342" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />
                {/* Flow: Feature 2 -> Develop */}
                <path d="M 670 342 L 745 208" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" />


                {/* Connecting Lines for Tracks (Simulated) */}
                <path d="M 180 200 L 750 200" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M 150 50 L 750 50" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.3" />

            </svg>
        </div>
      </div>
    </SlideLayout>
  );
};

export default FullGitFlowDiagramSlide;