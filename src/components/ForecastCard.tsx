import React from 'react';
import { ForecastDay } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastDay[];
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {forecast.map((day) => (
        <div key={day.date} className="p-4 bg-white border-4 border-black retro-card">
          <div className="text-center">
            <div className="mb-2 text-sm">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <div className="text-2xl font-bold">{Math.round(day.temperature)}°C</div>
            <div className="mt-2 text-sm">{day.condition}</div>
          </div>
        </div>
      ))}
    </div>
  );
};