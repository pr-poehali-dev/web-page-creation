
import { useState, useEffect } from "react";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import PresetsList from "@/components/PresetsList";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [time, setTime] = useState(0); // время в секундах
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
  );
  const isMobile = useIsMobile();

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

  // Отслеживание ориентации устройства
  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Определяем классы контейнера в зависимости от устройства и ориентации
  const containerClasses = isMobile
    ? orientation === 'portrait'
      ? "flex flex-col items-center gap-8 w-full px-4"
      : "flex flex-row items-center justify-between w-full px-4"
    : "flex flex-row items-center gap-8";

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className={containerClasses}>
        <div className="flex flex-col items-center">
          <TimerDisplay time={time} onClick={toggleTimer} isMobile={isMobile} />
          <TimerControls 
            onReset={handleReset} 
            onSettings={toggleSettings} 
            showSettings={showSettings}
            isMobile={isMobile}
          />
        </div>
        <PresetsList 
          presets={presets} 
          onSelect={selectPreset} 
          isMobile={isMobile} 
          orientation={orientation} 
        />
      </div>
    </div>
  );
};

export default Index;
