export const getWeatherEmoji = (condition: string): string => {
  const conditionLower = condition.toLowerCase();
  if (conditionLower.includes('rain')) return '🌧';
  if (conditionLower.includes('cloud')) return '☁';
  if (conditionLower.includes('snow')) return '❄';
  if (conditionLower.includes('clear')) return '☀';
  if (conditionLower.includes('thunder')) return '⚡';
  return '🌤';
};

export const getTemperatureColor = (temp: number): string => {
  if (temp <= 0) return 'text-blue-500';
  if (temp <= 15) return 'text-blue-400';
  if (temp <= 25) return 'text-green-500';
  if (temp <= 30) return 'text-yellow-500';
  return 'text-red-500';
};