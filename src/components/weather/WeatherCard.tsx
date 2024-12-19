import React from 'react';
import { Droplets, Wind, MapPin } from 'lucide-react';
import { WeatherData } from '../../types/weather';
import { WeatherIcon } from './WeatherIcon';
import { getTemperatureColor } from '../../utils/weatherUtils';
import { isNightTime } from '../../utils/dateUtils';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const temperatureColor = getTemperatureColor(weather.temperature);
  const timeOfDay = isNightTime() ? 'bg-indigo-900' : 'bg-white';

  return (
    <div className={`p-6 border-4 border-black retro-card ${timeOfDay}`}>
      <div className="flex items-center justify-center mb-4">
        <MapPin className="w-6 h-6 mr-2" />
        <h2 className="text-2xl font-bold">{weather.city}</h2>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <WeatherIcon condition={weather.condition} className="w-16 h-16 mb-4" />
        <div className={`text-6xl font-bold ${temperatureColor}`}>
          {Math.round(weather.temperature)}°C
        </div>
        <div className="mt-2 text-xl">{weather.condition}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 bg-opacity-50 bg-blue-100 border-2 border-black">
        <div className="flex items-center">
          <Droplets className="w-6 h-6 mr-2 text-blue-500" />
          <span>Humidity: {weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind className="w-6 h-6 mr-2 text-blue-500" />
          <span>Wind: {weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};