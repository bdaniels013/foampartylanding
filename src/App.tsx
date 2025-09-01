import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Phone, Mail, MapPin, Star, Menu, X } from 'lucide-react';
import FoamSplashAnimation from './components/FoamSplashAnimation';
import ExclusiveOfferPopup from './components/ExclusiveOfferPopup';
import BookingForm from './components/BookingForm';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import AnimatedBackground from './components/AnimatedBackground';
import UrgencyBanner from './components/UrgencyBanner';
import PackageComparison from './components/PackageComparison';
import CountdownTimer from './components/CountdownTimer';
import Logo from './components/Logo';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [showSplashAnimation, setShowSplashAnimation] = useState(true);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show offer popup after splash animation
    if (!showSplashAnimation) {
      const timer = setTimeout(() => {
        setShowOfferPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showSplashAnimation]);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowOfferPopup(false);
    setIsMenuOpen(false);
  };

  const handleSplashComplete = () => {
    setShowSplashAnimation(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Splash Animation */}
      {showSplashAnimation && (
        <FoamSplashAnimation onAnimationComplete={handleSplashComplete} />
      )}

      {/* Exclusive Offer Popup */}
      <ExclusiveOfferPopup
        isVisible={showOfferPopup}
        onClose={() => setShowOfferPopup(false)}
        onBookNow={scrollToBooking}
      />

      {/* Urgency Banner */}
      {!showSplashAnimation && <UrgencyBanner />}

      {/* Sticky Navigation */}
      {!showSplashAnimation && (
        <motion.nav
          className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🫧</span>
                </div>
                <div>
                  <div className="font-bold text-lg bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Gulf Coast Foam Party
                  </div>
                  <div className="text-xs text-gray-500">Making memories with foam!</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#packages" className="text-gray-700 hover:text-pink-600 transition-colors">Packages</a>
                <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
                <Button
                  onClick={scrollToBooking}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full"
                >
                  Book Your Party
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="p-4 space-y-4">
                  <a href="#packages" className="block text-gray-700 hover:text-pink-600 transition-colors">Packages</a>
                  <a href="#testimonials" className="block text-gray-700 hover:text-pink-600 transition-colors">Reviews</a>
                  <a href="#contact" className="block text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
                  >
                    Book Your Party
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>
      )}

      {/* Main Content */}
      {!showSplashAnimation && (
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Text */}
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1
                    className="text-5xl lg:text-6xl mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      The Most Epic
                    </span>
                    <br />
                    <span className="text-gray-900">Birthday Party</span>
                    <br />
                    <span className="text-pink-600">Your Kids Will</span>
                    <br />
                    <span className="text-blue-600">Never Forget!</span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-600 mb-8 max-w-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Transform any backyard into a foam wonderland! Safe, clean, and guaranteed to create the most talked-about party of the year.
                  </motion.p>

                  {/* Countdown Timer */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <CountdownTimer />
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Button
                      onClick={scrollToBooking}
                      className="text-xl px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Book Your Party Now! 🎉
                    </Button>
                    <Button
                      onClick={() => setShowOfferPopup(true)}
                      variant="outline"
                      className="text-lg px-6 py-4 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white rounded-xl transition-all duration-300"
                    >
                      See FREE Upgrade Offer
                    </Button>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div
                    className="flex justify-center lg:justify-start gap-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div>
                      <div className="text-2xl text-pink-600">500+</div>
                      <div className="text-sm text-gray-600">Happy Kids</div>
                    </div>
                    <div>
                      <div className="text-2xl text-blue-600">5.0★</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl text-green-600">100%</div>
                      <div className="text-sm text-gray-600">Fun Guaranteed</div>
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
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcGFydHklMjBraWRzJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU2NjY2NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Kids having fun at a foam party"
                      className="w-full h-[500px] object-cover"
                    />
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      FREE Upgrade Today!
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">5.0 Rating</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Package Comparison */}
          <section id="packages" className="py-16 bg-white/50">
            <PackageComparison onBookNow={scrollToBooking} />
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <TestimonialsCarousel />
            </div>
          </section>

          {/* Booking Form */}
          <section ref={bookingRef} className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Ready for the Ultimate Foam Party?
                </h2>
                <p className="text-xl text-gray-600">
                  Book now and get your FREE upgrade to Color or Glow Foam!
                </p>
              </motion.div>
              <BookingForm />
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🫧</span>
                    </div>
                    <div className="font-bold text-xl">Gulf Coast Foam Party</div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Creating unforgettable foam party experiences across the Mississippi Gulf Coast.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">5.0 on Google Reviews</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone size={16} />
                      <a href="tel:(228)365-3626" className="hover:text-pink-400 transition-colors">
                        (228) 365-3626
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} />
                      <a href="mailto:info@gulfcoastfoamparty.com" className="hover:text-pink-400 transition-colors">
                        info@gulfcoastfoamparty.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} />
                      <span>Serving Mississippi Gulf Coast</span>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                    <div>Biloxi</div>
                    <div>Gulfport</div>
                    <div>Ocean Springs</div>
                    <div>Pascagoula</div>
                    <div>Bay St. Louis</div>
                    <div>Long Beach</div>
                    <div>Pass Christian</div>
                    <div>Waveland</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2024 Gulf Coast Foam Party. All rights reserved. Licensed & Insured.</p>
              </div>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}