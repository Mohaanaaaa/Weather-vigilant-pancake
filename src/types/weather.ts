export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface ForecastDay {
  date: string;
  temperature: number;
  condition: string;
  icon: string;
}

export interface WeatherResponse {
  current: WeatherData;
  forecast: ForecastDay[];
}