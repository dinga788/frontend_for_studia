/*import { Menu, User } from "lucide-react";
import React, { JSX } from "react";

export default function Navigation(): JSX.Element {
  const navItems = [
    { id: 1, text: "О нас", href: "#team" },
    { id: 2, text: "Портфолио", href: "#portfolio" },
    { id: 3, text: "Услуги", href: "#services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <header className="w-full h-20">
      <nav className="fixed w-full h-20 top-0 left-0 bg-[#1b221b] z-50">
        <div className="w-full h-[60px] mx-auto my-2.5 px-[100px] flex justify-between items-center">
          
          <button 
            onClick={scrollToTop}
            className="flex items-center focus:outline-none"
            aria-label="Вернуться на главную"
          >
            <img src="/Логотип.svg" alt="Polyform Logo" className="w-[52px] h-[60px]" />
            <img src="/POLYFORM.svg" alt="POLYFORM" className="ml-[23px] w-[204px] h-[29px]" />
          </button>

          <div className="flex items-center">
            <ul className="flex items-center space-x-[50px]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-['Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl tracking-[0] leading-normal whitespace-nowrap hover:text-yellow-300 transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <User className="ml-[48px] w-10 h-10 text-[#dca844]" />
            <Menu className="ml-[40px] w-10 h-9 text-[#dca844]" />
          </div>
        </div>
      </nav>
    </header>
  );
}*/

import { User, ChevronDown, ChevronUp, X } from "lucide-react";
import React, { JSX, useState } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export default function Navigation(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    password: ''
  });
  
  const navItems = [
    { id: 1, text: "О нас", href: "#team" },
    { id: 2, text: "Портфолио", href: "#portfolio" },
    { id: 3, text: "Услуги", href: "#services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsDropdownOpen(false);
    setIsProfileOpen(false);
    setShowAuthModal(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsDropdownOpen(false);
    setIsProfileOpen(false);
    setShowAuthModal(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsDropdownOpen(false);
  };

  const handleAuthClick = () => {
    setShowAuthModal(true);
    setIsProfileOpen(false);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    closeAuthModal();
  };

  return (
    <>
      <header className="w-full h-20">
        <nav className="fixed w-full h-20 top-0 left-0 bg-[#1b221b] z-50">
          <div className="w-full h-[60px] mx-auto my-2.5 px-4 sm:px-6 md:px-[100px] flex justify-between items-center">
            
            <button 
              onClick={scrollToTop}
              className="flex items-center focus:outline-none"
              aria-label="Вернуться на главную"
            >
              <img 
                src="/Логотип.svg" 
                alt="Polyform Logo" 
                className="w-10 h-12 sm:w-[52px] sm:h-[60px]" 
              />
              <img 
                src="/POLYFORM.svg" 
                alt="POLYFORM" 
                className="ml-2 sm:ml-[23px] w-32 sm:w-[204px] h-5 sm:h-[29px]" 
              />
            </button>

            <div className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-[50px]">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="font-['Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-xl hover:text-yellow-300 transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>

              <button 
                onClick={toggleProfile}
                className="ml-[48px] text-[#dca844] hover:text-yellow-300 transition-colors"
                aria-label="Профиль"
              >
                <User className="w-10 h-10" />
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-6">
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-[#dca844] hover:text-yellow-300 transition-colors"
                  aria-label="Показать разделы"
                >
                  {isDropdownOpen ? (
                    <ChevronUp className="w-8 h-8" />
                  ) : (
                    <ChevronDown className="w-8 h-8" />
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1b221b] border border-[#dca844] rounded-md shadow-lg z-50">
                    <ul className="py-1">
                      {navItems.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="block px-4 py-2 font-['Istok_Web-Regular',Helvetica] text-[#dca844] hover:bg-[#dca844]/10"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button 
                onClick={toggleProfile}
                className="text-[#dca844] hover:text-yellow-300 transition-colors"
                aria-label="Профиль"
              >
                <User className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {(isProfileOpen || showAuthModal) && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => {
            setIsProfileOpen(false);
            setShowAuthModal(false);
          }}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-[477px] bg-[#131613] z-50 transition-transform duration-300 ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button 
            onClick={toggleProfile}
            className="text-[#dca844] hover:text-yellow-300 mb-8"
            aria-label="Закрыть"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex items-center mb-12 cursor-pointer" onClick={handleAuthClick}>
            <img 
              src='/user-tick.svg' 
              alt="авторизация" 
              className="w-10 h-10 mr-8" 
            />
            <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
              авторизироватся
            </span>
          </div>
          
          <div className="flex items-center mb-12">
            <img 
              src='/user-add.svg'
              alt="Регестрация" 
              className="w-10 h-10 mr-8" 
            />
            <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
              Связаться
            </span>
          </div>
          
          <div className="flex items-center">
            <img 
              src='/message-notif.svg' 
              alt="Выйти" 
              className="w-10 h-10 mr-8" 
            />
            <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
              Выйти
            </span>
          </div>
        </div>
      </div>

      {showAuthModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-[637px] h-[810px] bg-[#1b221b] rounded-md">
            <img
              className="absolute w-[327px] h-[51px] top-[100px] left-[155px]"
              alt="Union"
              src="/union.svg"
            />

            <div className="w-[261px] top-[45px] left-[187px] [-webkit-text-stroke:1px_#dca844] text-[#dca844] text-[40px] text-center absolute [font-family:'Istok_Web-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              Авторизация
            </div>

            <form onSubmit={handleSubmit} className="w-full h-full">
              <div className="absolute w-[558px] h-[42px] top-[234px] left-10 rounded-md">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#fcbf49b2] text-xl focus:outline-none"
                  required
                />
                <div className="absolute w-[558px] h-[42px] top-0 left-0 rounded-md border-[5px] border-solid border-[#dca844] pointer-events-none" />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[301px] left-[39px] rounded-md">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Ваша фамилия"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#fcbf49b2] text-xl focus:outline-none"
                  required
                />
                <div className="absolute w-[558px] h-[42px] top-0 left-0 rounded-md border-[5px] border-solid border-[#dca844] pointer-events-none" />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[368px] left-[39px] rounded-md">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  placeholder="Телефон или E-mail"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#fcbf49b2] text-xl focus:outline-none"
                  required
                />
                <div className="absolute w-[558px] h-[42px] top-0 left-0 rounded-md border-[5px] border-solid border-[#dca844] pointer-events-none" />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[480px] left-10 rounded-md">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Пароль"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#fcbf49b2] text-xl focus:outline-none"
                  required
                />
                <div className="absolute w-[558px] h-[42px] top-0 left-0 rounded-md border-[5px] border-solid border-[#dca844] pointer-events-none" />
              </div>

              <div className="absolute w-[300px] h-[60px] top-[700px] left-[168px] rounded-md">
                <PrimaryButton className="w-full h-full">
                  <span className="[-webkit-text-stroke:1px_#a6c63c] text-[#a6c63c] text-[25px] [font-family:'Istok_Web-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                    Авторизироваться
                  </span>
                </PrimaryButton>
              </div>

              <button 
                type="button"
                onClick={closeAuthModal}
                className="absolute w-10 h-10 top-5 left-5 text-[#dca844] hover:text-yellow-300"
                aria-label="Закрыть"
              >
                <img
                  src="/send.svg"
                  alt="Закрыть"
                  className="w-full h-full"
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}