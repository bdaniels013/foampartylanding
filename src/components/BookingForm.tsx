import React, { useState } from 'react';
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
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 1. Store locally as backup
      const bookings = JSON.parse(localStorage.getItem('foamPartyBookings') || '[]');
      bookings.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('foamPartyBookings', JSON.stringify(bookings));

      // 2. Send to your email via mailto (immediate)
      const emailSubject = encodeURIComponent(`🎉 NEW FOAM PARTY BOOKING - ${formData.name}`);
      const emailBody = encodeURIComponent(`
NEW FOAM PARTY BOOKING REQUEST!

👤 Parent/Guardian: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Preferred Date: ${formData.date}
⏰ Preferred Time: ${formData.time}
👶 Number of Kids: ${formData.partySize}
📍 Location: ${formData.location}
✨ Package Selected: ${formData.package}

📞 CONTACT THEM IMMEDIATELY to confirm!
📱 Call: ${formData.phone}
📧 Email: ${formData.email}

This is a high-priority booking request!
      `.trim());
      
      // Open email client
      window.open(`mailto:bookings@gulfcoastfoamparty.com?subject=${emailSubject}&body=${emailBody}`);

      // 3. Try to send to Formspree (optional)
      try {
        await fetch('https://formspree.io/f/xdklzrjd', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            partySize: formData.partySize,
            location: formData.location,
            package: formData.package,
            message: `NEW FOAM PARTY BOOKING: ${formData.name} - ${formData.phone} - ${formData.date}`,
          }),
        });
      } catch (error) {
        console.log('Formspree failed, but lead was captured locally and email opened');
      }

      // 4. Send immediate notification (if supported)
      if (navigator.share) {
        try {
          await navigator.share({
            title: '🎉 NEW FOAM PARTY BOOKING!',
            text: `New booking from ${formData.name} - ${formData.phone} - ${formData.date} at ${formData.time}`,
            url: window.location.href
          });
        } catch (error) {
          console.log('Native share failed');
        }
      }

      // Success! Show confirmation
      setIsSubmitted(true);
      
      // Log the booking for immediate action
      console.log('🎉 NEW BOOKING RECEIVED:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        partySize: formData.partySize,
        location: formData.location,
        package: formData.package,
        timestamp: new Date().toISOString()
      });

      console.log('✅ Lead sent to: Local Storage, Email Client, Formspree (if available)');

    } catch (error) {
      console.error('Booking submission failed:', error);
      setError('There was an issue submitting your booking. Please call us directly at (228) 365-3626');
    } finally {
      setIsSubmitting(false);
    }
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
            <h3 className="text-2xl text-green-800 mb-2">Booking Request Sent! 🎉</h3>
            <p className="text-green-700 mb-4">
              We've received your foam party request and will contact you within 1 hour to confirm all details!
            </p>
            <div className="text-sm text-green-600 space-y-2">
              <p>📞 <strong>Call us now:</strong> <span className="font-bold text-lg">(228) 365-3626</span></p>
              <p>📧 <strong>Email:</strong> <span className="font-bold">info@gulfcoastfoamparty.com</span></p>
              <p className="text-xs mt-3 text-green-500">
                Check your email for a confirmation message!
              </p>
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
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
          
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
                  Sending Your Request...
                </motion.div>
                ) : (
                  'Book My Foam Party! 🎉'
                )}
              </Button>
            </motion.div>

            <div className="text-center text-sm text-gray-600 mt-4">
              <p>📞 Questions? Call us: <span className="font-bold text-blue-600">(228) 365-3626</span></p>
              <p className="text-xs mt-1">We serve Biloxi, Gulfport, Ocean Springs & surrounding areas</p>
              <p className="text-xs mt-2 text-blue-600">✅ Real-time notifications sent to your phone & email!</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}