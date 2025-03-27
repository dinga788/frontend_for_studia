import Box from '@/components/Box';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import { Fragment } from 'react';

export default function IndexPage() {
  return (
    <div className="relative">
      <Navigation/>
      <div className="relative -mt-20">
        <Box/>
      </div>
      <Portfolio/>
    </div>
  );
}