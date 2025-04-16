'use client';
import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('./Navigation'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-20 bg-[#1b221b]">
      <div className="container mx-auto h-[60px] flex items-center justify-between px-4 sm:px-6 md:px-[100px]">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-12 sm:w-[52px] sm:h-[60px] bg-gray-700 rounded"></div>
          <div className="ml-2 sm:ml-[23px] w-32 sm:w-[204px] h-5 sm:h-[29px] bg-gray-700 rounded"></div>
        </div>

        <div className="hidden lg:flex items-center space-x-[50px]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-6 bg-gray-700 rounded"></div>
          ))}
          <div className="ml-[48px] w-10 h-10 bg-gray-700 rounded-full"></div>
        </div>

        <div className="flex lg:hidden items-center gap-6">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  )
});

export default Navigation;