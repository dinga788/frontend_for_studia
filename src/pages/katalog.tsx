import React, { useState } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useRouter } from 'next/router';

const KatalogPage = () => {
  const [currentService, setCurrentService] = useState(0);
  const [expandedServices, setExpandedServices] = useState<Record<number, boolean>>({});
  const router = useRouter();

  const services = [
    {
      title: "Визуализация композиции",
      description: "Визуализация композиции — это процесс воплощения идеи или мысли через создание детального изображения, которое передает суть замысла автора. Этот метод позволяет наглядно представить дизайн интерьера, архитектурный проект, ландшафтную композицию или продукт, акцентируя внимание на ключевых элементах: объектах, освещении, текстурах и цветах. Такая визуализация помогает глубже осознать концепцию, донести её до зрителя и оценить эстетическое решение ещё до реализации.",
      price: "10 000р.",
      duration: "5-7 дня",
      image: "/rectangle_105.png"
    },
    {
      title: "Маркетинговое моделирование",
      description: "Маркетинговое моделирование — это процесс создания трехмерных моделей, используемых для продвижения товаров, таких как духи, косметика и декоративные изделия. Эти модели помогают детально показать продукцию, акцентируя внимание на форме, текстурах и цвете. Такой подход делает рекламу более убедительной, позволяя потребителю лучше понять товар перед покупкой. Визуализации усиливают продвижение, делая продукты более привлекательными и доступными для аудитории.",
      price: "5 000р.",
      duration: "3-5 дней",
      image: "/подушка.png"
    },
    {
      title: "Природная визуализация",
      description: "Природная визуализация — это процесс создания изображений, передающих красоту и разнообразие природы. Работы включают пейзажи, флору и фауну, а также элементы ландшафта, такие как горы, реки и леса. Эта визуализация подчеркивает гармонию природных форм и текстур, вдохновляя зрителей и напоминая о ценности окружающей среды.",
      price: "15 000р.",
      duration: "7-14 дней",
      image: "/дорога.png"
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleOrder = () => {
    window.location.href = "https://rutube.ru/video/f3b615db135287a64584737e664e1e4b/?ysclid=m9fi342tvi652068925";
  };

  const handleImageHover = () => {
    // Устанавливаем флаг раскрытия только для текущей услуги
    setExpandedServices(prev => ({
      ...prev,
      [currentService]: true
    }));
  };

  const service = services[currentService];
  const isExpanded = expandedServices[currentService] || false;

  return (
    <div className="w-[1921px] h-[1080px]">
      <div className="fixed w-[1921px] h-[1080px] top-0 left-0 bg-[#1b221b]">
        <div className="relative w-[1490px] h-[746px] top-[134px] left-[215px]">
          <div className="absolute w-[1386px] h-[746px] top-0 left-0">
            <div className="absolute w-[472px] -top-px left-[509px] [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[40px] text-center tracking-[0] leading-[normal]">
              Услуги 3D визуализации
            </div>

            <div 
              className="top-[389px] left-0 absolute w-[55px] h-[55px] cursor-pointer"
              onClick={prevService}
            >
              <div className="w-full h-full transition-transform duration-300 hover:scale-110">
                <img
                  className="absolute w-px h-px top-[-3982px] left-[-2905px]"
                  alt="Union"
                  src="/кнопка_влево.svg"
                />
                <img
                  className="absolute w-[55px] h-[55px] top-0 left-0"
                  alt="Union"
                  src="/кнопка_влево.svg"
                />
              </div>
            </div>

            <div 
              className="absolute w-[1278px] h-[658px] top-[88px] left-[106px]"
              onMouseEnter={handleImageHover}
            >
              <div className="relative w-full h-full overflow-hidden">
                <div className={`absolute w-[1278px] h-[658px] top-0 left-0 transition-all duration-500 ease-in-out ${isExpanded ? 'w-[730px] left-[548px]' : ''} z-10`}>
                  <img
                    className="w-full h-full object-cover"
                    alt="Rectangle"
                    src={service.image}
                  />
                </div>

                <div className="absolute w-[1278px] h-[658px]">
                  <div className="absolute w-[1278px] h-[600px] top-[58px] left-0 bg-[#00000080] rounded-md" />
                  
                  <div className="absolute w-[512px] h-[544px] top-[87px] left-[22px]">
                    <div className="absolute w-[344px] h-[68px] top-[476px] left-0">
                      <PrimaryButton onClick={handleOrder}>
                        Оформить заказ
                      </PrimaryButton>
                    </div>

                    <div className="absolute w-[520px] h-[448px] top-0 left-0">
                      <div className="w-[205px] top-[373px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px] absolute tracking-[0] leading-[normal]">
                        Цена: {service.price}
                      </div>

                      <div className="w-[204px] top-[411px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px] absolute tracking-[0] leading-[normal]">
                        Срок: {service.duration}
                      </div>

                      <p className="w-[512px] top-[54px] left-0 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                        {service.description}
                      </p>

                      <div className="w-[357px] -top-px -left-px [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[25px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="top-[392px] left-[1435px] rotate-180 absolute w-[55px] h-[55px] cursor-pointer"
            onClick={nextService}
          >
            <div className="w-full h-full transition-transform duration-300 hover:scale-110">
              <img
                className="absolute w-px h-px top-[4040px] left-[4395px] -rotate-180"
                alt="Union"
                src="/кнопка_влево.svg"
              />
              <img
                className="absolute w-[55px] h-[55px] top-0 left-0 -rotate-180"
                alt="Union"
                src="/кнопка_вправо.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatalogPage;