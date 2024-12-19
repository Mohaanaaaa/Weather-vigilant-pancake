export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const isNightTime = (): boolean => {
  const hours = new Date().getHours();
  return hours < 6 || hours >= 18;
};