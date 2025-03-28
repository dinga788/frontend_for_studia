import React, { JSX } from "react";

export const Dno = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full min-h-[259px] bg-[#1b221b] py-8 sm:py-0">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        {/* Декоративная линия */}
        <div className="absolute w-full flex justify-center top-[60px] sm:top-[77px] left-0">
          <img
            className="w-[90%] md:w-[80%] h-1.5"
            alt="Line"
            src="/полоска_для_дна.svg"
          />
        </div>

        {/* Основной контент */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center pt-[80px] sm:pt-[100px] lg:pt-[156px] px-5 sm:px-12 md:px-16 lg:px-[100px] gap-8 lg:gap-0">
          
          {/* Блок с лого и текстами */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 text-center lg:text-left">
            {/* Логотип и название */}
            <button 
              onClick={scrollToTop}
              className="flex items-center focus:outline-none"
              aria-label="Вернуться на главную"
            >
              <img 
                src="/Логотип.svg" 
                alt="Polyform Logo" 
                className="w-[40px] sm:w-[52px] h-[50px] sm:h-[60px]" 
              />
              <img 
                src="/POLYFORM.svg" 
                alt="POLYFORM" 
                className="ml-3 sm:ml-[23px] w-[160px] sm:w-[204px] h-[29px]" 
              />
            </button>

            {/* Тексты */}
            <div className="lg:ml-[60px] xl:ml-[100px] 2xl:ml-[157px] flex flex-col gap-1 sm:gap-2">
              <div className="font-['Istok_Web'] font-normal text-[#dca844] text-lg sm:text-xl hover:text-yellow-300 transition-colors cursor-pointer">
                политика конфиденциальности
              </div>
              <div className="font-['Istok_Web'] font-normal text-[#dca844] text-lg sm:text-xl hover:text-yellow-300 transition-colors cursor-pointer">
                соглашение об обработке персональных данных
              </div>
            </div>
          </div>

          {/* Иконки соцсетей */}
          <div className="flex gap-6 sm:gap-8 md:gap-[50px]">
            <a href="mailto:iliasadowsky2005@gmail.com" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Написать на почту">
              <img
                className="w-[35px] sm:w-[41px] h-[35px] sm:h-[41px]"
                alt="Email"
                src="/почта.svg"
              />
            </a>
            
            <a href="https://t.me/Dindo228" target="_blank" rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Наш Telegram">
              <img
                className="w-[35px] sm:w-[41px] h-[35px] sm:h-[41px]"
                alt="Telegram"
                src="/телеграм.svg"
              />
            </a>
            
            <a href="tel:+79535277215" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Позвонить нам">
              <img
                className="w-[35px] sm:w-10 h-[35px] sm:h-10"
                alt="Phone"
                src="/телефон.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};