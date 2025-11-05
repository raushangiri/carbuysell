import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { CarCard } from '../components/CarCard';
import { mockCars, mockTestimonials, partnerBrands } from '../lib/mockData';
import { ShoppingCart, DollarSign, GitCompare, CreditCard, Shield, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function HomePage() {
  const featuredCars = mockCars.slice(0, 6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev >= featuredCars.length - slidesToShow ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredCars.length, slidesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= featuredCars.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? featuredCars.length - slidesToShow : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2342] to-[#1a4d7a] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4 text-white">
              Find Your Perfect Car Today
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Browse thousands of verified cars. Compare prices. Get the best deal.
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-[#0A2342] dark:text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: ShoppingCart, title: 'Buy', desc: 'Browse verified cars', link: '/listings' },
              { icon: DollarSign, title: 'Sell', desc: 'Get best price', link: '/sell' },
              { icon: GitCompare, title: 'Compare', desc: 'Side-by-side analysis', link: '/compare' },
              { icon: CreditCard, title: 'Loan', desc: 'Easy financing', link: '/loan-insurance' },
              { icon: Shield, title: 'Insurance', desc: 'Protect your car', link: '/loan-insurance' },
            ].map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="p-6 text-center hover:shadow-xl transition-shadow cursor-pointer border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0A2342] dark:bg-[#FFD700] text-white dark:text-[#0A2342] mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-[#0A2342] dark:text-white">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Carousel */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-[#0A2342] dark:text-white">Featured Cars</h2>
              <p className="text-gray-600 dark:text-gray-400">Handpicked premium vehicles for you</p>
            </div>
            <Button asChild variant="outline" className="border-[#0A2342] text-[#0A2342] dark:border-[#FFD700] dark:text-[#FFD700]">
              <Link to="/listings">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Custom Carousel */}
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-[#0A2342] dark:text-white" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                }}
              >
                {featuredCars.map((car) => (
                  <div 
                    key={car.id} 
                    className="flex-shrink-0"
                    style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 24 / slidesToShow}px)` }}
                  >
                    <CarCard car={car} showCompare={false} />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-[#0A2342] dark:text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(featuredCars.length - slidesToShow + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'w-8 bg-[#FFD700]' 
                      : 'w-2 bg-gray-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-[#0A2342] dark:text-white">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#0A2342] dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{testimonial.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-[#0A2342] dark:text-white">
            Trusted Partner Brands
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerBrands.map((brand, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
