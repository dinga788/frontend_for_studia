import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button onClick={onClick} className={`bg-transparent ${className}`}>
      {children}
    </button>
  );
};

export default Button;