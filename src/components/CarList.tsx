import React from 'react';
import { useCarContext } from '../context/CarContext';
import { CarCard } from './CarCard';
import { Spinner } from './Spinner';
import { Pagination } from './Pagination';
import { CarFront, AlertCircle } from 'lucide-react';

export const CarList: React.FC = () => {
  const { cars, loading, error, searchQuery } = useCarContext();

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6 bg-red-50 rounded-xl border border-red-100">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-bold text-red-800 mb-2">Oops! Something went wrong</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <CarFront className="w-10 h-10 text-blue-300" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No vehicles found</h3>
        <p className="text-gray-500 max-w-md">
          {searchQuery 
            ? `We couldn't find any match for "${searchQuery}". Try adjusting your search criteria.`
            : "There are currently no vehicles available in our inventory."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};
