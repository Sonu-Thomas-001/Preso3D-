import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Slide3DContainerProps {
  children: React.ReactNode;
  isPresenting?: boolean;
}

const Slide3DContainer: React.FC<Slide3DContainerProps> = ({ children, isPresenting = false }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement with springs
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation degrees
  // Disable tilt when presenting to ensure edge-to-edge coverage
  const tiltRange = isPresenting ? 0 : 5;
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltRange, -tiltRange]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltRange, tiltRange]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized mouse position relative to the center of the card
    const width = rect.width;
    const height = rect.height;
    
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      style={{ perspective: '1200px' }} 
      className={`w-full h-full flex items-center justify-center ${isPresenting ? 'p-0' : 'p-4'}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: isPresenting ? 1 : 0.85, 
        }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          bounce: 0.25 
        }}
        className={`relative preserve-3d ${isPresenting ? 'w-full h-full' : 'w-full max-w-5xl aspect-video'}`}
      >
        {/* Tilt Interaction Layer */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className={`w-full h-full bg-white shadow-2xl relative border border-gray-200/50 ${isPresenting ? 'rounded-none' : 'rounded-xl'}`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide3DContainer;