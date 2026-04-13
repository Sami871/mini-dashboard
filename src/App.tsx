import { CarProvider } from './context/CarContext';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { CarList } from './components/CarList';

function App() {
  return (
    <CarProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-blue-200">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Find Your Perfect Ride</h2>
            <p className="text-lg text-slate-600">Browse our extensive collection of premium vehicles.</p>
          </div>
          
          <FilterBar />
          
          <div className="mt-8">
            <CarList />
          </div>
        </main>
      </div>
    </CarProvider>
  );
}

export default App;
