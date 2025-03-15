'use client';

import React from 'react';

const weatherData = {
  data: {
    time: '2025-03-15T16:08:00Z',
    values: {
      cloudBase: 0.6,
      cloudCeiling: 0.6,
      cloudCover: 100,
      dewPoint: 6.2,
      freezingRainIntensity: 0,
      hailProbability: 79.1,
      hailSize: 9.91,
      humidity: 71,
      precipitationProbability: 100,
      pressureSeaLevel: 1005.31,
      pressureSurfaceLevel: 995.59,
      rainIntensity: 0.55,
      sleetIntensity: 0,
      snowIntensity: 0,
      temperature: 11.3,
      temperatureApparent: 11.3,
      uvHealthConcern: 0,
      uvIndex: 2,
      visibility: 16,
      weatherCode: 4200,
      windDirection: 258,
      windGust: 4.8,
      windSpeed: 2.4,
    },
  },
  location: {
    lat: 43.653480529785156,
    lon: -79.3839340209961,
    name: 'Toronto, Golden Horseshoe, Ontario, Canada',
    type: 'administrative',
  },
};

import CurrentTime from '@/components/CurrentTime';
// import { useEffect, useState } from 'react';

export default function SunsetTracker() {
  // const [weather, setWeather] = useState(null);
  //
  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try {
  //       const response = await fetch('/api/weather');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       setWeather(data);
  //     } catch (err) {}
  //   };
  //   fetchWeather().then(() => {});
  // }, []);
  //
  // console.log('weather--->>>', weather);

  const getPrecipitationLevel = (probability: number) => {
    return ['None', 'Very Low', 'Low', 'Mid', 'High', 'Very High', 'Certain'][
      probability === 100 ? 6 : Math.min(Math.floor(probability / 20), 5)
    ];
  };

  return (
    <div className='relative h-screen w-full max-w-md mx-auto overflow-hidden font-sans flex flex-col'>
      <div className="h-3/5 relative bg-[radial-gradient(circle_at_70%_bottom,#ff7e5f,#ffb6b9,#c9d6ff)] before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjEuMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')] before:mix-blend-multiply">
        <div className='absolute top-8 left-6 flex flex-col gap-2'>
          <div className='w-3 h-3 rounded-full bg-orange-500' />
          <div className='w-3 h-3 rounded-full bg-yellow-400' />
          <div className='w-3 h-3 rounded-full bg-purple-300' />
        </div>
      </div>

      <div className='bg-[#efefef] p-4 flex flex-col'>
        <div className='flex justify-between items-center mb-1'>
          <div className='flex items-center justify-between'>
            <p className='uppercase text-xs tracking-wider text-gray-600'>
              Today's Sunset
            </p>{' '}
            <span className='inline-flex gap-1 ml-2'>
              <span className='w-2 h-2 rounded-full bg-orange-500'></span>
              <span className='w-2 h-2 rounded-full bg-yellow-400'></span>
              <span className='w-2 h-2 rounded-full bg-purple-300'></span>
            </span>
          </div>
          <p className='text-xs text-gray-600 flex gap-[1px]'>
            <span>{new Date().getMonth() + 1}</span>
            <span>/</span>
            <span>{new Date().getDate()}</span>
            <span>/</span>
            <span>{new Date().getFullYear()}</span>
          </p>
        </div>
        <p className='text-xs text-gray-500 mb-1'>
          Shades of Scarlet, Orange & Lavender
        </p>
        <CurrentTime />

        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <div className='uppercase text-xs tracking-wider text-gray-600 mb-1'>
              Current Temperature
            </div>
            <p className='text-2xl font-medium'>
              {weatherData.data.values.temperature}
              <span className='text-base font-normal ml-1'>°C</span>
            </p>
          </div>
          <div>
            <div className='uppercase text-xs tracking-wider text-gray-600 mb-1'>
              Feels Like
            </div>
            <p className='text-2xl font-medium'>
              {weatherData.data.values.temperatureApparent}
              <span className='text-base font-normal ml-1'>°C</span>
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 mb-2'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='uppercase text-xs tracking-wider text-gray-600 mb-1'>
                Sunset Conditions
              </div>
              <div className='text-lg'>Subdued</div>
            </div>
            <div className='h-8 w-1 bg-gradient-to-b from-orange-400 to-blue-300 rounded-full relative'>
              <div className='absolute -left-1 top-2 w-3 h-3 bg-white border border-orange-400 rounded-full'></div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <div className='uppercase text-xs tracking-wider text-gray-600 mb-1'>
                Temperature
              </div>
              <div className='text-lg'>68°</div>
            </div>
            <div className='h-8 w-1 bg-gradient-to-b from-red-400 to-blue-400 rounded-full relative'>
              <div className='absolute -left-1 top-3 w-3 h-3 bg-white border border-red-400 rounded-full'></div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='uppercase text-xs tracking-wider text-gray-600 mb-1'>
                Precipitation Probability
              </div>
              <div className='text-lg'>
                {getPrecipitationLevel(
                  weatherData.data.values.precipitationProbability
                )}
              </div>
            </div>
            <div className='h-8 w-1 bg-gradient-to-b from-orange-400 to-blue-300 rounded-full relative'>
              <div
                className='absolute -left-1 w-3 h-0.5 rounded bg-[#353535]'
                style={{
                  top: `${100 - Math.min(100, Math.max(0, weatherData.data.values.humidity))}%`,
                }}
              ></div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <div className='uppercase text-xs tracking-wider text-gray-600 mb-1'>
                Humidity
              </div>
              <div className='text-lg'>{weatherData.data.values.humidity}%</div>
            </div>
            <div className='h-8 w-1 bg-gradient-to-b from-blue-400 to-gray-300 rounded-full relative'>
              <div
                className='absolute -left-1 w-3 h-0.5 rounded bg-[#353535]'
                style={{
                  top: `${100 - Math.min(100, Math.max(0, weatherData.data.values.humidity))}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='mt-auto'>
          <div className='flex justify-between items-center mb-2'>
            <div className='uppercase text-xs tracking-wider text-gray-600'>
              % Full Visibility
            </div>
          </div>
          <div className='relative'>
            <div className='h-8 w-full bg-gradient-to-r from-yellow-300 via-blue-300 to-blue-200 rounded-lg relative overflow-hidden opacity-40' />
            <div
              className='absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-300 via-blue-300 to-blue-200 rounded-lg'
              style={{ width: `${weatherData.data.values.visibility}%` }}
            >
              <div className='h-full flex items-center pl-2'>
                <span className='text-gray-700 font-medium'>
                  {weatherData.data.values.visibility}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
