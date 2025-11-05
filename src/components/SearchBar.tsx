import React, { useState } from 'react';
import { Search, MapPin, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    brand: '',
    priceMax: '',
    location: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/listings', { state: searchParams });
  };

  return (
    <form onSubmit={handleSearch} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200 dark:border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
            Brand / Model
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., BMW, Mercedes"
              value={searchParams.brand}
              onChange={(e) => setSearchParams({ ...searchParams, brand: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
            Max Price (Lakh)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="number"
              placeholder="e.g., 50"
              value={searchParams.priceMax}
              onChange={(e) => setSearchParams({ ...searchParams, priceMax: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., Mumbai"
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-600"
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A2342]">
        <Search className="mr-2 h-4 w-4" />
        Search Cars
      </Button>
    </form>
  );
}
