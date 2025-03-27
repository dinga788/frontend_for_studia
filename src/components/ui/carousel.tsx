import React from 'react';

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ children, className = '' }) => {
  return (
    <div className={`overflow-hidden relative ${className}`}>{children}</div>
  );
};

export default Carousel;