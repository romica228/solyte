import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=${apiKey}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Accept-Encoding': 'deflate, gzip, br',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
