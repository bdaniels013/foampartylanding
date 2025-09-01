import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FoamGalleryProps {
  onBookNow: () => void;
}

export default function FoamGallery({ onBookNow }: FoamGalleryProps) {
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

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                fallback={
                  <div className="w-full h-64 bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center">
                    <div className="text-white text-4xl">🫧</div>
                  </div>
                }
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                ✨ REAL PARTY
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional photo showcase */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['IMG_0732.JPG', 'IMG_0722.JPG', 'IMG_0727.JPG', 'IMG_0715.JPG'].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={`/assets/${image}`}
                  alt={`Foam party photo ${index + 1}`}
                  className="w-full h-32 object-cover"
                  fallback={
                    <div className="w-full h-32 bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center">
                      <div className="text-white text-2xl">🫧</div>
                    </div>
                  }
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
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
