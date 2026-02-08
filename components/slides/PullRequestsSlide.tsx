import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const PullRequestsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Pull Requests (PRs)</span>
    </div>
  );

  const points = [
    "Pull requests are a collaborative mechanism for proposing, reviewing, and merging code changes from one branch into another.",
    "PRs provide visibility into changes, enable discussion, and enforce quality checks before integration.",
    "They are often integrated with CI pipelines to automatically run builds, tests, and security scans.",
    "Example: A developer submits a pull request to merge a feature branch into the develop branch. The PR triggers automated unit tests and static code analysis, and only after all checks pass can the code be approved and merged."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="36"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2">
        
        {/* Top Monitor Icon/Illustration */}
        <div className="flex justify-center mb-8">
            <div className="relative w-48 h-32 border-4 border-slate-700 rounded-lg bg-white flex flex-col items-center justify-center p-2 shadow-md">
                {/* Screen Content */}
                <div className="w-full h-full bg-slate-50 flex flex-col gap-2 p-2 overflow-hidden">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-1">
                        <div className="w-16 h-2 bg-slate-300 rounded"></div>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    {/* Code lines */}
                    <div className="flex gap-2">
                        <div className="text-green-500 font-bold text-lg">{`<>`}</div>
                        <div className="flex flex-col gap-1 w-full mt-1">
                             <div className="w-full h-1 bg-slate-200 rounded"></div>
                             <div className="w-3/4 h-1 bg-slate-200 rounded"></div>
                             <div className="w-1/2 h-1 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                     <div className="flex gap-1 justify-end mt-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 border border-green-400 flex items-center justify-center text-[8px] text-green-600">✓</div>
                        <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                     </div>
                </div>
                {/* Stand */}
                <div className="absolute -bottom-8 w-4 h-8 bg-slate-600"></div>
                <div className="absolute -bottom-8 w-24 h-1 bg-slate-600 rounded-full"></div>
            </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 pr-8">
            {points.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default PullRequestsSlide;