import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const OverviewTwoSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Overview" 
      titleColor="green"
      id="03"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col gap-8 pt-6 pr-8">
        {/* Bullet 1 */}
        <div className="flex gap-3 items-start">
            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                Version Control Systems (VCS) are fundamental to DevOps as they manage and track changes to source code, configuration files, and infrastructure definitions, enabling collaboration among teams through branching, merging, version history, rollback capabilities, and seamless integration with CI/CD pipelines, with tools like Git serving as a single source of truth for modern software projects.
            </p>
        </div>

        {/* Bullet 2 */}
        <div className="flex gap-3 items-start">
            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                Virtualization and containerization are key infrastructure technologies in DevOps, where virtualization uses hypervisors to run multiple virtual machines with separate operating systems on shared hardware, offering strong isolation but higher resource overhead, whereas containerization packages applications and their dependencies into lightweight containers that share the host operating system kernel, providing faster startup, better resource efficiency, improved portability, and making containers ideal for microservices and cloud-native application deployment.
            </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default OverviewTwoSlide;