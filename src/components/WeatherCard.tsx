import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="p-6 bg-white border-4 border-black retro-card">
      <h2 className="mb-4 text-2xl font-bold text-center">{weather.city}</h2>
      
      <div className="flex flex-col items-center mb-6">
        <div className="text-6xl font-bold">{Math.round(weather.temperature)}°C</div>
        <div className="mt-2 text-xl">{weather.condition}</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Droplets className="w-6 h-6 mr-2" />
          <span>Humidity: {weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind className="w-6 h-6 mr-2" />
          <span>Wind: {weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};