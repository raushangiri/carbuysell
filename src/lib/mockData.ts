import { Car, Testimonial } from './types';

export const mockCars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: '3 Series',
    year: 2023,
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    mileage: 15,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    location: 'Mumbai',
    features: ['Sunroof', 'Leather Seats', 'Navigation', 'Parking Sensors', 'Cruise Control'],
    specifications: {
      engine: '2.0L Turbo',
      power: '255 bhp',
      torque: '400 Nm',
      seatingCapacity: 5,
      bootSpace: '480 L',
      fuelTankCapacity: '59 L',
      dimensions: '4709 x 1827 x 1442 mm'
    },
    description: 'Premium luxury sedan in excellent condition with full service history.',
    seller: {
      name: 'Raj Kumar',
      phone: '+91 98765 43210',
      email: 'raj@example.com'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        author: 'Amit Singh',
        rating: 5,
        date: '2024-10-15',
        comment: 'Excellent car! Smooth drive and great features.'
      }
    ]
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 5200000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    mileage: 18,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    location: 'Delhi',
    features: ['Panoramic Sunroof', 'Premium Sound', 'Ambient Lighting', 'Keyless Entry'],
    specifications: {
      engine: '2.0L Diesel',
      power: '194 bhp',
      torque: '400 Nm',
      seatingCapacity: 5,
      bootSpace: '455 L',
      fuelTankCapacity: '66 L',
      dimensions: '4751 x 1820 x 1438 mm'
    },
    description: 'Luxury sedan with premium features and excellent fuel efficiency.',
    seller: {
      name: 'Priya Sharma',
      phone: '+91 98765 43211',
      email: 'priya@example.com'
    },
    rating: 4.9,
    reviews: []
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'Q5',
    year: 2023,
    price: 6800000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    mileage: 14,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    location: 'Bangalore',
    features: ['Quattro AWD', 'Virtual Cockpit', 'Matrix LED', 'Wireless Charging'],
    specifications: {
      engine: '2.0L TFSI',
      power: '249 bhp',
      torque: '370 Nm',
      seatingCapacity: 5,
      bootSpace: '550 L',
      fuelTankCapacity: '70 L',
      dimensions: '4663 x 1893 x 1659 mm'
    },
    description: 'Premium SUV with advanced technology and exceptional performance.',
    seller: {
      name: 'Vikram Patel',
      phone: '+91 98765 43212',
      email: 'vikram@example.com'
    },
    rating: 4.7,
    reviews: []
  },
  {
    id: '4',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 4900000,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    mileage: 550,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    location: 'Pune',
    features: ['Autopilot', 'Full Self-Driving', 'Premium Audio', '15" Touchscreen'],
    specifications: {
      engine: 'Dual Motor Electric',
      power: '450 bhp',
      torque: '639 Nm',
      seatingCapacity: 5,
      bootSpace: '425 L',
      fuelTankCapacity: 'N/A',
      dimensions: '4694 x 1849 x 1443 mm'
    },
    description: 'Electric sedan with cutting-edge technology and zero emissions.',
    seller: {
      name: 'Neha Gupta',
      phone: '+91 98765 43213',
      email: 'neha@example.com'
    },
    rating: 4.9,
    reviews: []
  },
  {
    id: '5',
    brand: 'Toyota',
    model: 'Fortuner',
    year: 2022,
    price: 3800000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    mileage: 12,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    location: 'Hyderabad',
    features: ['4WD', 'Hill Assist', 'Rear Camera', '7 Seats'],
    specifications: {
      engine: '2.8L Diesel',
      power: '201 bhp',
      torque: '500 Nm',
      seatingCapacity: 7,
      bootSpace: '200 L',
      fuelTankCapacity: '80 L',
      dimensions: '4795 x 1855 x 1835 mm'
    },
    description: 'Rugged SUV perfect for both city and off-road adventures.',
    seller: {
      name: 'Rahul Desai',
      phone: '+91 98765 43214',
      email: 'rahul@example.com'
    },
    rating: 4.6,
    reviews: []
  },
  {
    id: '6',
    brand: 'Honda',
    model: 'City',
    year: 2023,
    price: 1450000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    mileage: 18,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Sedan',
    location: 'Chennai',
    features: ['Touchscreen', 'Rear AC', 'Alloy Wheels', 'LED DRLs'],
    specifications: {
      engine: '1.5L i-VTEC',
      power: '121 bhp',
      torque: '145 Nm',
      seatingCapacity: 5,
      bootSpace: '506 L',
      fuelTankCapacity: '40 L',
      dimensions: '4549 x 1748 x 1489 mm'
    },
    description: 'Popular sedan with excellent fuel efficiency and reliability.',
    seller: {
      name: 'Sanjay Kumar',
      phone: '+91 98765 43215',
      email: 'sanjay@example.com'
    },
    rating: 4.5,
    reviews: []
  },
  {
    id: '7',
    brand: 'Hyundai',
    model: 'Creta',
    year: 2023,
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    mileage: 16,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    location: 'Mumbai',
    features: ['Panoramic Sunroof', '10.25" Display', 'Ventilated Seats', 'Wireless Charging'],
    specifications: {
      engine: '1.5L Turbo',
      power: '160 bhp',
      torque: '253 Nm',
      seatingCapacity: 5,
      bootSpace: '433 L',
      fuelTankCapacity: '50 L',
      dimensions: '4300 x 1790 x 1635 mm'
    },
    description: 'Feature-packed compact SUV with modern design.',
    seller: {
      name: 'Anita Roy',
      phone: '+91 98765 43216',
      email: 'anita@example.com'
    },
    rating: 4.7,
    reviews: []
  },
  {
    id: '8',
    brand: 'Mahindra',
    model: 'Thar',
    year: 2022,
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    mileage: 10,
    fuelType: 'Diesel',
    transmission: 'Manual',
    bodyType: 'SUV',
    location: 'Jaipur',
    features: ['4x4', 'Convertible Top', 'Off-Road Tires', 'Roll Cage'],
    specifications: {
      engine: '2.2L mHawk',
      power: '130 bhp',
      torque: '300 Nm',
      seatingCapacity: 4,
      bootSpace: '280 L',
      fuelTankCapacity: '57 L',
      dimensions: '3985 x 1820 x 1844 mm'
    },
    description: 'Iconic off-roader with rugged capabilities and classic styling.',
    seller: {
      name: 'Karan Singh',
      phone: '+91 98765 43217',
      email: 'karan@example.com'
    },
    rating: 4.8,
    reviews: []
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Khanna',
    role: 'Business Owner',
    comment: 'Found my dream car within days! The platform is easy to use and the service was exceptional. Highly recommend YourCar.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
  },
  {
    id: 't2',
    name: 'Priya Mehta',
    role: 'Software Engineer',
    comment: 'Sold my old car at a great price! The process was smooth and hassle-free. YourCar made everything simple.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
  },
  {
    id: 't3',
    name: 'Arjun Reddy',
    role: 'Entrepreneur',
    comment: 'The comparison feature helped me make an informed decision. Got the best deal on my SUV. Thank you YourCar!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
  }
];

export const partnerBrands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda', 'Hyundai', 'Mahindra', 'Tata', 'Maruti Suzuki', 'Tesla'
];

export const bankPartners = [
  'HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra'
];

export const insurancePartners = [
  'HDFC ERGO', 'ICICI Lombard', 'Bajaj Allianz', 'TATA AIG', 'Reliance General'
];
