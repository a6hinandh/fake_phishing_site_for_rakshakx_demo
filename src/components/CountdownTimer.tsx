import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialSeconds: number;
  onFinish?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds, onFinish }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      if (onFinish) onFinish();
      return;
    }
    const timer = setInterval(() => setSeconds(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds, onFinish]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 text-red-600 font-black animate-pulse">
      <Clock className="w-4 h-4" />
      <span className="tabular-nums">{formatTime(seconds)}</span>
    </div>
  );
};

export default CountdownTimer;
