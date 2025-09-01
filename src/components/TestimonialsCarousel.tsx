import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// REAL GOOGLE REVIEWS - 5-star reviews from actual customers
const testimonials = [
  {
    id: 1,
    name: "Taylor",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "We hired Gulf Coast Foam Party for an adult backyard party, and it was a total hit! Megan brought the energy, the setup was awesome, and the foam turned the whole night into an unforgettable experience. Megan was super professional, arrived on time, and made everything so easy. If you're looking to level up your next event, this is it. Highly recommend!",
    image: "/assets/IMG_0725.JPG"
  },
  {
    id: 2,
    name: "Karla Owens",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "Megan has always made foam party the best for our littles ❤️ 5 stars for sure!",
    image: "/assets/pinkfoam.JPG"
  },
  {
    id: 3,
    name: "Evelyn McQueen",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "My kids had so much fun playing with their friends in the foam! Highly recommend!",
    image: "/assets/IMG_0738.JPG"
  },
  {
    id: 4,
    name: "Erin Fulcher",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "This was the most fun party our kids have had! The weather did not look good, but Gulf Coast Foam Party showed up and was willing to still do the party! They were super nice and accommodating to make everything work even in the rain. They took many videos of our kids and kept the party going. I highly recommend them! You will have a blast!",
    image: "/assets/IMG_0734.JPG"
  },
  {
    id: 5,
    name: "Geneva Dummer",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "Great to work with!! The kids had so much fun!!",
    image: "/assets/IMG_0726.JPG"
  },
  {
    id: 6,
    name: "Alexis Moody",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "I definitely recommend. Such a fun experience!!!!",
    image: "/assets/glowfoam.JPG"
  },
  {
    id: 7,
    name: "Piper Tillman",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "Excellent experience with customizing our event and communication! They stayed during the whole event and kept everything running smoothly. Kids had the best time!",
    image: "/assets/IMG_0739.JPG"
  },
  {
    id: 8,
    name: "Leslie Papania",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "Kids loved their Foam Experience! Very professional company. I highly recommend using them for your next kid or adult party!",
    image: "/assets/IMG_0740.JPG"
  },
  {
    id: 9,
    name: "Julie Spoon",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "Very professional and courtesy company! We didn't have to do anything. They came in set up, the kids had a blast, and they handled take down and clean up. This was an event at our school and nothing we've ever done before was this easy! We will definitely be using Gulf Cost Foam Party again and highly recommend you give them a call!",
    image: "/assets/IMG_0736.JPG"
  },
  {
    id: 10,
    name: "Amanda Rosetti",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "We had Gulf Coast Foam party come to our elementary school for an end of the year event for all students. Let me tell you, the smiles from the students were endless and they talked about this event for days, often describing it as 'the best day ever.' It is great because it caters to many kids at one time, causing no delay in FUN! Can't say enough about the fun day we had with Gulf Coast Foam Party and we hope to make it an annual event!",
    image: "/assets/IMG_0737.JPG"
  },
  {
    id: 11,
    name: "April Chewning",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "Such great experience! They came and set up, maintained their machines and packed everything. The owners are the nicest and so easy to work with. I 10/10 recommend for an amazing unforgettable experience!",
    image: "/assets/IMG_0730.JPG"
  },
  {
    id: 12,
    name: "Kristin Hall",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "My son has THE BEST TIME at his 9th birthday party, thanks to Gulf Coast Foam party! It was definitely a hit for all of the kids of all ages! They were on time and very professional! Definitely give them a call!",
    image: "/assets/gcfpcannonshot.JPG"
  },
  {
    id: 13,
    name: "Kristan Ladner",
    location: "Gulf Coast, MS",
    rating: 5,
    text: "We've used Gulf Coast Foam Party for THREE different birthday parties over the last two years. We've hosted two summer foam parties and one winter snow party. All of our events have been HUGE successes. The company provides kid-friendly music and various games. They are a ton of fun for all the kids, little and big ones!",
    image: "/assets/IMG_0722.JPG"
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