import React, { JSX } from "react";

export const HowWork = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-[#1b221b]">
      <div className="relative w-full min-h-screen bg-[#1b221b]">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full bg-[#1b221b]">
            <div className="w-[430px] top-[49px] left-[749px] [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[40px] absolute text-[#dca844] tracking-[0] leading-[normal]">
              Как начать работать?
            </div>

            <img
              className="absolute w-[101px] h-[780px] top-[138px] left-[911px]"
              alt="Group"
              src={"/12345.svg"}
            />

            <div className="w-[374px] top-[156px] left-[1060px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] whitespace-nowrap absolute text-[#dca844] tracking-[0] leading-[normal]">
              Регистрация или Авторизация
            </div>

            <p className="w-[374px] top-[200px] left-[1060px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-xl absolute text-[#dca844] tracking-[0] leading-[normal]">
              Вы заходите на сайт и регистрируетесь либо авторизуетесь.
            </p>

            <div className="w-[374px] top-[496px] left-[1061px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] whitespace-nowrap absolute text-[#dca844] tracking-[0] leading-[normal]">
              Оформление Заказа
            </div>

            <p className="w-[386px] top-[540px] left-[1061px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-xl absolute text-[#dca844] tracking-[0] leading-[normal]">
              Нажимаете на кнопку &#34;Оформить заказ&#34; и заполняете
              контактную информацию
            </p>

            <div className="w-[374px] top-[836px] left-[1060px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] whitespace-nowrap absolute text-[#dca844] tracking-[0] leading-[normal]">
              Выполнение и Оплата
            </div>

            <p className="w-[473px] top-[880px] left-[1060px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-xl absolute text-[#dca844] tracking-[0] leading-[normal]">
              Наша команда начинает работу над проектом, завершает его и
              отправляет вам результат. После утверждения вы оплачиваете услугу.
            </p>

            <div className="w-[374px] top-[326px] left-[487px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] whitespace-nowrap absolute text-[#dca844] tracking-[0] leading-[normal]">
              Выбор Услуги
            </div>

            <p className="w-[385px] top-[370px] left-[487px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-xl absolute text-[#dca844] tracking-[0] leading-[normal]">
              Переходите в каталог услуг и выбираете нужную услугу.
            </p>

            <div className="w-[374px] top-[666px] left-[487px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[25px] whitespace-nowrap absolute text-[#dca844] tracking-[0] leading-[normal]">
              Обсуждение Деталей
            </div>

            <p className="w-[385px] top-[710px] left-[487px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-xl absolute text-[#dca844] tracking-[0] leading-[normal]">
              Получаете уведомление на почту или звонок от менеджера для
              уточнения деталей заказа
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};