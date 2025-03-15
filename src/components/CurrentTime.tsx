'use client';

import React, { useEffect, useState } from 'react';
import { Sun } from 'lucide-react';

const CurrentTime: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [formattedTime, ampm] = time.split(' ');

  return (
    <div className='flex justify-between items-center mb-4'>
      <p className='text-6xl font-bold'>
        {formattedTime}
        <span className='text-2xl font-normal ml-1'>{ampm}</span>
      </p>

      <Sun className='h-10 w-10 text-orange-400' strokeWidth={1.5} />
    </div>
  );
};

export default CurrentTime;
