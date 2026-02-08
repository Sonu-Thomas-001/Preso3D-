import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const ScrumAndKanbanDetailsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="29"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-8">
        
        {/* Scrum Section */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Scrum</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Scrum is a structured Agile framework that organizes work into fixed-length iterations called sprints, typically lasting two to four weeks.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        It defines specific roles such as Product Owner, Scrum Master, and Development Team, and uses ceremonies like sprint planning, daily stand-ups, sprint reviews, and retrospectives.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: A Scrum team developing a banking application plans a two-week sprint to implement transaction history functionality, reviews the completed feature with stakeholders at the end of the sprint, and discusses process improvements during the retrospective.
                    </p>
                </div>
            </div>
        </div>

        {/* Kanban Section */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Kanban</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Kanban is a visual workflow management method focused on continuous delivery and efficiency rather than fixed iterations.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Work items are visualized on a Kanban board with columns such as "To Do," "In Progress," and "Done," and work-in-progress (WIP) limits are enforced to prevent bottlenecks.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: An operations team uses Kanban to manage incident resolution, limiting the number of active issues to ensure faster response times and smoother workflow.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ScrumAndKanbanDetailsSlide;