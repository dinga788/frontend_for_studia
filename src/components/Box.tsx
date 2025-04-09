/*import React from 'react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Button from '@/components/ui/button';

export default function Box() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#1b221b] bg-[url('/гарри_поттер.png')] bg-cover bg-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div>
            <h1 className="[font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[100px] leading-tight">
              Студия 3D
            </h1>

            <div className="relative">
              <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#dca844] text-[100px] leading-tight ml-[70px]">
                визуализации
              </h1>
              <div className="absolute w-[262px] h-1.5 top-[13px] left-[173px] bg-[#dca844] rounded-md"></div>
            </div>
          </div>

          <p className="[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[25px] mt-[60px]">
            Мы создаём не просто рендеры, а открываем для вас новые горизонты.
          </p>

          <div className="flex gap-10 mt-[150px]">
          <PrimaryButton>
            Оформить заказ
          </PrimaryButton>
          
          <AnimatedButton>
            Обсудить проект
          </AnimatedButton>
          </div>
        </div>
      </div>
    </main>
  );
}*/

'use client';
import React from 'react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Link from 'next/link';

export default function Box() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#1b221b] bg-[url('/гарри_поттер.png')] bg-cover bg-center">
      <div className="container mx-auto h-full flex flex-col justify-center px-4 sm:px-0">
        <div className="max-w-3xl">
          <div>
            <h1 className="[font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[60px] sm:text-[100px] leading-tight">
              Студия 3D
            </h1>

            <div className="relative">
              <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#dca844] text-[60px] sm:text-[100px] leading-tight ml-0 sm:ml-[70px]">
                визуализации
              </h1>
              <div className="hidden sm:block absolute w-[262px] h-1.5 top-[13px] left-[173px] bg-[#dca844] rounded-md"></div>
            </div>
          </div>

          <p className="[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[20px] sm:text-[25px] mt-[30px] sm:mt-[60px]">
            Мы создаём не просто рендеры, а открываем для вас новые горизонты.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-[50px] sm:mt-[150px]">
            <PrimaryButton className="text-[16px] sm:text-[25px]">
              Оформить заказ
            </PrimaryButton>
            
            <Link href="/svasi" passHref>
              <AnimatedButton className="text-[16px] sm:text-[25px]">
                Обсудить проект
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}