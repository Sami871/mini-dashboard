import type { Car, PaginatedResponse, SortOption } from '../types/car';

// Reliable image placeholders
const MOCK_CARS: Car[] = [
  { id: '1', name: 'Mustang Mach-E', brand: 'Ford', image: '/cars/car_1.png', price: 45000, year: 2023, mileage: 1200, transmission: 'Automatic', fuelType: 'Electric' },
  { id: '2', name: 'Civic Type R', brand: 'Honda', image: '/cars/car_2.png', price: 38000, year: 2022, mileage: 5000, transmission: 'Manual', fuelType: 'Petrol' },
  { id: '3', name: 'Model 3', brand: 'Tesla', image: '/cars/car_3.png', price: 42000, year: 2024, mileage: 50, transmission: 'Automatic', fuelType: 'Electric' },
  { id: '4', name: 'M3 Competition', brand: 'BMW', image: '/cars/car_1.png', price: 78000, year: 2023, mileage: 8000, transmission: 'Automatic', fuelType: 'Petrol' },
  { id: '5', name: 'Supra GR', brand: 'Toyota', image: '/cars/car_2.png', price: 54000, year: 2021, mileage: 12000, transmission: 'Manual', fuelType: 'Petrol' },
  { id: '6', name: '911 Carrera', brand: 'Porsche', image: '/cars/car_3.png', price: 106000, year: 2024, mileage: 200, transmission: 'Automatic', fuelType: 'Petrol' },
  { id: '7', name: 'Ioniq 5', brand: 'Hyundai', image: '/cars/car_1.png', price: 41000, year: 2023, mileage: 4500, transmission: 'Automatic', fuelType: 'Electric' },
  { id: '8', name: 'Corvette C8', brand: 'Chevrolet', image: '/cars/car_2.png', price: 65000, year: 2022, mileage: 6000, transmission: 'Automatic', fuelType: 'Petrol' },
  { id: '9', name: 'Golf R', brand: 'Volkswagen', image: '/cars/car_3.png', price: 44000, year: 2023, mileage: 3000, transmission: 'Automatic', fuelType: 'Petrol' },
  { id: '10', name: 'RAV4 Hybrid', brand: 'Toyota', image: '/cars/car_1.png', price: 32000, year: 2022, mileage: 14000, transmission: 'Automatic', fuelType: 'Hybrid' },
  { id: '11', name: 'C-Class', brand: 'Mercedes-Benz', image: '/cars/car_2.png', price: 45000, year: 2023, mileage: 9000, transmission: 'Automatic', fuelType: 'Petrol' },
  { id: '12', name: 'RS6 Avant', brand: 'Audi', image: '/cars/car_3.png', price: 110000, year: 2021, mileage: 15000, transmission: 'Automatic', fuelType: 'Petrol' }
];

interface FetchCarsParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: SortOption;
}

export const fetchCars = async ({
  page = 1,
  limit = 6,
  search = '',
  sort = 'name-asc'
}: FetchCarsParams): Promise<PaginatedResponse<Car>> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Filter by search term
  let filteredCars = MOCK_CARS.filter(car => 
    car.name.toLowerCase().includes(search.toLowerCase()) || 
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  filteredCars.sort((a, b) => {
    switch (sort) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'name-desc': return b.name.localeCompare(a.name);
      default: return 0;
    }
  });

  // Calculate pagination
  const total = filteredCars.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  return {
    data: paginatedCars,
    total,
    page,
    limit,
    totalPages
  };
};
