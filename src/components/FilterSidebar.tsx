import React from 'react';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { FilterOptions } from '../lib/types';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Toyota', 'Honda', 'Hyundai', 'Mahindra'];
  const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const transmissions = ['Manual', 'Automatic'];
  const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe'];

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handleFuelTypeToggle = (fuelType: string) => {
    const newFuelTypes = filters.fuelTypes.includes(fuelType)
      ? filters.fuelTypes.filter((f) => f !== fuelType)
      : [...filters.fuelTypes, fuelType];
    onFilterChange({ ...filters, fuelTypes: newFuelTypes });
  };

  const handleTransmissionToggle = (transmission: string) => {
    const newTransmissions = filters.transmissions.includes(transmission)
      ? filters.transmissions.filter((t) => t !== transmission)
      : [...filters.transmissions, transmission];
    onFilterChange({ ...filters, transmissions: newTransmissions });
  };

  const handleBodyTypeToggle = (bodyType: string) => {
    const newBodyTypes = filters.bodyTypes.includes(bodyType)
      ? filters.bodyTypes.filter((b) => b !== bodyType)
      : [...filters.bodyTypes, bodyType];
    onFilterChange({ ...filters, bodyTypes: newBodyTypes });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleYearChange = (value: number[]) => {
    onFilterChange({ ...filters, yearRange: [value[0], value[1]] });
  };

  const clearFilters = () => {
    onFilterChange({
      brands: [],
      priceRange: [0, 100],
      fuelTypes: [],
      transmissions: [],
      bodyTypes: [],
      yearRange: [2010, 2025],
      location: '',
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#0A2342] dark:text-white">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h4 className="mb-3 text-gray-900 dark:text-white">Brand</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => handleBrandToggle(brand)}
              />
              <Label
                htmlFor={`brand-${brand}`}
                className="ml-2 text-sm cursor-pointer text-gray-700 dark:text-gray-300"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="mb-3 text-gray-900 dark:text-white">Price Range (Lakh)</h4>
        <Slider
          min={0}
          max={100}
          step={5}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>₹{filters.priceRange[0]}L</span>
          <span>₹{filters.priceRange[1]}L</span>
        </div>
      </div>

      {/* Fuel Type */}
      <div className="mb-6">
        <h4 className="mb-3 text-gray-900 dark:text-white">Fuel Type</h4>
        <div className="space-y-2">
          {fuelTypes.map((fuelType) => (
            <div key={fuelType} className="flex items-center">
              <Checkbox
                id={`fuel-${fuelType}`}
                checked={filters.fuelTypes.includes(fuelType)}
                onCheckedChange={() => handleFuelTypeToggle(fuelType)}
              />
              <Label
                htmlFor={`fuel-${fuelType}`}
                className="ml-2 text-sm cursor-pointer text-gray-700 dark:text-gray-300"
              >
                {fuelType}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div className="mb-6">
        <h4 className="mb-3 text-gray-900 dark:text-white">Transmission</h4>
        <div className="space-y-2">
          {transmissions.map((transmission) => (
            <div key={transmission} className="flex items-center">
              <Checkbox
                id={`transmission-${transmission}`}
                checked={filters.transmissions.includes(transmission)}
                onCheckedChange={() => handleTransmissionToggle(transmission)}
              />
              <Label
                htmlFor={`transmission-${transmission}`}
                className="ml-2 text-sm cursor-pointer text-gray-700 dark:text-gray-300"
              >
                {transmission}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Body Type */}
      <div className="mb-6">
        <h4 className="mb-3 text-gray-900 dark:text-white">Body Type</h4>
        <div className="space-y-2">
          {bodyTypes.map((bodyType) => (
            <div key={bodyType} className="flex items-center">
              <Checkbox
                id={`body-${bodyType}`}
                checked={filters.bodyTypes.includes(bodyType)}
                onCheckedChange={() => handleBodyTypeToggle(bodyType)}
              />
              <Label
                htmlFor={`body-${bodyType}`}
                className="ml-2 text-sm cursor-pointer text-gray-700 dark:text-gray-300"
              >
                {bodyType}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Year Range */}
      <div className="mb-6">
        <h4 className="mb-3 text-gray-900 dark:text-white">Year</h4>
        <Slider
          min={2010}
          max={2025}
          step={1}
          value={filters.yearRange}
          onValueChange={handleYearChange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{filters.yearRange[0]}</span>
          <span>{filters.yearRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
