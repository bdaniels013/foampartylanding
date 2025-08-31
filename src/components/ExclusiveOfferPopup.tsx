import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X, Clock, Sparkles } from 'lucide-react';

interface ExclusiveOfferPopupProps {
  isVisible: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export default function ExclusiveOfferPopup({ isVisible, onClose, onBookNow }: ExclusiveOfferPopupProps) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if timer has been set before
    const timerKey = 'foamPartyOfferTimer';
    const expiredKey = 'foamPartyOfferExpired';
    
    const storedExpired = localStorage.getItem(expiredKey);
    if (storedExpired === 'true') {
      setIsExpired(true);
      return;
    }

    let storedTime = localStorage.getItem(timerKey);
    const now = Date.now();
    
    if (!storedTime) {
      // First visit - set 10 minute timer
      const endTime = now + (10 * 60 * 1000);
      localStorage.setItem(timerKey, endTime.toString());
      storedTime = endTime.toString();
    }
    
    const endTime = parseInt(storedTime);
    const remaining = Math.max(0, endTime - now);
    
    if (remaining <= 0) {
      setIsExpired(true);
      localStorage.setItem(expiredKey, 'true');
      return;
    }
    
    setTimeLeft(remaining);
    
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const newTimeLeft = Math.max(0, endTime - currentTime);
      
      if (newTimeLeft <= 0) {
        setIsExpired(true);
        localStorage.setItem(expiredKey, 'true');
        clearInterval(timer);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (isExpired || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-md bg-gradient-to-br from-white via-blue-50 to-pink-50 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Animated background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-lg"
              animate={{ 
                y: [-10, 10, -10],
                x: [-5, 5, -5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative p-8 text-center">
            {/* Sparkle icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl mb-2 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Upgrade Your Birthday Party on Us!
            </h2>

            {/* Sub-text */}
            <p className="text-lg text-gray-700 mb-6">
              Book today and get <span className="font-bold text-pink-600">COLOR FOAM</span> or{' '}
              <span className="font-bold text-green-600">GLOW FOAM</span> for the same price as a Basic Party.
            </p>

            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm mb-6 inline-block">
              Limited Time Only
            </div>

            {/* Countdown timer */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-sm text-gray-600">Offer expires in:</span>
              <motion.span
                className="text-2xl text-red-600 bg-red-100 px-3 py-1 rounded-lg"
                animate={{ scale: timeLeft <= 60000 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 1, repeat: timeLeft <= 60000 ? Infinity : 0 }}
              >
                {formatTime(timeLeft)}
              </motion.span>
            </div>

            {/* Foam preview */}
            <div className="flex justify-center gap-4 mb-6">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-400/50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0px rgba(74, 222, 128, 0.5)",
                    "0 0 0 10px rgba(74, 222, 128, 0)",
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>

            {/* CTA Button */}
            <Button
              onClick={onBookNow}
              className="w-full py-4 text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Your Party Now!
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}