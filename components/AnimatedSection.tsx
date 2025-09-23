import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'fadeIn' | 'scaleIn';
  delay?: number;
  className?: string;
}

export function AnimatedSection({ 
  children, 
  animation = 'slideInUp', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClasses = {
    slideInLeft: 'translate-x-[-100px] opacity-0',
    slideInRight: 'translate-x-[100px] opacity-0',
    slideInUp: 'translate-y-[50px] opacity-0',
    slideInDown: 'translate-y-[-50px] opacity-0',
    fadeIn: 'opacity-0',
    scaleIn: 'scale-75 opacity-0'
  };

  const visibleClasses = {
    slideInLeft: 'translate-x-0 opacity-100',
    slideInRight: 'translate-x-0 opacity-100',
    slideInUp: 'translate-y-0 opacity-100',
    slideInDown: 'translate-y-0 opacity-100',
    fadeIn: 'opacity-100',
    scaleIn: 'scale-100 opacity-100'
  };

  return (
    <div
      ref={elementRef}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? visibleClasses[animation] : animationClasses[animation]}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}