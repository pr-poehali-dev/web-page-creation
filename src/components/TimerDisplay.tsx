
interface TimerDisplayProps {
  time: number;
  onClick: () => void;
}

const TimerDisplay = ({ time, onClick }: TimerDisplayProps) => {
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div 
      className="text-8xl font-mono font-bold cursor-pointer select-none"
      onClick={onClick}
    >
      {formatTime(time)}
    </div>
  );
};

export default TimerDisplay;
