import axios from 'axios';
import { WeatherResponse } from '../types/weather';

const API_KEY = 'a69e318960944232b4755126241912'; // Replace with your actual API key
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`
    );

    return {
      current: {
        city: response.data.location.name,
        temperature: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        humidity: response.data.current.humidity,
        windSpeed: response.data.current.wind_kph,
        icon: response.data.current.condition.icon,
      },
      forecast: response.data.forecast.forecastday.map((day: any) => ({
        date: day.date,
        temperature: day.day.avgtemp_c,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
      })),
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};