import React from 'react';

type CarouselContentProps = {
  children: React.ReactNode;
};

const CarouselContent: React.FC<CarouselContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CarouselContent;