import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FoamGalleryProps {
  onBookNow: () => void;
}

export default function FoamGallery({ onBookNow }: FoamGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/assets/pinkfoam.JPG',
      alt: 'Kids having an amazing time with pink foam',
      title: 'Pink Foam Fun!',
      description: 'Vibrant pink foam creates magical moments'
    },
    {
      src: '/assets/gcfpcannonshot.JPG',
      alt: 'Foam cannon in action at a foam party',
      title: 'Foam Cannon Action!',
      description: 'Professional foam cannons create epic foam storms'
    },
    {
      src: '/assets/glowfoam.JPG',
      alt: 'Glow foam party at night',
      title: 'Glow Foam Magic!',
      description: 'Nighttime glow foam creates unforgettable memories'
    },
    {
      src: '/assets/IMG_0725.JPG',
      alt: 'Kids enjoying foam party activities',
      title: 'Pure Joy & Laughter!',
      description: 'Every child deserves this much fun'
    },
    {
      src: '/assets/IMG_0738.JPG',
      alt: 'Foam party in full swing',
      title: 'Foam Party Extravaganza!',
      description: 'Professional setup creates the perfect party'
    },
    {
      src: '/assets/IMG_0734.JPG',
      alt: 'Kids playing in foam',
      title: 'Foam Wonderland!',
      description: 'Transform any backyard into a foam paradise'
    },
    {
      src: '/assets/IMG_0726.JPG',
      alt: 'Colorful foam party scene',
      title: 'Color Foam Delight!',
      description: 'Vibrant colors make every party special'
    },
    {
      src: '/assets/IMG_0739.JPG',
      alt: 'Foam party celebration',
      title: 'Birthday Magic!',
      description: 'The most talked-about party of the year'
    },
    {
      src: '/assets/IMG_0740.JPG',
      alt: 'Kids having fun in foam',
      title: 'Epic Foam Adventure!',
      description: 'Safe, clean, and guaranteed fun'
    },
    {
      src: '/assets/IMG_0736.JPG',
      alt: 'Foam party excitement',
      title: 'Pure Excitement!',
      description: 'Kids can\'t stop smiling and laughing'
    },
    {
      src: '/assets/IMG_0737.JPG',
      alt: 'Foam party memories',
      title: 'Unforgettable Memories!',
      description: 'These moments last a lifetime'
    },
    {
      src: '/assets/IMG_0730.JPG',
      alt: 'Foam party fun',
      title: 'Foam Party Bliss!',
      description: 'Professional equipment ensures perfect fun'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
            See the Magic in Action! ✨
          </h2>
          <p className="text-xl text-gray-600">
            Real foam parties that create unforgettable memories
          </p>
        </motion.div>

        {/* Photo Carousel */}
        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <ImageWithFallback
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-[500px] object-cover"
                  fallback={
                    <div className="w-full h-[500px] bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center">
                      <div className="text-white text-4xl">🫧</div>
                    </div>
                  }
                />
                
                {/* Overlay with title and description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h3>
                    <p className="text-lg opacity-90">{images[currentIndex].description}</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ✨ REAL PARTY
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${
                  index === currentIndex 
                    ? 'ring-4 ring-pink-500 scale-110' 
                    : 'ring-2 ring-gray-200 hover:ring-pink-300'
                }`}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-16 h-12 object-cover"
                  fallback={
                    <div className="w-16 h-12 bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center">
                      <div className="text-white text-sm">🫧</div>
                    </div>
                  }
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Image Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {currentIndex + 1} of {images.length} photos
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Magic? 🎉</h3>
            <p className="text-lg mb-6 opacity-90">
              Book now and get your FREE upgrade to Color or Glow Foam!
            </p>
            <button
              onClick={onBookNow}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-orange-600"
            >
              Book My Foam Party Now! 🫧
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
