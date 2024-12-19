import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 py-2 text-lg bg-white border-4 border-black rounded-none
                   focus:outline-none focus:ring-0 placeholder-gray-500
                   retro-input"
        />
        <button
          type="submit"
          className="absolute right-0 px-4 py-2 text-white bg-blue-500 border-4
                   border-black hover:bg-blue-600 retro-button"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};