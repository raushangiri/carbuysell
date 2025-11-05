import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Progress } from '../components/ui/progress';
import { Upload, CheckCircle } from 'lucide-react';

export function SellCarPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    kilometers: '',
    fuelType: '',
    transmission: '',
    price: '',
    location: '',
    description: '',
    sellerName: '',
    sellerPhone: '',
    sellerEmail: '',
  });
  const [images, setImages] = useState<string[]>([]);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImages([...images, ...fileArray]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      alert('Your car listing has been submitted! Our team will review and contact you soon.');
      // Reset form
      setFormData({
        brand: '',
        model: '',
        year: '',
        kilometers: '',
        fuelType: '',
        transmission: '',
        price: '',
        location: '',
        description: '',
        sellerName: '',
        sellerPhone: '',
        sellerEmail: '',
      });
      setImages([]);
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="mb-2 text-[#0A2342] dark:text-white">Sell Your Car</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Get the best price for your car in just 3 simple steps
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= s
                        ? 'bg-[#0A2342] text-white'
                        : 'bg-gray-200 dark:bg-slate-700 text-gray-500'
                    }`}
                  >
                    {step > s ? <CheckCircle className="h-6 w-6" /> : s}
                  </div>
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                    {s === 1 ? 'Car Details' : s === 2 ? 'Upload Photos' : 'Contact Info'}
                  </span>
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-6 md:p-8 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Car Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-[#0A2342] dark:text-white">Car Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="brand">Brand *</Label>
                      <Input
                        id="brand"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="e.g., BMW"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="model">Model *</Label>
                      <Input
                        id="model"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        placeholder="e.g., 3 Series"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">Year *</Label>
                      <Input
                        id="year"
                        type="number"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        placeholder="e.g., 2023"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="kilometers">Kilometers Driven *</Label>
                      <Input
                        id="kilometers"
                        type="number"
                        value={formData.kilometers}
                        onChange={(e) => setFormData({ ...formData, kilometers: e.target.value })}
                        placeholder="e.g., 15000"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fuelType">Fuel Type *</Label>
                      <Select
                        value={formData.fuelType}
                        onValueChange={(value) => setFormData({ ...formData, fuelType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select fuel type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Petrol">Petrol</SelectItem>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="Electric">Electric</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="transmission">Transmission *</Label>
                      <Select
                        value={formData.transmission}
                        onValueChange={(value) => setFormData({ ...formData, transmission: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select transmission" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Manual">Manual</SelectItem>
                          <SelectItem value="Automatic">Automatic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Expected Price (₹) *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="e.g., 4500000"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g., Mumbai"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us more about your car..."
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Upload Photos */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-[#0A2342] dark:text-white">Upload Photos</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Upload clear photos of your car from different angles (minimum 3 photos recommended)
                  </p>

                  <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <label htmlFor="images" className="cursor-pointer">
                      <span className="text-[#0A2342] dark:text-[#FFD700] hover:underline">
                        Click to upload
                      </span>
                      <span className="text-gray-600 dark:text-gray-400"> or drag and drop</span>
                      <Input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image}
                            alt={`Car ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => setImages(images.filter((_, i) => i !== index))}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-[#0A2342] dark:text-white">Your Contact Information</h3>

                  <div>
                    <Label htmlFor="sellerName">Your Name *</Label>
                    <Input
                      id="sellerName"
                      value={formData.sellerName}
                      onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="sellerPhone">Phone Number *</Label>
                    <Input
                      id="sellerPhone"
                      type="tel"
                      value={formData.sellerPhone}
                      onChange={(e) => setFormData({ ...formData, sellerPhone: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="sellerEmail">Email Address *</Label>
                    <Input
                      id="sellerEmail"
                      type="email"
                      value={formData.sellerEmail}
                      onChange={(e) => setFormData({ ...formData, sellerEmail: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      📞 Our team will contact you within 24 hours to verify your listing and discuss the best price for your car.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-[#0A2342] text-[#0A2342] dark:border-[#FFD700] dark:text-[#FFD700]"
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  className="ml-auto bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A2342]"
                >
                  {step < totalSteps ? 'Next' : 'Submit Listing'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
