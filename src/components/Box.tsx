import React from 'react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Button from '@/components/ui/button';

export default function Box() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#1b221b] bg-[url('/гарри_поттер.png')] bg-cover bg-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Холова */}
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

          {/* Линия */}
          <p className="[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[25px] mt-[60px]">
            Мы создаём не просто рендеры, а открываем для вас новые горизонты.
          </p>

          {/* Кнопки */}
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
}