"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiCloud, WiRain, WiStrongWind } from "react-icons/wi";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
  humidity: number;
  pressure: number;
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hourlyTemperature, setHourlyTemperature] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [manualLocation, setManualLocation] = useState<{ lat: string, lon: string }>({ lat: '', lon: '' });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    }

    function error() {
      setError('Unable to retrieve location automatically');
      setLoading(false);
    }
  }, []);

  const fetchWeather = (lat: number | string, lon: number | string) => {
    axios
      .get(`/api/weather?lat=${lat}&lon=${lon}`)
      .then(response => {
        const currentWeather = response.data.current_weather;
        const additionalData = response.data.hourly;
        setWeather({
          temperature: currentWeather.temperature,
          windspeed: currentWeather.windspeed,
          weathercode: currentWeather.weathercode,
          humidity: additionalData.relative_humidity_2m[0],
          pressure: additionalData.pressure_msl[0],
        });

        setHourlyTemperature(additionalData.temperature_2m.slice(0, 12));
        setLabels(additionalData.time.slice(0, 12).map((time: string) => new Date(time).toLocaleTimeString()));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  };

  const handleManualSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manualLocation.lat && manualLocation.lon) {
      fetchWeather(manualLocation.lat, manualLocation.lon);
    }
  };

  const getWeatherIcon = (weatherCode: number) => {
    switch (weatherCode) {
      case 0: return <WiDaySunny size={50} />;
      case 1: return <WiCloud size={50} />;
      case 2: return <WiRain size={50} />;
      default: return <WiStrongWind size={50} />;
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: hourlyTemperature,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-blue-100 p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Current Weather</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="mb-6">
          <p>Temperature: {weather.temperature}°C</p>
          <p>Windspeed: {weather.windspeed} km/h</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Pressure: {weather.pressure} hPa</p>
          <p>Condition: {getWeatherIcon(weather.weathercode)}</p>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">Manual Location Input</h2>
      <form onSubmit={handleManualSubmit} className="mb-6">
        <label className="block mb-2">
          Latitude:
          <input
            className="border p-2 rounded-lg w-full"
            type="text"
            value={manualLocation.lat}
            onChange={(e) => setManualLocation({ ...manualLocation, lat: e.target.value })}
            required
          />
        </label>
        <label className="block mb-4">
          Longitude:
          <input
            className="border p-2 rounded-lg w-full"
            type="text"
            value={manualLocation.lon}
            onChange={(e) => setManualLocation({ ...manualLocation, lon: e.target.value })}
            required
          />
        </label>
        <button className="bg-blue-500 text-white p-2 rounded-lg w-full" type="submit">
          Get Weather
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Hourly Temperature Trend</h2>
      {hourlyTemperature.length > 0 && <Line data={data} />}
    </div>
  );
}
