import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Biloxi, MS",
    rating: 5,
    text: "The COLOR FOAM was absolutely incredible! My daughter's 8th birthday was the talk of the neighborhood. The kids didn't want to leave!",
    image: "https://images.unsplash.com/photo-1630441467869-50289148c4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpZHMlMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1NjY2NjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Mike T.",
    location: "Gulfport, MS",
    rating: 5,
    text: "GLOW FOAM at night was pure magic! The birthday boy said it was 'the coolest party ever.' Worth every penny and Gulf Coast made it so easy.",
    image: "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcGFydHklMjBraWRzJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU2NjY2NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Jessica L.",
    location: "Ocean Springs, MS",
    rating: 5,
    text: "Best party investment ever! The foam was clean, the setup was professional, and my twins had the time of their lives. Booking again next year!",
    image: "https://images.unsplash.com/photo-1703908496839-c1a26abcdff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZvYW0lMjBidWJibGVzfGVufDF8fHx8MTc1NjY2NjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "David R.",
    location: "Pascagoula, MS",
    rating: 5,
    text: "Gulf Coast Foam Party exceeded all expectations. The kids are still talking about the foam slide! Professional, fun, and unforgettable.",
    image: "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcGFydHklMjBraWRzJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU2NjY2NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    name: "Amanda K.",
    location: "Long Beach, MS",
    rating: 5,
    text: "The COLOR FOAM upgrade was FREE with our booking! My daughter felt like a princess in pink foam. Thank you Gulf Coast for making her day special!",
    image: "https://images.unsplash.com/photo-1630441467869-50289148c4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpZHMlMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1NjY2NjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl mb-2 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Parents Love Gulf Coast Foam Party!
        </h3>
        <p className="text-gray-600">Real reviews from real families</p>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Testimonial Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-400 to-blue-400">
                      <ImageWithFallback
                        src={testimonials[currentIndex].image}
                        alt={`Happy kids at ${testimonials[currentIndex].name}'s party`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start gap-1 mb-3">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-gray-700 mb-4 italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-sm">
                      <div className="text-gray-900">{testimonials[currentIndex].name}</div>
                      <div className="text-gray-500">{testimonials[currentIndex].location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-pink-500 to-blue-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-3 gap-6 mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl">
          <div className="text-2xl text-pink-600 mb-1">500+</div>
          <div className="text-sm text-gray-600">Happy Families</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
          <div className="text-2xl text-blue-600 mb-1">5.0★</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
          <div className="text-2xl text-green-600 mb-1">100%</div>
          <div className="text-sm text-gray-600">Fun Guaranteed</div>
        </div>
      </motion.div>
    </div>
  );
}