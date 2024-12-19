import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudSun } from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = '' }) => {
  const getIcon = () => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('rain')) return CloudRain;
    if (conditionLower.includes('snow')) return CloudSnow;
    if (conditionLower.includes('thunder')) return CloudLightning;
    if (conditionLower.includes('cloud')) return Cloud;
    if (conditionLower.includes('clear')) return Sun;
    return CloudSun;
  };

  const Icon = getIcon();
  return <Icon className={className} />;
};