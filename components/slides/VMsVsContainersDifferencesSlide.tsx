import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const VMsVsContainersDifferencesSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Key Differences: Virtual Machines vs Containers</span>
    </div>
  );

  const points = [
    "Virtual machines provide strong isolation and support multiple operating systems on the same host, but they consume more resources due to the overhead of running separate OS instances and typically have slower startup times.",
    "Containers, in contrast, are lightweight, start in seconds or milliseconds, and allow higher density of applications per host, but they share the host OS and therefore offer slightly weaker isolation compared to VMs.",
    "Virtual machines are ideal for legacy applications, workloads requiring strong isolation, or scenarios where multiple operating systems must coexist.",
    "Containers are best suited for microservices, cloud-native applications, CI/CD pipelines, and environments requiring rapid deployment and high scalability.",
    "Example: Starting a VM may take several minutes due to OS boot time, whereas starting a containerized service often takes only a few seconds, enabling rapid scaling during traffic spikes.",
    "Example: A financial institution may run core banking systems on VMs for compliance and isolation, while deploying customer-facing APIs and web services in containers for agility and scalability."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="44"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4 gap-4 pr-8">
        {points.map((text, idx) => (
            <div key={idx} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    {text}
                </p>
            </div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default VMsVsContainersDifferencesSlide;