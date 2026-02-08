import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const FeedbackLoopsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Feedback Loops</span>
    </div>
  );

  const points = [
    "Feedback loops ensure that information flows continuously and rapidly between systems, teams, and stakeholders throughout the DevOps lifecycle.",
    "Feedback can come from automated test results, monitoring and logging systems, user behavior analytics, and incident reports.",
    "Fast and actionable feedback enables teams to detect issues early, understand root causes, and make informed improvements to code, infrastructure, and processes.",
    "Strong feedback loops support continuous learning and improvement, allowing organizations to adapt quickly, enhance product quality, and deliver better user experiences over time."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="18"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4 relative">
        <div className="flex flex-col gap-6 pr-8 z-10">
            {points.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>

        {/* Bottom Right Illustration - UX/Feedback */}
        <div className="absolute bottom-0 right-12 mb-0 flex items-end">
             <img 
                src="https://img.freepik.com/free-vector/user-feedback-concept-illustration_114360-4638.jpg?w=740&t=st=1708808000~exp=1708808600~hmac=feedback"
                alt="Feedback Loop Illustration"
                className="w-48 h-auto object-contain mix-blend-multiply opacity-90"
             />
        </div>
      </div>
    </SlideLayout>
  );
};

export default FeedbackLoopsSlide;