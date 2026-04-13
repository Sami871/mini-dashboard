import React from 'react';
import { Settings, Droplets, Calendar, Gauge } from 'lucide-react';
import type { Car } from '../types/car';

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-4/3 bg-gray-100">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-blue-700 shadow-sm">
          ${car.price.toLocaleString()}
        </div>
        <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm uppercase tracking-wide">
          {car.brand}
        </div>
      </div>
      
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {car.name}
        </h3>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600 mt-auto mb-5 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-blue-500" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-blue-500" />
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>
        </div>
        
        <button className="w-full bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-semibold py-2.5 rounded-lg transition-colors border border-blue-100 hover:border-blue-600 focus:ring-1 focus:ring-blue-100">
          View Details
        </button>
      </div>
    </div>
  );
};
