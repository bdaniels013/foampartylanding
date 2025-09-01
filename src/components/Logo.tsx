import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <motion.div
      className={`${className} ${sizeClasses[size]} relative`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo container with gradient border */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 shadow-2xl overflow-hidden">
        {/* Placeholder for logo - replace with your actual logo */}
        <div className="w-full h-full flex items-center justify-center">
          {/* User's actual logo */}
          <img 
            src="/assets/logo.png" 
            alt="Gulf Coast Foam Party" 
            className="w-full h-full object-contain p-2"
          />
          
          {/* Fallback text logo - commented out since we have the actual logo */}
          {/* <div className="text-center text-white font-bold">
            <div className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              GULF COAST
            </div>
            <div className="text-sm md:text-base font-bold text-white">
              FOAM PARTY
            </div>
          </div> */}
        </div>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-xl -z-10" />
    </motion.div>
  );
}
