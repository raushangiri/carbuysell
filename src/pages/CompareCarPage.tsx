import React, { useState, useEffect } from 'react';
import { mockCars } from '../lib/mockData';
import { Car } from '../lib/types';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { X } from 'lucide-react';

export function CompareCarPage() {
  const [selectedCars, setSelectedCars] = useState<(Car | null)[]>([null, null, null]);

  useEffect(() => {
    // Load cars from localStorage if added from listing page
    const compareCars = JSON.parse(localStorage.getItem('compareCars') || '[]');
    if (compareCars.length > 0) {
      const newSelected = [null, null, null];
      compareCars.forEach((car: Car, index: number) => {
        if (index < 3) {
          newSelected[index] = car;
        }
      });
      setSelectedCars(newSelected);
    }
  }, []);

  const handleCarSelect = (index: number, carId: string) => {
    const car = mockCars.find((c) => c.id === carId);
    const newSelected = [...selectedCars];
    newSelected[index] = car || null;
    setSelectedCars(newSelected);
    
    // Update localStorage
    const filtered = newSelected.filter((c) => c !== null);
    localStorage.setItem('compareCars', JSON.stringify(filtered));
  };

  const handleRemoveCar = (index: number) => {
    const newSelected = [...selectedCars];
    newSelected[index] = null;
    setSelectedCars(newSelected);
    
    // Update localStorage
    const filtered = newSelected.filter((c) => c !== null);
    localStorage.setItem('compareCars', JSON.stringify(filtered));
  };

  const comparisonFields = [
    { label: 'Price', key: 'price', format: (val: number) => `₹${(val / 100000).toFixed(2)}L` },
    { label: 'Year', key: 'year' },
    { label: 'Brand', key: 'brand' },
    { label: 'Model', key: 'model' },
    { label: 'Mileage', key: 'mileage', format: (val: number) => `${val} km/l` },
    { label: 'Fuel Type', key: 'fuelType' },
    { label: 'Transmission', key: 'transmission' },
    { label: 'Body Type', key: 'bodyType' },
    { label: 'Location', key: 'location' },
    { label: 'Engine', key: 'specifications.engine' },
    { label: 'Power', key: 'specifications.power' },
    { label: 'Torque', key: 'specifications.torque' },
    { label: 'Seating Capacity', key: 'specifications.seatingCapacity' },
    { label: 'Boot Space', key: 'specifications.bootSpace' },
  ];

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="mb-2 text-[#0A2342] dark:text-white">Compare Cars</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Compare up to 3 cars side by side to make an informed decision
          </p>
        </div>

        {/* Car Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {selectedCars.map((car, index) => (
            <Card key={index} className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              {car ? (
                <div>
                  <div className="relative mb-4">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => handleRemoveCar(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="text-[#0A2342] dark:text-white">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-[#FFD700]">₹ {(car.price / 100000).toFixed(2)} Lakh</p>
                </div>
              ) : (
                <div>
                  <div className="w-full h-48 bg-gray-200 dark:bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Select a car</p>
                  </div>
                  <Select onValueChange={(value) => handleCarSelect(index, value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a car" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCars
                        .filter((c) => !selectedCars.some((sc) => sc?.id === c.id))
                        .map((car) => (
                          <SelectItem key={car.id} value={car.id}>
                            {car.brand} {car.model} ({car.year})
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedCars.some((car) => car !== null) && (
          <Card className="overflow-hidden border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0A2342] text-white">
                  <tr>
                    <th className="p-4 text-left">Features</th>
                    {selectedCars.map((car, index) => (
                      <th key={index} className="p-4 text-left">
                        {car ? `${car.brand} ${car.model}` : 'Empty Slot'}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFields.map((field, fieldIndex) => (
                    <tr
                      key={field.key}
                      className={`border-b border-gray-200 dark:border-slate-700 ${
                        fieldIndex % 2 === 0 ? 'bg-gray-50 dark:bg-slate-900' : ''
                      }`}
                    >
                      <td className="p-4 text-gray-900 dark:text-white">{field.label}</td>
                      {selectedCars.map((car, carIndex) => (
                        <td key={carIndex} className="p-4 text-gray-700 dark:text-gray-300">
                          {car ? (
                            field.format
                              ? field.format(getNestedValue(car, field.key))
                              : getNestedValue(car, field.key) || '-'
                          ) : (
                            '-'
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  
                  {/* Features Row */}
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="p-4 text-gray-900 dark:text-white">Key Features</td>
                    {selectedCars.map((car, carIndex) => (
                      <td key={carIndex} className="p-4">
                        {car ? (
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            {car.features.slice(0, 5).map((feature, i) => (
                              <li key={i}>• {feature}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {!selectedCars.some((car) => car !== null) && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Select cars above to start comparing their features and specifications
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
