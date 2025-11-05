import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockCars } from '../lib/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CarCard } from '../components/CarCard';
import { Phone, Mail, MapPin, Star, Calendar, Fuel, Gauge, Settings, Users, Package } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';

export function CarDetailPage() {
  const { id } = useParams();
  const car = mockCars.find((c) => c.id === id);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-[#0A2342] dark:text-white">Car Not Found</h2>
          <Button asChild>
            <Link to="/listings">Browse Cars</Link>
          </Button>
        </div>
      </div>
    );
  }

  const similarCars = mockCars.filter((c) => c.id !== car.id && c.bodyType === car.bodyType).slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your inquiry has been submitted! The seller will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Banner */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${car.image})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <Badge className="mb-2 bg-[#FFD700] text-[#0A2342]">{car.year}</Badge>
                <h1 className="mb-2 text-white">{car.brand} {car.model}</h1>
                <p className="text-2xl">₹ {(car.price / 100000).toFixed(2)} Lakh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="loan">Loan & Insurance</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{car.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Fuel className="h-5 w-5 text-[#0A2342] dark:text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Fuel Type</p>
                        <p className="text-gray-900 dark:text-white">{car.fuelType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-5 w-5 text-[#0A2342] dark:text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Mileage</p>
                        <p className="text-gray-900 dark:text-white">{car.mileage} km/l</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-[#0A2342] dark:text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Transmission</p>
                        <p className="text-gray-900 dark:text-white">{car.transmission}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#0A2342] dark:text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                        <p className="text-gray-900 dark:text-white">{car.location}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="specifications">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(car.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200 dark:border-slate-700">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl text-[#0A2342] dark:text-white">{car.rating}</div>
                      <div className="flex justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(car.rating)
                                ? 'fill-[#FFD700] text-[#FFD700]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Overall Rating</p>
                    </div>
                  </div>

                  {car.reviews.length > 0 ? (
                    <div className="space-y-4">
                      {car.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 dark:border-slate-700 pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-900 dark:text-white">{review.author}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                            ))}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">No reviews yet.</p>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="loan">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Financing Options</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Get instant loan approval with our partner banks. Interest rates starting from 7.5% per annum.
                  </p>
                  <Button asChild className="bg-[#0A2342] hover:bg-[#0A2342]/90">
                    <Link to="/loan-insurance">Calculate EMI</Link>
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Contact */}
            <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <h3 className="mb-4 text-[#0A2342] dark:text-white">Contact Seller</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>{car.seller.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>{car.seller.email}</span>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A2342] mb-2">
                    Book Test Drive
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white dark:bg-slate-800">
                  <DialogHeader>
                    <DialogTitle className="text-[#0A2342] dark:text-white">Book a Test Drive</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Input
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#0A2342] hover:bg-[#0A2342]/90">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="w-full border-[#0A2342] text-[#0A2342] dark:border-[#FFD700] dark:text-[#FFD700]">
                <Phone className="mr-2 h-4 w-4" />
                Call Seller
              </Button>
            </Card>
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-[#0A2342] dark:text-white">Similar Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} showCompare={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
