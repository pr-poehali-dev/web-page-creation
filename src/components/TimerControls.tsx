
interface TimerControlsProps {
  onReset: () => void;
  onSettings: () => void;
  showSettings: boolean;
}

const TimerControls = ({ onReset, onSettings, showSettings }: TimerControlsProps) => {
  return (
    <div className="flex space-x-4 mt-4">
      <button 
        onClick={onSettings}
        className="py-2 px-8 border-2 border-black rounded-full font-bold hover:bg-gray-100 transition"
      >
        НАСТРОЙКИ
      </button>
      <button 
        onClick={onReset}
        className="py-2 px-8 border-2 border-black rounded-full font-bold hover:bg-gray-100 transition"
      >
        СБРОС
      </button>
    </div>
  );
};

export default TimerControls;
