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
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                fallback={
                  <div className="w-full h-80 bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center">
                    <div className="text-white text-4xl">🫧</div>
                  </div>
                }
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
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
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book My Foam Party Now! 🫧
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
