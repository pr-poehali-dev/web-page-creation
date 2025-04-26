
interface Preset {
  id: number;
  time: number;
}

interface PresetsListProps {
  presets: Preset[];
  onSelect: (time: number) => void;
  isMobile?: boolean;
  orientation?: 'portrait' | 'landscape';
}

const PresetsList = ({ presets, onSelect, isMobile = false, orientation = 'portrait' }: PresetsListProps) => {
  const formatPreset = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    
    // Упрощенный формат для мобильных устройств
    if (isMobile) {
      return `${hours}:${pad(minutes)}:${pad(secondsLeft)}`;
    }
    
    return `${hours}:${pad(minutes)}:${pad(secondsLeft)}`;
  };

  // Определяем стили списка в зависимости от устройства и ориентации
  const listClasses = isMobile && orientation === 'portrait'
    ? "flex flex-row justify-center flex-wrap gap-3 mt-4"
    : "flex flex-col space-y-2";

  const presetClasses = isMobile && orientation === 'portrait'
    ? "text-sm px-2 py-1 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
    : "cursor-pointer hover:font-bold transition-all";

  return (
    <div className={listClasses}>
      {presets.map((preset) => (
        <div 
          key={preset.id}
          className={presetClasses}
          onClick={() => onSelect(preset.time)}
        >
          {isMobile && orientation === 'portrait' 
            ? `${preset.id}. ${formatPreset(preset.time)}`
            : `${preset.id}.${formatPreset(preset.time)}`}
        </div>
      ))}
    </div>
  );
};

export default PresetsList;
