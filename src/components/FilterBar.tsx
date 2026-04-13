import React from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { useCarContext } from '../context/CarContext';
import type { SortOption } from '../types/car';

export const FilterBar: React.FC = () => {
  const { searchQuery, setSearchQuery, sortBy, setSortBy, totalCars } = useCarContext();

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="relative w-full md:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
          placeholder="Search by car name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
        <span className="text-sm text-gray-500 font-medium">
          {totalCars} {totalCars === 1 ? 'vehicle' : 'vehicles'} found
        </span>
        
        <div className="relative flex items-center">
          <ArrowUpDown className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="appearance-none bg-blue-50 text-blue-800 border-none rounded-lg pl-9 pr-8 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
