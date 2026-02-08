import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const CodeReviewsAndIntegrationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="38"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Code Reviews */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Code Reviews</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Code reviews are a critical quality assurance practice in advanced Git workflows, ensuring that code meets standards for readability, security, performance, and maintainability.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Reviews encourage knowledge sharing, reduce defects, and enforce best practices. Modern Git platforms support inline comments, approval rules, and mandatory reviewers.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: During a code review, a senior developer identifies inefficient database queries in a pull request and suggests optimizations, preventing potential performance issues in production.
                    </p>
                </div>
            </div>
        </div>

        {/* Integration with DevOps */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Integration with DevOps</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Advanced Git workflows integrate tightly with DevOps practices such as CI/CD, infrastructure as code, and automated testing.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Branch policies can enforce review requirements, test coverage thresholds, and deployment rules.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: A protected main branch requires at least two code review approvals and a successful CI build before merging, ensuring only stable and verified code reaches production.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default CodeReviewsAndIntegrationSlide;