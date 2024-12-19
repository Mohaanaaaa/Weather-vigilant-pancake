import React from 'react';
import { ForecastDay } from '../../types/weather';
import { WeatherIcon } from './WeatherIcon';
import { formatDate } from '../../utils/dateUtils';
import { getTemperatureColor } from '../../utils/weatherUtils';

interface ForecastCardProps {
  forecast: ForecastDay[];
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
      {forecast.map((day) => {
        const temperatureColor = getTemperatureColor(day.temperature);
        
        return (
          <div key={day.date} className="p-4 bg-white border-4 border-black retro-card">
            <div className="text-center">
              <div className="mb-2 text-sm">{formatDate(day.date)}</div>
              <WeatherIcon condition={day.condition} className="w-10 h-10 mx-auto mb-2" />
              <div className={`text-2xl font-bold ${temperatureColor}`}>
                {Math.round(day.temperature)}°C
              </div>
              <div className="mt-2 text-xs">{day.condition}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};