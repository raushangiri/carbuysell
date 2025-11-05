import React from 'react';
import { Card } from '../components/ui/card';
import { Target, Users, Award, TrendingUp, Shield, Heart, Zap, Globe } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { value: '50,000+', label: 'Cars Sold', icon: TrendingUp },
    { value: '25,000+', label: 'Happy Customers', icon: Users },
    { value: '100+', label: 'Cities Covered', icon: Globe },
    { value: '4.8/5', label: 'Customer Rating', icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest dealings and transparent pricing. No hidden costs, just genuine service.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure you find your perfect car.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging technology to make car buying and selling simple, fast, and convenient.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every vehicle is thoroughly inspected and verified before listing on our platform.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    },
    {
      name: 'Amit Patel',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2342] to-[#1a4d7a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-white">About YourCar</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            India's most trusted platform for buying and selling cars. We're on a mission to revolutionize 
            the automotive marketplace with transparency, technology, and trust.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700]/20 mb-4">
                  <stat.icon className="h-8 w-8 text-[#0A2342] dark:text-[#FFD700]" />
                </div>
                <div className="text-4xl text-[#0A2342] dark:text-white mb-2">{stat.value}</div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-[#0A2342] dark:text-white">Who We Are</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2015, YourCar has grown to become India's leading online car marketplace. 
                We connect thousands of buyers and sellers every day, making the car buying and selling 
                process seamless and stress-free.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our platform combines cutting-edge technology with personalized service to ensure every 
                transaction is smooth, transparent, and beneficial for both parties. From detailed car 
                listings to financing options and insurance, we provide everything you need under one roof.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                With presence in over 100 cities across India and a team of dedicated automotive experts, 
                we're committed to helping you make informed decisions about your next car purchase or sale.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
                alt="YourCar Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#FFD700] mb-4">
                <Target className="h-6 w-6 text-[#0A2342]" />
              </div>
              <h2 className="mb-6 text-[#0A2342] dark:text-white">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To revolutionize the automotive marketplace by creating a transparent, efficient, and 
                customer-centric platform that empowers buyers and sellers to make confident decisions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We strive to eliminate the traditional pain points of car transactions by leveraging 
                technology, data-driven insights, and exceptional customer service. Our goal is to make 
                every car buying and selling experience as smooth and enjoyable as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A2342] dark:text-white">Why Choose YourCar</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our core values drive everything we do, ensuring the best experience for our customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0A2342] dark:bg-[#FFD700] mb-4">
                  <value.icon className="h-6 w-6 text-white dark:text-[#0A2342]" />
                </div>
                <h3 className="mb-3 text-[#0A2342] dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A2342] dark:text-white">Meet Our Leadership</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming the car marketplace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="mb-1 text-[#0A2342] dark:text-white">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A2342] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Join Thousands of Satisfied Customers</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the future of car buying and selling with YourCar
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/listings"
              className="px-8 py-3 bg-[#FFD700] text-[#0A2342] rounded-lg hover:bg-[#FFD700]/90 transition-colors inline-block"
            >
              Browse Cars
            </a>
            <a
              href="/sell"
              className="px-8 py-3 bg-white text-[#0A2342] rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Sell Your Car
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
