import React from 'react';
import { Loader2 } from 'lucide-react';

export const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );
};
