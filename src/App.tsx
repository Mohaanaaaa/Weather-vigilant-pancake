import React, { useState, useCallback } from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './components/search/SearchBar';
import { WeatherCard } from './components/weather/WeatherCard';
import { ForecastCard } from './components/weather/ForecastCard';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { getWeather } from './services/weatherApi';
import { WeatherResponse } from './types/weather';
import { isNightTime } from './utils/dateUtils';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeather(city);
      setWeatherData(data);
      // Save to local storage
      localStorage.setItem('lastCity', city);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Load last searched city on mount
  React.useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      handleSearch(lastCity);
    }
  }, [handleSearch]);

  const bgClass = isNightTime() 
    ? 'bg-gradient-to-b from-indigo-900 to-purple-900' 
    : 'bg-gradient-to-b from-blue-200 to-blue-300';

  return (
    <div className={`min-h-screen px-4 py-8 ${bgClass} transition-colors duration-1000`}>
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="flex items-center justify-center mb-2 text-4xl font-bold">
            <Cloud className="w-8 h-8 mr-2" />
            Retro Weather
          </h1>
          <p className={`${isNightTime() ? 'text-gray-300' : 'text-gray-700'}`}>
            Your 8-bit weather companion
          </p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="p-4 mb-8 text-white bg-red-500 border-4 border-black retro-error">
            {error}
          </div>
        )}

        {loading ? (
          <LoadingSpinner />
        ) : (
          weatherData && (
            <>
              <WeatherCard weather={weatherData.current} />
              <ForecastCard forecast={weatherData.forecast} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;