import React from 'react';
import Button from '@/components/ui/button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

export const AnimatedButton = ({ 
  children, 
  className = '', 
  width = '300px', 
  height = '60px' 
}: AnimatedButtonProps) => {
  return (
    <div className={`inline-block hover:[&>button]:shadow-[0_0_15px_#a6c63c] ${className}`}>
      <Button 
        className={`w-[${width}] h-[${height}] rounded-md border-[5px] border-[#a6c63c] bg-transparent
                   transition-all duration-500 ease-in-out
                   hover:bg-[#a6c63c]/10 ${className}`}
      >
        <span className={`[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#a6c63c] text-[25px]
                         transition-all duration-500 ease-in-out ${className}`}>
          {children}
        </span>
      </Button>
    </div>
  );
};