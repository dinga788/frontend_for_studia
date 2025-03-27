import React from 'react';

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
            <button className="w-[300px] h-[60px] bg-[#a6c63c] hover:bg-[#95b235] rounded-md">
              <span className="[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#0b0e0b] text-[25px]">
                Оформить заказ
              </span>
            </button>

            <button className="w-[300px] h-[60px] rounded-md border-[5px] border-[#a6c63c] hover:bg-[#a6c63c]/10">
              <span className="[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#a6c63c] text-[25px]">
                Обсудить проект
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}