/*import React, { JSX } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export const Komanda = (): JSX.Element => {
  return (
    <div className="w-[1920px] h-[1080px]">
      <div className="w-[1920px] h-[1080px] top-0 left-0">
        <div className="relative w-[1920px] h-[1080px] bg-[#1b221b]" id="team">
          <div className="absolute w-[1721px] h-[886px] top-36 left-[99px]">
            <div className="absolute w-[1721px] h-[886px] top-0 left-0">
              <div className="absolute w-[852px] h-[885px] top-px left-0">
                <div className="absolute w-[416px] h-[885px] top-0 left-0">
                  <div className="absolute w-[416px] h-[706px] top-[179px] left-0 bg-[#181b17] rounded-md" />

                  <div className="absolute w-[416px] h-[706px] top-[179px] left-0 bg-[#181b17] rounded-md" />

                  <img
                    className="absolute w-[416px] h-[415px] top-0 left-0 object-cover"
                    alt="Rectangle"
                    src="/иван.png"
                  />

                  <div className="absolute w-[381px] h-[282px] top-[437px] left-5">
                    <p className="w-[375px] top-0 left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                      Арт-директор/концепт-хужожник — Иван Петров
                    </p>

                    <p className="absolute w-[375px] top-[118px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl tracking-[0] leading-[normal]">
                      <span className="font-bold">Опыт:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        Более 10 лет в индустрии 3D-графики.
                        <br />
                      </span>
                    </p>

                    <p className="w-[375px] top-[196px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                      <span className="font-bold">Чем занимается:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        Иван отвечает за общее художественное направление
                        студии.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="absolute w-[416px] h-[885px] top-0 left-[436px]">
                  <div className="absolute w-[416px] h-[706px] top-[179px] left-0 bg-[#13121280] rounded-md" />

                  <img
                    className="absolute w-[416px] h-[415px] top-0 left-0 object-cover"
                    alt="Rectangle"
                    src="/алексей.png"
                  />

                  <div className="absolute w-[381px] h-[283px] top-[436px] left-[21px]">
                    <div className="w-[375px] top-0 left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                      Лайтинг/рендер-специалист — Алексей Смирнов
                    </div>

                    <p className="absolute w-[375px] top-[118px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl tracking-[0] leading-[normal]">
                      <span className="font-bold">Опыт:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        5 лет в 3D-освещении и рендеринге.
                        <br />
                      </span>
                    </p>

                    <p className="w-[375px] top-[196px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                      <span className="font-bold">Чем занимается:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        Алексей отвечает за настройку освещения и рендеринг
                        финальных изображений.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute w-[848px] h-[885px] top-0 left-[873px]">
                <div className="relative h-[885px]">
                  <div className="absolute w-[416px] h-[715px] top-[170px] left-0 bg-[#181b17] rounded-md" />

                  <img
                    className="absolute w-[416px] h-[416px] top-0 left-0 object-cover"
                    alt="Rectangle"
                    src="/мария.png"
                  />

                  <div className="absolute w-[412px] h-[705px] top-[180px] left-[436px] bg-[#181b17] rounded-md" />

                  <img
                    className="absolute w-[412px] h-[416px] top-0 left-[436px] object-cover"
                    alt="Rectangle"
                    src="/дмитрий.png"
                  />

                  <div className="absolute w-[381px] h-[283px] top-[436px] left-5">
                    <p className="top-0 font-bold absolute w-[375px] left-0 [font-family:'Istok_Web-Bold',Helvetica] text-[#dca844] text-xl tracking-[0] leading-[normal]">
                      Ведущий 3D-художник — Мария Иванова
                    </p>

                    <p className="absolute w-[375px] top-[118px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl tracking-[0] leading-[normal]">
                      <span className="font-bold">Опыт:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        7-летний опыт в 3D-рендеринге и текстурирование.
                        <br />
                      </span>
                    </p>

                    <p className="absolute w-[375px] top-[196px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl tracking-[0] leading-[normal]">
                      <span className="font-bold">Чем занимается:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        Мария создает высокодетализированные 3D-модели и
                        текстуры
                      </span>
                    </p>
                  </div>

                  <div className="absolute w-[381px] h-[283px] top-[436px] left-[454px]">
                    <p className="w-[375px] top-0 left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                      Менеджер проектов — Дмитрий Кузнецов
                    </p>

                    <p className="top-[118px] font-normal absolute w-[375px] left-0 [font-family:'Istok_Web-Bold',Helvetica] text-[#dca844] text-xl tracking-[0] leading-[normal]">
                      <span className="font-bold">Опыт:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        3 года опыта в управлении проектами в сфере
                        3D-визуализации.
                        <br />
                      </span>
                    </p>

                    <p className="w-[375px] top-[196px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                      <span className="font-bold">Чем занимается:</span>

                      <span className="[font-family:'Istok_Web-Regular',Helvetica]">
                        {" "}
                        Дмитрий координирует работу, следит за сроками
                        выполнения проектов.
                      </span>
                    </p>
                  </div>

                  <div className="absolute w-[734px] h-[60px] top-[806px] left-[58px]">
                    <div className="absolute w-[300px] h-[60px] top-0 left-0">
                      <PrimaryButton>Портфолио</PrimaryButton>
                    </div>

                    <div className="w-[300px] top-0 left-[434px] absolute h-[60px]">
                      <PrimaryButton>Портфолио</PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[302px] top-[806px] left-[58px] absolute h-[60px]">
              <PrimaryButton>Портфолио</PrimaryButton>
            </div>

            <div className="absolute w-[300px] h-[60px] top-[806px] left-[494px]">
              <PrimaryButton>Портфолио</PrimaryButton>
            </div>

            <div className="absolute w-[300px] h-[60px] top-[806px] left-[930px]">
              <PrimaryButton>Портфолио</PrimaryButton>
            </div>

            <div className="absolute w-[300px] h-[60px] top-[806px] left-[1366px]">
              <PrimaryButton>Портфолио</PrimaryButton>
            </div>
          </div>

          <div className="w-72 top-[49px] left-[99px] [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[40px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
            Наша команда
          </div>
        </div>
      </div>
    </div>
  );
};*/

