
interface TimerDisplayProps {
  time: number;
  onClick: () => void;
  isMobile?: boolean;
}

const TimerDisplay = ({ time, onClick, isMobile = false }: TimerDisplayProps) => {
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const displayClasses = isMobile 
    ? "text-5xl sm:text-6xl font-mono font-bold cursor-pointer select-none"
    : "text-8xl font-mono font-bold cursor-pointer select-none";

  return (
    <div 
      className={displayClasses}
      onClick={onClick}
    >
      {formatTime(time)}
    </div>
  );
};

export default TimerDisplay;
