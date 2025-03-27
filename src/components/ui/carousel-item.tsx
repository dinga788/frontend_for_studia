import React from 'react';

type CarouselItemProps = {
  children: React.ReactNode;
  className?: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export default CarouselItem;