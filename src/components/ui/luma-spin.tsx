import React from "react";

interface LumaSpinProps {
  className?: string;
  centerContent?: React.ReactNode;
  size?: number;
}

export const LumaSpin: React.FC<LumaSpinProps> = ({ 
  className = "", 
  centerContent,
  size = 65
}) => {
  return (
    <div className={`relative aspect-square ${className}`} style={{ width: `${size}px` }}>
      <span 
        className="absolute rounded-[50px] animate-loaderAnim"
        style={{ 
          boxShadow: 'inset 0 0 0 3px hsl(var(--primary))' 
        }} 
      />
      <span 
        className="absolute rounded-[50px] animate-loaderAnim animation-delay"
        style={{ 
          boxShadow: 'inset 0 0 0 3px hsl(var(--primary))' 
        }} 
      />
      {centerContent && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {centerContent}
        </div>
      )}
    </div>
  );
};
