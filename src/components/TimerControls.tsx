
interface TimerControlsProps {
  onReset: () => void;
  onSettings: () => void;
  showSettings: boolean;
  isMobile?: boolean;
}

const TimerControls = ({ onReset, onSettings, showSettings, isMobile = false }: TimerControlsProps) => {
  const btnClasses = isMobile
    ? "py-1 px-4 text-sm sm:py-2 sm:px-6 border-2 border-black rounded-full font-bold hover:bg-gray-100 transition"
    : "py-2 px-8 border-2 border-black rounded-full font-bold hover:bg-gray-100 transition";

  return (
    <div className="flex space-x-4 mt-4">
      <button 
        onClick={onSettings}
        className={btnClasses}
      >
        НАСТРОЙКИ
      </button>
      <button 
        onClick={onReset}
        className={btnClasses}
      >
        СБРОС
      </button>
    </div>
  );
};

export default TimerControls;
