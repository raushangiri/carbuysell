import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Car Street, Auto Plaza\nMumbai 400001, India',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 1800-123-4567\n+91 98765 43210',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@yourcar.com\ninfo@yourcar.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Saturday: 9 AM - 8 PM\nSunday: 10 AM - 6 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2342] to-[#1a4d7a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-white">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFD700]/20 mb-4">
                  <info.icon className="h-7 w-7 text-[#0A2342] dark:text-[#FFD700]" />
                </div>
                <h3 className="mb-3 text-[#0A2342] dark:text-white">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                  {info.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-[#0A2342] dark:text-white">Send Us a Message</h2>
              <Card className="p-8 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A2342]">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-[#0A2342] dark:text-white">Our Location</h2>
                <Card className="overflow-hidden border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  {/* Google Maps Embed */}
                  <div className="w-full h-80 bg-gray-200 dark:bg-slate-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637344999999!3d19.08219785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="YourCar Office Location"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-[#0A2342] dark:text-white">YourCar Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Visit our flagship showroom to explore our collection of premium vehicles and 
                      meet our expert team who can guide you through your car buying journey.
                    </p>
                  </div>
                </Card>
              </div>

              {/* FAQ Quick Links */}
              <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h3 className="mb-4 text-[#0A2342] dark:text-white">Quick Help</h3>
                <div className="space-y-3">
                  <div className="pb-3 border-b border-gray-200 dark:border-slate-700">
                    <h4 className="text-gray-900 dark:text-white mb-1">Need immediate assistance?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Call our 24/7 helpline: <span className="text-[#0A2342] dark:text-[#FFD700]">+91 1800-123-4567</span>
                    </p>
                  </div>
                  <div className="pb-3 border-b border-gray-200 dark:border-slate-700">
                    <h4 className="text-gray-900 dark:text-white mb-1">Selling your car?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Get instant valuation at{' '}
                      <a href="/sell" className="text-[#0A2342] dark:text-[#FFD700] hover:underline">
                        Sell Your Car
                      </a>
                    </p>
                  </div>
                  <div className="pb-3 border-b border-gray-200 dark:border-slate-700">
                    <h4 className="text-gray-900 dark:text-white mb-1">Looking to buy?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Browse our verified listings at{' '}
                      <a href="/listings" className="text-[#0A2342] dark:text-[#FFD700] hover:underline">
                        Buy Cars
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-1">Finance options?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Explore loan & insurance at{' '}
                      <a href="/loan-insurance" className="text-[#0A2342] dark:text-[#FFD700] hover:underline">
                        Financing
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h3 className="mb-4 text-[#0A2342] dark:text-white">Follow Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Stay updated with the latest car deals, tips, and automotive news on our social media channels.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0A2342] dark:bg-[#FFD700] flex items-center justify-center text-white dark:text-[#0A2342] hover:opacity-80 transition-opacity"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0A2342] dark:bg-[#FFD700] flex items-center justify-center text-white dark:text-[#0A2342] hover:opacity-80 transition-opacity"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0A2342] dark:bg-[#FFD700] flex items-center justify-center text-white dark:text-[#0A2342] hover:opacity-80 transition-opacity"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0A2342] dark:bg-[#FFD700] flex items-center justify-center text-white dark:text-[#0A2342] hover:opacity-80 transition-opacity"
                  >
                    📷
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
