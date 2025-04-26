
interface Preset {
  id: number;
  time: number;
}

interface PresetsListProps {
  presets: Preset[];
  onSelect: (time: number) => void;
}

const PresetsList = ({ presets, onSelect }: PresetsListProps) => {
  const formatPreset = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${hours}.${pad(minutes)}:${pad(minutes)}:${pad(secondsLeft)}`;
  };

  return (
    <div className="flex flex-col space-y-2">
      {presets.map((preset) => (
        <div 
          key={preset.id}
          className="cursor-pointer hover:font-bold transition-all"
          onClick={() => onSelect(preset.time)}
        >
          {preset.id}.{formatPreset(preset.time)}
        </div>
      ))}
    </div>
  );
};

export default PresetsList;
