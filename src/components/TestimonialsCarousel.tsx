import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// REAL GOOGLE REVIEWS - Replace these with actual 5-star reviews from Google
// Copy the review text from: https://www.google.com/search?q=gulf+coast+foam+party#mpd=~3387181890451968596/customers/reviews
// Only include 5-star reviews as requested
const testimonials = [
  {
    id: 1,
    name: "REAL REVIEWER NAME", // Replace with actual reviewer name from Google
    location: "Biloxi, MS", // Replace with actual location
    rating: 5,
    text: "PASTE REAL 5-STAR REVIEW TEXT HERE - Copy from Google reviews page",
    image: "https://images.unsplash.com/photo-1630441467869-50289148c4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpZHMlMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1NjY2NjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "REAL REVIEWER NAME", // Replace with actual reviewer name from Google
    location: "Gulfport, MS", // Replace with actual location
    rating: 5,
    text: "PASTE REAL 5-STAR REVIEW TEXT HERE - Copy from Google reviews page",
    image: "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcGFydHklMjBraWRzJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU2NjY2NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "REAL REVIEWER NAME", // Replace with actual reviewer name from Google
    location: "Ocean Springs, MS", // Replace with actual location
    rating: 5,
    text: "PASTE REAL 5-STAR REVIEW TEXT HERE - Copy from Google reviews page",
    image: "https://images.unsplash.com/photo-1703908496839-c1a26abcdff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZvYW0lMjBidWJibGVzfGVufDF8fHx8MTc1NjY2NjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "REAL REVIEWER NAME", // Replace with actual reviewer name from Google
    location: "Pascagoula, MS", // Replace with actual location
    rating: 5,
    text: "PASTE REAL 5-STAR REVIEW TEXT HERE - Copy from Google reviews page",
    image: "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcGFydHklMjBraWRzJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU2NjY2NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    name: "REAL REVIEWER NAME", // Replace with actual reviewer name from Google
    location: "Long Beach, MS", // Replace with actual location
    rating: 5,
    text: "PASTE REAL 5-STAR REVIEW TEXT HERE - Copy from Google reviews page",
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
        <p className="text-gray-600">Real 5-star reviews from Google</p>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Reviewer Image */}
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name} review`}
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                      fallback={
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {testimonials[currentIndex].name.charAt(0)}
                          </span>
                        </div>
                      }
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {renderStars(testimonials[currentIndex].rating)}
                      <span className="text-sm text-gray-500 ml-2">
                        {testimonials[currentIndex].rating}.0 stars
                      </span>
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 mb-4 italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                      
                      {/* Google Review Badge */}
                      <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border">
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-xs font-medium text-gray-600">Google Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}