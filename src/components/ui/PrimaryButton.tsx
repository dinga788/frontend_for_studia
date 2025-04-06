import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

export const PrimaryButton = ({
  children,
  className = '',
  width = '300px',
  height = '60px',
  ...props
}: PrimaryButtonProps) => {
  return (
    <button 
      className={`bg-[#a6c63c] rounded-md
                 transition-all duration-500 ease-in-out
                 hover:bg-[#95b235] hover:shadow-[0_0_15px_#95b235]
                 ${className}`}
      style={{ width, height }}
      {...props} // Передаем все стандартные props кнопки
    >
      <span className={`[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#0b0e0b] text-[25px]
                       transition-colors duration-500 ${className}`}>
        {children}
      </span>
    </button>
  );
};