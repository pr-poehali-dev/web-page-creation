
import React from "react";
import { Button } from "@/components/ui/button";

interface TimerControlsProps {
  onReset: () => void;
  onSettings: () => void;
  showSettings: boolean;
  isMobile: boolean;
}

const TimerControls: React.FC<TimerControlsProps> = ({ 
  onReset, 
  onSettings, 
  showSettings,
  isMobile 
}) => {
  const buttonClass = isMobile ? "text-sm px-3 py-1" : "text-base";
  
  return (
    <div className="flex gap-4 mt-2">
      <Button 
        onClick={onSettings} 
        variant="outline" 
        className={`uppercase border-2 border-black rounded-md ${buttonClass}`}
      >
        НАСТРОЙКИ
      </Button>
      <Button 
        onClick={onReset} 
        variant="outline" 
        className={`uppercase border-2 border-black rounded-md ${buttonClass}`}
      >
        СБРОС
      </Button>
    </div>
  );
};

export default TimerControls;
