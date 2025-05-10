import React, { JSX } from "react";

export const WhyUsSection = (): JSX.Element => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-[#1b221b] overflow-hidden">
      {/* Основной контейнер с отступами 100px слева и 50px сверху */}
      <div className="absolute top-[50px] left-[100px] w-[1720px] h-[980px]">
        
        {/* Заголовок с переносом */}
        <div className="w-[575px] h-[86px] mb-[30px]">
          <h2 className="[font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[40px] leading-tight">
            Почему именно наша студия<br />
            3D визуализации?
          </h2>
        </div>

        {/* Текстовый блок */}
        <div className="w-[959px] h-[116px] mt-[60px] mb-[20px]">
          <p className="[font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl leading-normal">
            Каждый день наша команда работает над тем, чтобы создавать
            качественные и профессиональные визуализации, которые помогают нашим
            клиентам выделиться среди конкурентов и привлечь внимание своей
            целевой аудитории.
          </p>
        </div>

        {/* Основное содержимое с изображениями */}
        <div className="flex">
          {/* Левая колонка (церковь) */}
          <div className="w-[959px] mr-[100px]"> {/* Отступ справа 100px */}
            {/* Блоки с иконками */}
            <div className="flex mb-[50px]"> {/* Отступ снизу 50px */}
              <div className="flex items-center mr-[50px]">
                <img className="w-[66px] h-[67px]" src="/лайк.svg" alt="Качество" />
                <h3 className="ml-[12px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] text-[#dca844]">
                  Качество работы
                </h3>
              </div>
              <div className="flex items-center">
                <img className="w-[68px] h-[75px]" src="/время.svg" alt="Скорость" />
                <h3 className="ml-[12px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] text-[#dca844]">
                  Скорость работы
                </h3>
              </div>
            </div>

            {/* Изображение церкви */}
            <div className="w-[959px] h-[523px]">
              <img
                className="w-full h-full object-cover"
                src="/церковь.png"
                alt="Церковь"
              />
            </div>
          </div>

          {/* Правая колонка (дерево) */}
          <div className="w-[662px] h-[930px] relative">
            <div className="absolute top-[-280px] right-0 left-0"> {/* Смещение вверх на 50px */}
              <img
                className="w-full h-full object-cover"
                src="/красное дерево.png"
                alt="Красное дерево"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};