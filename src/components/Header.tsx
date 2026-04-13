import React from 'react';
import { CarFront } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CarFront className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight">Dealers Auto Center</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white overflow-hidden shadow-inner flex items-center justify-center">
            <span className="font-bold">DAC</span>
          </div>
        </div>
      </div>
    </header>
  );
};
