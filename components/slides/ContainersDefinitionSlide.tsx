import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const ContainersDefinitionSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Containers</span>
    </div>
  );

  const points = [
    "Containerization packages applications and their dependencies into lightweight containers that run on a container engine such as Docker and share the host operating system kernel. Unlike VMs, containers do not require a full guest OS, making them smaller, faster to start, and more resource-efficient.",
    "Containers focus on application-level isolation rather than hardware-level isolation, which improves portability and consistency across environments.",
    "Example: A Java-based microservice is packaged into a Docker container with its runtime and libraries, allowing it to run identically on a developer's laptop, a test server, or a cloud production cluster without configuration changes."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="42"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4 gap-6 pr-8">
         {points.map((text, idx) => (
            <div key={idx} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    {text.split('containers').reduce((acc, part, i, arr) => {
                        // Simple bolding logic for the word 'containers' if needed, or just render text
                        return i < arr.length - 1 ? [...acc, part, <span key={i} className="font-bold">containers</span>] : [...acc, part];
                    }, [] as React.ReactNode[])}
                </p>
            </div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default ContainersDefinitionSlide;