import React, { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { RetroButton } from '../ui/RetroButton';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  }, [city, onSearch]);

  const handleClear = useCallback(() => {
    setCity('');
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 py-2 pr-24 text-lg bg-white border-4 border-black rounded-none
                   focus:outline-none focus:ring-0 placeholder-gray-500
                   retro-input"
        />
        {city && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-16 p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        <RetroButton
          type="submit"
          className="absolute right-0"
          disabled={!city.trim()}
        >
          <Search className="w-6 h-6" />
        </RetroButton>
      </div>
    </form>
  );
};