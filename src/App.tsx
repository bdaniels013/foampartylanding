import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Star, Users, Mail, Phone, Calendar, MapPin, Check } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import PackageComparison from './components/PackageComparison';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import BookingForm from './components/BookingForm';
import AnimatedBackground from './components/AnimatedBackground';
import CountdownTimer from './components/CountdownTimer';
import Logo from './components/Logo';
import FoamGallery from './components/FoamGallery';
import FloatingActionButton from './components/FloatingActionButton';
import ExclusiveOfferPopup from './components/ExclusiveOfferPopup';

export default function App() {
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showSplash) {
    return (
      <div className="min-h-screen">
        <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">🫧</h1>
            <p className="text-xl md:text-2xl">Loading Foam Party Magic...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm mobile-nav">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2 md:gap-3">
              <Logo size="sm" />
              <a 
                href="https://www.gulfcoastfoamparty.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-base md:text-lg lg:text-xl bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-blue-300 transition-all duration-300"
              >
                Gulf Coast Foam Party
              </a>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-xl btn-hover"
              >
                Book Now
              </Button>
            </div>

            {/* Enhanced Mobile menu button */}
            <Button
              onClick={scrollToBooking}
              className="md:hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-xl px-6 py-3 text-sm font-semibold min-h-[44px] btn-hover"
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-8 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Unforgettable Memories!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 drop-shadow-lg">
                These moments last a lifetime
              </p>
              
              {/* Countdown Timer */}
              <div className="mb-6 md:mb-8">
                <CountdownTimer />
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  onClick={scrollToBooking}
                  className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Book Your Party Now! 🎉
                </Button>
                <Button
                  onClick={() => {
                    document.getElementById('packages')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  variant="outline"
                  className="text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white rounded-xl transition-all duration-300"
                >
                  See FREE Upgrade Offer
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="flex justify-center lg:justify-start gap-4 md:gap-8 text-center mt-6 md:mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div>
                  <div className="text-xl md:text-2xl text-pink-600">500+</div>
                  <div className="text-xs md:text-sm text-gray-600">Happy Kids</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl text-blue-600">5.0★</div>
                  <div className="text-xs md:text-sm text-gray-600">Rating</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl text-green-600">100%</div>
                  <div className="text-xs md:text-sm text-gray-600">Fun Guaranteed</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/assets/IMG_0725.JPG"
                  alt="Kids having an amazing time at an epic foam party"
                  className="w-full h-[300px] md:h-[500px] object-cover"
                  fallback={
                    <div className="w-full h-[300px] md:h-[500px] bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl md:rounded-3xl flex items-center justify-center">
                      <div className="text-white text-4xl">🫧</div>
                    </div>
                  }
                />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-2 md:top-4 right-2 md:right-4 bg-yellow-400 text-black px-2 md:px-4 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  FREE Upgrade Today!
                </motion.div>
                
                <motion.div
                  className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-white/90 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full flex items-center gap-1 md:gap-2"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-semibold">5.0 Rating</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section id="packages" className="py-12 md:py-16 bg-white/50">
        <PackageComparison onBookNow={scrollToBooking} />
      </section>

      {/* Foam Gallery */}
      <section id="gallery" className="py-12 md:py-16">
        <FoamGallery onBookNow={scrollToBooking} />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Booking Form */}
      <section ref={bookingRef} className="py-12 md:py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready for the Ultimate Foam Party?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Book now and get your FREE upgrade to Color or Glow Foam!
            </p>
          </motion.div>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <Logo size="sm" />
                <div>
                  <a 
                    href="https://www.gulfcoastfoamparty.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-lg md:text-xl bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-blue-300 transition-all duration-300"
                  >
                    Gulf Coast Foam Party
                  </a>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Creating unforgettable foam party experiences for kids and adults across the Gulf Coast!
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <Phone size={16} className="md:w-5 md:h-5 text-pink-400" />
                  <a href="tel:(228)364-3441" className="text-sm md:text-base hover:text-pink-400 transition-colors">
                    (228) 364-3441
                  </a>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Mail size={16} className="md:w-5 md:h-5 text-pink-400" />
                  <a href="mailto:bookings@gulfcoastfoamparty.com" className="text-sm md:text-base hover:text-pink-400 transition-colors">
                    bookings@gulfcoastfoamparty.com
                  </a>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <MapPin size={16} className="md:w-5 md:h-5 text-pink-400" />
                  <span className="text-sm md:text-base">Gulf Coast, MS</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 md:space-y-3">
                <div>
                  <a href="#packages" className="text-sm md:text-base hover:text-pink-400 transition-colors block">
                    View Packages
                  </a>
                </div>
                <div>
                  <a href="#gallery" className="text-sm md:text-base hover:text-pink-400 transition-colors block">
                    Photo Gallery
                  </a>
                </div>
                <div>
                  <a href="#testimonials" className="text-sm md:text-base hover:text-pink-400 transition-colors block">
                    Reviews
                  </a>
                </div>
                <div className="pt-2">
                  <Button
                    onClick={scrollToBooking}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg px-4 py-2 text-sm"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center">
            <p className="text-xs md:text-sm text-gray-400">
              © 2024 Gulf Coast Foam Party. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton onBookNow={scrollToBooking} />

      {/* Exclusive Offer Popup */}
      <ExclusiveOfferPopup
        isVisible={showOfferPopup}
        onClose={() => setShowOfferPopup(false)}
        onBookNow={scrollToBooking}
      />
    </div>
  );
}