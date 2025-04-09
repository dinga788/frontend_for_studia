import { NextPage } from 'next';
import Head from 'next/head';
import Box from '@/components/Box';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import { WhyUsSection } from '@/components/WhyUsSection';
import { HowWork } from '@/components/HowWork';
import { Komanda } from '@/components/Komanda';
import { Dno } from '@/components/Dno';
import NavigationWrapper from '@/components/NavigationWrapper';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Polyform</title>
      </Head>

      <NavigationWrapper />
      
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
    </>
  );
};

export default IndexPage;