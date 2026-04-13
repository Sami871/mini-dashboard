import type { Car, PaginatedResponse, SortOption } from "../types/car";
import { MOCK_CARS } from "../data/mockCars";

interface FetchCarsParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: SortOption;
}

export const fetchCars = async ({
  page = 1,
  limit = 6,
  search = "",
  sort = "name-asc",
}: FetchCarsParams): Promise<PaginatedResponse<Car>> => {
  // network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // filter search by name and brand
  let filteredCars = MOCK_CARS.filter(
    (car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase()),
  );

  // sort by price and name
  filteredCars.sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  //  pagination
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
    totalPages,
  };
};
