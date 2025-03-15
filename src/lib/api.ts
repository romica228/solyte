export const fetchWeather = async () => {
  const res = await fetch('/api/weather');
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return res.json();
};
