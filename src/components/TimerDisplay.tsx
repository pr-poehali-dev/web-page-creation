
import React from "react";

interface TimerDisplayProps {
  time: number;
  onClick: () => void;
  isMobile: boolean;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, onClick, isMobile }) => {
  // Форматирование времени в часы:минуты:секунды
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Определение размера шрифта в зависимости от типа устройства
  const fontSizeClass = isMobile ? "text-5xl md:text-6xl" : "text-8xl";

  return (
    <div 
      className={`${fontSizeClass} font-mono cursor-pointer select-none mb-4`}
      onClick={onClick}
    >
      {formatTime(time)}
    </div>
  );
};

export default TimerDisplay;
