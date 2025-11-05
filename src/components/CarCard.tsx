import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Fuel, Gauge, GitCompare } from 'lucide-react';
import { Car } from '../lib/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface CarCardProps {
  car: Car;
  onCompare?: (car: Car) => void;
  showCompare?: boolean;
}

export function CarCard({ car, onCompare, showCompare = true }: CarCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700">
      <div className="relative overflow-hidden h-48">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-[#FFD700] text-[#0A2342]">
          {car.year}
        </Badge>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-[#0A2342] dark:text-white mb-1">
            {car.brand} {car.model}
          </h3>
          <p className="text-[#FFD700]">₹ {(car.price / 100000).toFixed(2)} Lakh</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span className="text-xs">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span className="text-xs">{car.mileage} km/l</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span className="text-xs">{car.location}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-[#0A2342] hover:bg-[#0A2342]/90">
            <Link to={`/car/${car.id}`}>View Details</Link>
          </Button>
          {showCompare && onCompare && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => onCompare(car)}
              className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white dark:border-[#FFD700] dark:text-[#FFD700]"
            >
              <GitCompare className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
