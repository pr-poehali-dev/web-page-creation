
import React from "react";

interface Preset {
  id: number;
  time: number;
}

interface PresetsListProps {
  presets: Preset[];
  onSelect: (time: number) => void;
  isMobile: boolean;
  orientation: 'portrait' | 'landscape';
}

const PresetsList: React.FC<PresetsListProps> = ({ 
  presets, 
  onSelect,
  isMobile,
  orientation
}) => {
  // Форматирование времени для пресетов
  const formatPresetTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    
    if (seconds === 0 && minutes === 0) {
      return `${hours}.00:00:00`;
    } else if (seconds === 0) {
      return `${hours}.${pad(minutes)}:00:00`;
    } else {
      return `${hours}.${pad(minutes)}:${pad(seconds)}:00`;
    }
  };

  // Определение стилей для контейнера пресетов в зависимости от ориентации
  const containerClasses = isMobile && orientation === 'portrait'
    ? "flex flex-col mt-4 items-start"
    : isMobile && orientation === 'landscape'
      ? "flex flex-col ml-8 items-start"
      : "flex flex-col ml-16 items-start";

  // Определение размера шрифта в зависимости от устройства
  const fontSizeClass = isMobile ? "text-sm" : "text-base";

  return (
    <div className={containerClasses}>
      {presets.map((preset) => (
        <div 
          key={preset.id}
          className={`${fontSizeClass} cursor-pointer hover:text-blue-500 mb-1`}
          onClick={() => onSelect(preset.time)}
        >
          {`${preset.id}.${formatPresetTime(preset.time)}`}
        </div>
      ))}
    </div>
  );
};

export default PresetsList;
