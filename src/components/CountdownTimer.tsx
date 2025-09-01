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
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          🎉 LIMITED TIME OFFER! 🎉
        </h3>
        <p className="text-lg text-blue-100">
          Book now and get your FREE upgrade to Color or Glow Foam!
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {/* Days */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-blue-100 font-medium">DAYS</div>
        </motion.div>

        {/* Hours */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-blue-100 font-medium">HOURS</div>
        </motion.div>

        {/* Minutes */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-blue-100 font-medium">MINUTES</div>
        </motion.div>

        {/* Seconds */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="text-3xl md:text-4xl font-bold text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {timeLeft.seconds.toString().padStart(2, '0')}
          </motion.div>
          <div className="text-sm text-blue-100 font-medium">SECONDS</div>
        </motion.div>
      </div>

      <motion.div
        className="mt-6"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
          ⚡ DON'T MISS OUT! ⚡
        </div>
      </motion.div>
    </motion.div>
  );
}
