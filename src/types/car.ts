export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  year: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
