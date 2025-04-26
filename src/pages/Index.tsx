
import { useState, useEffect } from "react";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import PresetsList from "@/components/PresetsList";

const Index = () => {
  const [time, setTime] = useState(0); // время в секундах
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const presets = [
    { id: 1, time: 3600 },   // 1 час
    { id: 2, time: 7200 },   // 2 часа
    { id: 3, time: 10800 },  // 3 часа
    { id: 4, time: 14400 },  // 4 часа
    { id: 5, time: 18000 },  // 5 часов
  ];

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const selectPreset = (seconds: number) => {
    setTime(seconds);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center">
          <TimerDisplay time={time} onClick={toggleTimer} />
          <TimerControls 
            onReset={handleReset} 
            onSettings={toggleSettings} 
            showSettings={showSettings}
          />
        </div>
        <PresetsList presets={presets} onSelect={selectPreset} />
      </div>
    </div>
  );
};

export default Index;
