import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const OverviewOneSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Overview" 
      titleColor="green"
      id="02"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col gap-8 pt-6 pr-8">
        {/* Bullet 1 */}
        <div className="flex gap-3 items-start">
            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                DevOps is a set of practices, cultural values, and automation tools that integrates software development and IT operations to enable faster, reliable, and continuous software delivery, and within the Software Development Life Cycle (SDLC), DevOps plays a vital role by embedding automation, collaboration, monitoring, and feedback across all phases including planning, coding, building, testing, deployment, operations, and maintenance, thereby reducing silos, minimizing manual errors, and improving release frequency and stability.
            </p>
        </div>

        {/* Bullet 2 */}
        <div className="flex gap-3 items-start">
            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                Agile and DevOps are closely aligned methodologies where Agile focuses on iterative development, customer feedback, and rapid adaptation through short development cycles, while DevOps extends Agile principles beyond development into deployment and operations by enabling continuous integration, continuous delivery, and real-time monitoring, resulting in end-to-end agility and faster value delivery.
            </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default OverviewOneSlide;