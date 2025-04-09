import { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`} />
);