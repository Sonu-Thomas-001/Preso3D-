import React from 'react';
import SlideLayout from '../SlideLayout';

interface WelcomeSlideProps {
  isPresenting: boolean;
}

const WelcomeSlide: React.FC<WelcomeSlideProps> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Welcome to 3D-Preso" 
      subtitle="Interactive Presentation Tool"
      id="init-1"
      isPresenting={isPresenting}
    >
      <div className="text-xl text-slate-600 leading-relaxed space-y-4 max-w-3xl">
        <p>Press the "Present" button to enter Fullscreen Mode.</p>
        <ul className="space-y-2 text-slate-500">
            <li>• Use Arrow keys or Click to navigate.</li>
            <li>• Press "B" for Black Screen.</li>
            <li>• Press "W" for White Screen.</li>
            <li>• Press "Esc" to exit.</li>
        </ul>
      </div>
    </SlideLayout>
  );
};

export default WelcomeSlide;