import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const PrimaryButton = ({
  children,
  className = '',
  width = '300px',
  height = '60px',
  onClick
}: PrimaryButtonProps) => {
  return (
    <button 
      className={`bg-[#a6c63c] rounded-md
                 transition-all duration-500 ease-in-out
                 hover:bg-[#95b235] hover:shadow-[0_0_15px_#95b235]
                 ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      <span className={`[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#0b0e0b] text-[25px]
                       transition-colors duration-500 ${className}`}>
        {children}
      </span>
    </button>
  );
};