import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevOpsEngineerRoleSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  // Helper for diagram items
  const RoleItem = ({ icon, text, align = 'left' }: { icon: React.ReactNode, text: string, align?: 'left' | 'right' }) => (
    <div className={`flex items-center gap-3 ${align === 'right' ? 'flex-row-reverse text-right' : 'text-left'}`}>
        <div className="w-12 h-12 rounded-full border-2 border-[#4FC3F7] flex items-center justify-center text-[#4FC3F7] shrink-0">
            {icon}
        </div>
        <p className="text-xs text-white max-w-[140px] leading-tight font-light">{text}</p>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="10"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center py-2">
        <div className="bg-[#0D1B2A] rounded-xl p-8 w-full max-w-4xl relative shadow-2xl border border-slate-700">
            {/* Card Title */}
            <h3 className="text-center text-slate-300 text-lg mb-8 font-medium">DevOps Engineer Role</h3>

            <div className="grid grid-cols-3 gap-8 items-center">
                
                {/* Left Column */}
                <div className="flex flex-col gap-8">
                    <RoleItem 
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                        text="Writing specifications and documentation"
                        align="right"
                    />
                     <RoleItem 
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                        text="Infrastructure management"
                        align="right"
                    />
                     <RoleItem 
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        text="Performance assessment and monitoring"
                        align="right"
                    />
                </div>

                {/* Center Column - Avatar */}
                <div className="flex flex-col items-center justify-center">
                     <div className="w-24 h-24 bg-[#3B5B7D] rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                     </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-8">
                    <RoleItem 
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
                        text="Cloud deployment and management"
                    />
                    <RoleItem 
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
                        text="CI/CD management and automation"
                    />
                    <RoleItem 
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                        text="Assistance with DevOps culture adoption"
                    />
                </div>

            </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default DevOpsEngineerRoleSlide;