'use client';
import React, { JSX, useState, useEffect } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export const Komanda = (): JSX.Element | null => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const teamMembers = [
    {
      name: "Иван Петров",
      position: "Арт-директор/концепт-художник",
      experience: "Более 10 лет в индустрии 3D-графики.",
      role: "Иван отвечает за общее художественное направление студии.",
      image: "/иван.png",
      bgColor: "bg-[#181b17]"
    },
    {
      name: "Алексей Смирнов",
      position: "Лайтинг/рендер-специалист",
      experience: "5 лет в 3D-освещении и рендеринге.",
      role: "Алексей отвечает за настройку освещения и рендеринг финальных изображений.",
      image: "/алексей.png",
      bgColor: "bg-[#13121280]"
    },
    {
      name: "Мария Иванова",
      position: "Ведущий 3D-художник",
      experience: "7-летний опыт в 3D-рендеринге и текстурировании.",
      role: "Мария создает высокодетализированные 3D-модели и текстуры.",
      image: "/мария.png",
      bgColor: "bg-[#181b17]"
    },
    {
      name: "Дмитрий Кузнецов",
      position: "Менеджер проектов",
      experience: "3 года опыта в управлении проектами в сфере 3D-визуализации.",
      role: "Дмитрий координирует работу, следит за сроками выполнения проектов.",
      image: "/дмитрий.png",
      bgColor: "bg-[#181b17]"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#1b221b] flex items-center justify-center py-[5vh]" id="team">
      <div className="w-full max-w-[1920px] mx-auto px-[5%]">
        <h2 className="mb-[4vh] [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[3vh] md:text-[3.5vh] lg:text-[4vh] xl:text-[4.5vh] 2xl:text-[48px] whitespace-nowrap text-center">
          Наша команда
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[2vh] md:gap-[2.5vh]">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`${member.bgColor} rounded-md overflow-hidden flex flex-col h-full min-h-[60vh] md:min-h-[65vh]`}
            >
              <div className="w-full aspect-[416/415] overflow-hidden flex-none">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  alt={member.name}
                  src={member.image}
                />
              </div>
              
              <div className="p-[2vh] flex flex-col flex-grow">
                <h3 className="[font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[2vh] md:text-[2.2vh] lg:text-[2.5vh] 2xl:text-[24px] mb-[1.5vh] leading-tight">
                  {member.position} — {member.name}
                </h3>
                
                <div className="space-y-[1.5vh] flex-grow">
                  <p className="[font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-[1.8vh] md:text-[2vh] 2xl:text-[20px]">
                    <span className="font-bold">Опыт:</span> {member.experience}
                  </p>
                  
                  <p className="[font-family:'Istok_Web-Bold',Helvetica] font-normal text-[#dca844] text-[1.8vh] md:text-[2vh] 2xl:text-[20px]">
                    <span className="font-bold">Чем занимается:</span> {member.role}
                  </p>
                </div>
                
                <div className="mt-[2vh] pb-[1vh] flex justify-center">
                  <PrimaryButton className="w-full max-w-[90%] text-[2vh] md:text-[2.2vh] 2xl:text-[24px] py-[1.5vh] min-h-[5vh] hover:bg-opacity-90 transition-all flex items-center justify-center">
                    Портфолио
                  </PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[5vh]"></div>
      </div>
    </div>
  );
};