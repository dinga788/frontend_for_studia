import React, { JSX } from "react";
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
};