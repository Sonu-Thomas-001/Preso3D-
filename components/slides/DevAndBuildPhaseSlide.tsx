import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevAndBuildPhaseSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="21"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Development Phase */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">2. Development Phase</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        During development, DevOps integrates continuous integration (CI) practices to ensure that code changes are frequently committed, built, and validated.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Version Control Systems like Git enable collaborative coding, branching, and merging, while automated code quality checks and unit tests maintain consistency and reduce defects.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: Developers push code to a Git repository, triggering an automated CI pipeline that compiles the application and runs unit tests on every commit.
                    </p>
                </div>
            </div>
        </div>

        {/* Build Phase */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">3. Build Phase</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        In the build phase, DevOps emphasizes automation and standardization to create reliable and repeatable builds.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Build tools and CI servers package the application and its dependencies, often using container images to ensure consistency across environments.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: A CI pipeline uses Docker to build an application image, ensuring that the same build runs consistently in development, testing, and production environments.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DevAndBuildPhaseSlide;