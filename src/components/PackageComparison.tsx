import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, X, Sparkles, Zap } from 'lucide-react';

interface PackageComparisonProps {
  onBookNow: () => void;
}

export default function PackageComparison({ onBookNow }: PackageComparisonProps) {
  const packages = [
    {
      name: 'Basic Package',
      price: '$375',
      originalPrice: null,
      color: 'gray',
      icon: '🤍',
      description: 'Classic white foam fun',
      features: [
        'Up to 15 kids',
        'White foam only',
        '2-hour party',
        'Professional setup & cleanup',
        'Safe, biodegradable foam',
        'Fully insured service'
      ],
      popular: false
    },
    {
      name: 'Color Foam Premium',
      price: '$375',
      originalPrice: '$425',
      color: 'pink',
      icon: '🌈',
      description: 'Vibrant colored foam experience',
      features: [
        'Up to 15 kids',
        'Colorful foam (Pink, Blue, Purple)',
        '2-hour party',
        'Enhanced setup & cleanup',
        'Color-changing effects',
        'Premium foam quality',
        'Save $50 today!'
      ],
      popular: true,
      upgrade: true
    },
    {
      name: 'Glow Foam Deluxe',
      price: '$375',
      originalPrice: '$450',
      color: 'green',
      icon: '💫',
      description: 'Magical glowing foam party',
      features: [
        'Up to 15 kids',
        'Glow-in-the-dark foam',
        '2-hour party',
        'LED lighting setup',
        'Professional setup & cleanup',
        'Perfect for evening parties',
        'Blacklight effects',
        'Save $75 today!'
      ],
      popular: false,
      upgrade: true
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Foam Experience
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book today and get Color or Glow Foam for the price of Basic!
          </motion.p>
          
          {/* FREE Upgrade Banner */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold shadow-lg"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 4px 20px rgba(251, 191, 36, 0.4)",
                "0 8px 30px rgba(251, 191, 36, 0.6)",
                "0 4px 20px rgba(251, 191, 36, 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={20} />
            FREE UPGRADE TODAY ONLY!
            <Sparkles size={20} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`relative h-full ${
                pkg.popular 
                  ? 'border-2 border-pink-500 shadow-2xl transform scale-105' 
                  : pkg.upgrade 
                    ? 'border-2 border-green-500 shadow-xl'
                    : 'border border-gray-200 shadow-lg'
              }`}>
                {pkg.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    MOST POPULAR
                  </motion.div>
                )}

                {pkg.upgrade && (
                  <motion.div
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-full shadow-lg"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-xs font-bold">FREE<br/>TODAY</span>
                  </motion.div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                  
                  <div className="mt-4">
                    {pkg.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        Was {pkg.originalPrice}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-gray-900">
                      {pkg.price}
                      {pkg.upgrade && (
                        <span className="text-sm text-green-600 ml-2">
                          (FREE upgrade!)
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    onClick={onBookNow}
                    className={`w-full py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white transform hover:scale-105'
                        : pkg.upgrade
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white transform hover:scale-105'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {pkg.upgrade ? 'Get FREE Upgrade!' : 'Select Basic Package'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-600 mb-4">
            All packages include professional setup, cleanup, and fun memories for life!
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>✅ Fully Insured</span>
            <span>✅ Professional Equipment</span>
            <span>✅ Safe & Clean</span>
            <span>✅ Satisfaction Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}