import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [isReduced, setIsReduced] = useState(false);

  // Check for reduced motion preference and performance
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    setIsReduced(mediaQuery.matches || isLowPerformance);
    
    const handleChange = () => setIsReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isReduced) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      {/* Simple, static decorative elements */}
      <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-20" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 opacity-20" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 opacity-15" />
      
      {/* Subtle floating dots - very simple */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-30" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-300 rounded-full opacity-30" />
      <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-green-300 rounded-full opacity-30" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-30" />
    </div>
  );
}