import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function UrgencyBanner() {
  const [bookingsThisWeek, setBookingsThisWeek] = useState(0);
  const [weekendsLeft, setWeekendsLeft] = useState(0);

  useEffect(() => {
    // Simulate real-time booking counter
    const initialBookings = 23; // Starting number
    setBookingsThisWeek(initialBookings);

    // Calculate weekends left in season (assuming season ends in October)
    const now = new Date();
    const endOfSeason = new Date(now.getFullYear(), 9, 31); // October 31st
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksDiff = Math.ceil((endOfSeason.getTime() - now.getTime()) / msPerWeek);
    setWeekendsLeft(Math.max(0, weeksDiff));

    // Simulate booking updates every 2-5 minutes
    const bookingInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every interval
        setBookingsThisWeek(prev => prev + 1);
      }
    }, Math.random() * 180000 + 120000); // 2-5 minutes

    return () => clearInterval(bookingInterval);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white py-3 px-4 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
          {/* Live booking counter */}
          <motion.div
            className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Users size={16} />
            <span className="font-semibold">
              {bookingsThisWeek} parties booked this week!
            </span>
          </motion.div>

          {/* Weekends left */}
          <motion.div
            className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full"
            animate={{ 
              boxShadow: weekendsLeft <= 4 ? [
                "0 0 0 0px rgba(255, 255, 255, 0.5)",
                "0 0 0 8px rgba(255, 255, 255, 0)",
              ] : "none"
            }}
            transition={{ 
              duration: 1.5, 
              repeat: weekendsLeft <= 4 ? Infinity : 0, 
              ease: "easeInOut" 
            }}
          >
            <Calendar size={16} />
            <span className="font-semibold">
              Only {weekendsLeft} weekends left this season!
            </span>
          </motion.div>

          {/* Upgrade offer reminder */}
          <motion.div
            className="flex items-center gap-2 bg-yellow-400/90 text-black px-3 py-1 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Clock size={16} />
            <span className="font-bold">
              FREE Color/Glow upgrade expires soon!
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}