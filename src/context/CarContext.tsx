import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Car, SortOption } from '../types/car';
import { fetchCars } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';

interface CarContextType {
  cars: Car[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  totalCars: number;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearch = useDebounce(searchQuery, 500);
  
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCars, setTotalCars] = useState<number>(0);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortBy]);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchCars({
          page: currentPage,
          limit: 6,
          search: debouncedSearch,
          sort: sortBy,
        });
        setCars(response.data);
        setTotalPages(response.totalPages);
        setTotalCars(response.total);
      } catch (err) {
        setError('Failed to fetch cars. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, [debouncedSearch, sortBy, currentPage]);

  return (
    <CarContext.Provider
      value={{
        cars,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        totalPages,
        totalCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};
