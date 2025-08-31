import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, Clock, Users, Phone, Mail, MapPin } from 'lucide-react';

interface BookingFormProps {
  className?: string;
}

export default function BookingForm({ className }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    location: '',
    package: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className={`${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <motion.div
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-white text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ✓
              </motion.div>
            </motion.div>
            <h3 className="text-2xl text-green-800 mb-2">Booking Request Received!</h3>
            <p className="text-green-700 mb-4">
              We'll contact you within 24 hours to confirm your foam party details and secure your upgraded package!
            </p>
            <div className="text-sm text-green-600">
              <p>📞 Call us now: <span className="font-bold">(228) 365-3626</span></p>
              <p>📧 Email: <span className="font-bold">info@gulfcoastfoamparty.com</span></p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl">Book Your Foam Party!</CardTitle>
          <p className="text-pink-100">Get your FREE upgrade to Color or Glow Foam today!</p>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                <Users size={16} />
                Parent/Guardian Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
                className="mt-1"
              />
            </div>

            {/* Contact Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} />
                  Phone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(228) 555-0123"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="flex items-center gap-2 text-gray-700">
                  <Calendar size={16} />
                  Preferred Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                  className="mt-1"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label htmlFor="time" className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} />
                  Preferred Time *
                </Label>
                <Select onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Party Size and Package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="partySize" className="flex items-center gap-2 text-gray-700">
                  <Users size={16} />
                  Number of Kids *
                </Label>
                <Select onValueChange={(value) => handleInputChange('partySize', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="How many kids?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 kids</SelectItem>
                    <SelectItem value="11-15">11-15 kids</SelectItem>
                    <SelectItem value="16-20">16-20 kids</SelectItem>
                    <SelectItem value="21-25">21-25 kids</SelectItem>
                    <SelectItem value="25+">25+ kids</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="package" className="flex items-center gap-2 text-gray-700">
                  ✨ Foam Type (FREE Upgrade!)
                </Label>
                <Select onValueChange={(value) => handleInputChange('package', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose your foam" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="color">🌈 COLOR FOAM (FREE upgrade!)</SelectItem>
                    <SelectItem value="glow">💫 GLOW FOAM (FREE upgrade!)</SelectItem>
                    <SelectItem value="basic">Basic White Foam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location" className="flex items-center gap-2 text-gray-700">
                <MapPin size={16} />
                Party Location
              </Label>
              <Input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Address or general area (e.g., Biloxi, Gulfport)"
                className="mt-1"
              />
            </div>

            {/* Submit Button */}
            <motion.div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-xl shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Booking Your Party...
                  </motion.div>
                ) : (
                  'Book My Foam Party! 🎉'
                )}
              </Button>
            </motion.div>

            <div className="text-center text-sm text-gray-600 mt-4">
              <p>📞 Questions? Call us: <span className="font-bold text-blue-600">(228) 365-3626</span></p>
              <p className="text-xs mt-1">We serve Biloxi, Gulfport, Ocean Springs & surrounding areas</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}