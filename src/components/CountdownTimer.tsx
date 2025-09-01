import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 10 minutes from now for maximum urgency
    const endDate = new Date();
    endDate.setMinutes(endDate.getMinutes() + 10);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: 0, // Not needed for 10-minute timer
          hours: 0, // Not needed for 10-minute timer
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className={`${className} text-center`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-4">
        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
          ⚡ URGENT: LIMITED TIME OFFER! ⚡
        </h3>
        <p className="text-base md:text-lg text-blue-100">
          Book now and get your FREE upgrade to Color or Glow Foam!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-xs md:max-w-md mx-auto">
        {/* Minutes */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-2xl md:text-4xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-blue-100 font-medium">MINUTES</div>
        </motion.div>

        {/* Seconds */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="text-2xl md:text-4xl font-bold text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {timeLeft.seconds.toString().padStart(2, '0')}
          </motion.div>
          <div className="text-xs md:text-sm text-blue-100 font-medium">SECONDS</div>
        </motion.div>
      </div>

      <motion.div
        className="mt-4 md:mt-6"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="inline-block bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-lg shadow-lg">
          🚨 BOOK NOW BEFORE TIME RUNS OUT! 🚨
        </div>
      </motion.div>
    </motion.div>
  );
}
