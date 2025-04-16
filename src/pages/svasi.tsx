import React, { FormEvent, useState } from "react";
import emailjs from 'emailjs-com';

const SvasiPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_ksk00d7',
        'template_q1j8vx3',
        e.currentTarget,
        'TCEullV5sA0GDAmwk'
      );

      setIsSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[1921px] h-[1204px]">
      <div className="fixed w-[1935px] h-[1204px] top-0 left-0">
        <div className="relative w-[1921px] h-[1204px] bg-[#1b221b]">
          <div className="w-[331px] top-[173px] left-[149px] [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[40px] text-center absolute tracking-[0] leading-[normal]">
            Связаться с нами
          </div>

          <div className="w-[302px] top-[262px] left-[150px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
            Хотите связаться с нами?
          </div>

          <p className="absolute w-[575px] top-[298px] left-[150px] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-[normal]">
            <span className="text-[#dca844]">Напишите на почту: </span>
            <a 
              href="mailto:iliasadowsky2005@gmail.com" 
              className="text-[#a6c63c] hover:underline cursor-pointer"
            >
              iliasadowsky2005@gmail.com
            </a>
          </p>

          <div className="absolute w-[638px] h-[375px] top-[434px] left-[150px] bg-[#00000080] rounded-md">
            <p className="w-[399px] top-11 left-10 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px] absolute tracking-[0] leading-[normal]">
              Работаем по всей России и СНГ
            </p>

            <p className="absolute w-[281px] top-[150px] left-[94px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-transparent text-xl tracking-[0] leading-[normal]">
              <span className="text-[#dca844]">Телефон: </span>
              <a 
                href="tel:+79535277215" 
                className="text-[#a6c63c] hover:underline cursor-pointer"
              >
                +79535277215
              </a>
            </p>

            <p className="absolute w-[412px] top-[206px] left-[94px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-transparent text-xl tracking-[0] leading-[normal]">
              <span className="text-[#dca844]">Почта: </span>
              <a 
                href="mailto:iliasadowsky2005@gmail.com" 
                className="text-[#a6c63c] hover:underline cursor-pointer"
              >
                iliasadowsky2005@gmail.com
              </a>
            </p>

            <p className="w-[507px] top-[262px] left-[94px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
              Адрес: Город Санкт Петербург, Фрузенский район, Альпийский
              переулок, дом 20
            </p>

            <img
              className="w-[33px] h-[33px] top-[150px] absolute left-10"
              alt="Union"
              src="/телефон.svg"
            />

            <img
              className="w-[34px] h-[34px] top-[202px] absolute left-10"
              alt="Union"
              src="/почта.svg"
            />

            <img
              className="absolute w-[34px] h-[34px] top-[254px] left-10"
              alt="Location"
              src="/location.svg"
            />
          </div>

          <div className="absolute w-[656px] h-[670px] top-[174px] left-[1133px]">
            <form onSubmit={handleSubmit} className="relative w-[638px] h-[670px] bg-[#00000080] rounded-md">
              <div className="w-[232px] top-11 left-10 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px] absolute tracking-[0] leading-[normal]">
                Рассчитать проект
              </div>

              <div className="w-[117px] top-[150px] left-10 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                Ваше имя
              </div>

              <div className="absolute w-[558px] h-[42px] top-[186px] left-10 rounded-md">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full h-full bg-transparent px-3.5 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-white text-xl absolute tracking-[0] leading-[normal] rounded-md border-[5px] border-solid border-[#dca844] focus:outline-none"
                  placeholder="Ваше имя"
                />
              </div>

              <div className="w-[117px] top-[242px] left-10 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                Телефон
              </div>

              <div className="absolute w-[558px] h-[42px] top-[278px] left-10 rounded-md">
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full h-full bg-transparent px-3.5 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-white text-xl absolute tracking-[0] leading-[normal] rounded-md border-[5px] border-solid border-[#dca844] focus:outline-none"
                  placeholder="Телефон"
                />
              </div>

              <div className="absolute w-[117px] top-[334px] left-10 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl tracking-[0] leading-[normal]">
                E-mail
              </div>

              <div className="w-[136px] top-[426px] left-10 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl absolute tracking-[0] leading-[normal]">
                Сообщение
              </div>

              <div className="absolute w-[558px] h-[42px] top-[370px] left-10 rounded-md">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full h-full bg-transparent px-3.5 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-white text-xl absolute tracking-[0] leading-[normal] rounded-md border-[5px] border-solid border-[#dca844] focus:outline-none"
                  placeholder="E-mail"
                />
              </div>

              <div className="absolute w-[558px] h-[101px] top-[462px] left-10 rounded-md">
                <textarea
                  name="message"
                  required
                  className="w-full h-full bg-transparent px-3.5 pt-2.5 [font-family:'Istok_Web-Regular',Helvetica] font-normal text-white text-xl absolute tracking-[0] leading-[normal] rounded-md border-[5px] border-solid border-[#dca844] focus:outline-none"
                  placeholder="Краткое описание проекта или идеи"
                />
              </div>

              {error && (
                <div className="text-red-500 absolute top-[550px] left-10 right-10">
                  {error}
                </div>
              )}

              {isSent ? (
                <div className="text-green-500 absolute top-[590px] left-[219px] [font-family:'Istok_Web-Bold',Helvetica] font-bold text-xl">
                  Сообщение отправлено!
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`absolute w-[200px] h-[50px] top-[590px] left-[219px] rounded-md [font-family:'Istok_Web-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[normal] ${
                    isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#dca844] hover:bg-[#a6c63c]'
                  }`}
                >
                  {isLoading ? 'Отправка...' : 'Отправить'}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SvasiPage;