import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CarCard } from '../components/CarCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { mockCars } from '../lib/mockData';
import { FilterOptions, Car } from '../lib/types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/pagination';

export function CarListingPage() {
  const location = useLocation();
  const searchParams = location.state as any;

  const [filters, setFilters] = useState<FilterOptions>({
    brands: [],
    priceRange: [0, 100],
    fuelTypes: [],
    transmissions: [],
    bodyTypes: [],
    yearRange: [2010, 2025],
    location: searchParams?.location || '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const filteredCars = mockCars.filter((car) => {
    const priceInLakh = car.price / 100000;
    
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(car.brand);
    const matchesPrice = priceInLakh >= filters.priceRange[0] && priceInLakh <= filters.priceRange[1];
    const matchesFuel = filters.fuelTypes.length === 0 || filters.fuelTypes.includes(car.fuelType);
    const matchesTransmission = filters.transmissions.length === 0 || filters.transmissions.includes(car.transmission);
    const matchesBodyType = filters.bodyTypes.length === 0 || filters.bodyTypes.includes(car.bodyType);
    const matchesYear = car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1];
    const matchesLocation = !filters.location || car.location.toLowerCase().includes(filters.location.toLowerCase());

    return matchesBrand && matchesPrice && matchesFuel && matchesTransmission && matchesBodyType && matchesYear && matchesLocation;
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handleCompare = (car: Car) => {
    // Store in localStorage for comparison
    const compareCars = JSON.parse(localStorage.getItem('compareCars') || '[]');
    if (compareCars.length < 3 && !compareCars.find((c: Car) => c.id === car.id)) {
      compareCars.push(car);
      localStorage.setItem('compareCars', JSON.stringify(compareCars));
      alert(`${car.brand} ${car.model} added to comparison`);
    } else if (compareCars.find((c: Car) => c.id === car.id)) {
      alert('Car already in comparison');
    } else {
      alert('Maximum 3 cars can be compared');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-[#0A2342] dark:text-white">Browse Cars</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </aside>

          {/* Car Grid */}
          <main className="flex-1">
            <div className="mb-6 text-gray-600 dark:text-gray-400">
              Showing {currentCars.length} of {filteredCars.length} cars
            </div>

            {currentCars.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {currentCars.map((car) => (
                    <CarCard key={car.id} car={car} onCompare={handleCompare} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                      
                      {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink
                            onClick={() => setCurrentPage(index + 1)}
                            isActive={currentPage === index + 1}
                            className="cursor-pointer"
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No cars found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
