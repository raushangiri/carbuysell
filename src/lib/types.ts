export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Convertible' | 'Truck';
  location: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    torque: string;
    seatingCapacity: number;
    bootSpace: string;
    fuelTankCapacity: string;
    dimensions: string;
  };
  description: string;
  seller: {
    name: string;
    phone: string;
    email: string;
  };
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface FilterOptions {
  brands: string[];
  priceRange: [number, number];
  fuelTypes: string[];
  transmissions: string[];
  bodyTypes: string[];
  yearRange: [number, number];
  location: string;
}
