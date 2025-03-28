import Box from '@/components/Box';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import { WhyUsSection } from '@/components/WhyUsSection';
import { HowWork } from '@/components/HowWork'
import { Komanda } from '@/components/Komanda';
import { Dno } from '@/components/Dno';
import { Fragment } from 'react';

export default function IndexPage() {
  return (
    <div className="relative">
      <Navigation/>
      <div className="relative -mt-20">
        <Box/>
      </div>
      <Portfolio/>
      <WhyUsSection/>
      <HowWork/>
      <Komanda/>
      <Dno/>
    </div>
  );
}