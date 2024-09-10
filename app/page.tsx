"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [manualLocation, setManualLocation] = useState<{ lat: string, lon: string }>({ lat: '', lon: '' });

  useEffect(() => {
    if (!manualLocation.lat || !manualLocation.lon) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    }

    function error() {
      setError('Unable to retrieve location automatically');
      setLoading(false);
    }
  }, [manualLocation]);

  const fetchWeather = (lat: number | string, lon: number | string) => {
    axios
      .get(`/api/weather?lat=${lat}&lon=${lon}`)
      .then(response => {
        setWeather(response.data.current_weather);
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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Weather Information */}
        <div className="flex flex-col gap-8">
          {loading && <div>Loading weather data...</div>}
          {error && <div>{error}</div>}
          {weather && (
            <div className="weather-container">
              <h2>Current Weather</h2>
              <p>Temperature: {weather.temperature}°C</p>
              <p>Windspeed: {weather.windspeed} km/h</p>
            </div>
          )}

          {/* Manual Location Input */}
          <h3>Manual Location Input</h3>
          <form onSubmit={handleManualSubmit}>
            <label>
              Latitude:
              <input
                type="text"
                value={manualLocation.lat}
                onChange={(e) => setManualLocation({ ...manualLocation, lat: e.target.value })}
                required
              />
            </label>
            <label>
              Longitude:
              <input
                type="text"
                value={manualLocation.lon}
                onChange={(e) => setManualLocation({ ...manualLocation, lon: e.target.value })}
                required
              />
            </label>
            <button type="submit">Get Weather</button>
          </form>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Keep your existing buttons and content */}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Keep your existing footer */}
      </footer>
    </div>
  );
}
