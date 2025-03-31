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

import { Menu, User, ChevronDown, ChevronUp, X } from "lucide-react";
import React, { JSX, useState } from "react";

export default function Navigation(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    setIsMobileMenuOpen(false);
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full h-20">
      <nav className="fixed w-full h-20 top-0 left-0 bg-[#1b221b] z-50">
        <div className="w-full h-[60px] mx-auto my-2.5 px-4 sm:px-6 md:px-[100px] flex justify-between items-center">
          
          {/* Логотип и название */}
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

          {/* Навигация для десктопа (1024px+) */}
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

            <User className="ml-[48px] w-10 h-10 text-[#dca844]" />
          </div>

          {/* Мобильная навигация (до 1024px) */}
          <div className="flex lg:hidden items-center gap-6">
            {/* Иконка галочки (разделы) - только на мобильных */}
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

              {/* Выпадающее меню разделов */}
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

            {/* Иконка профиля */}
            <User className="w-8 h-8 text-[#dca844]" />

            {/* Бургер-меню (всегда видно на мобильных) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#dca844] focus:outline-none"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Пустое бургер-меню */}
        {isMobileMenuOpen && (
          <div className=" absolute top-20 left-0 w-full bg-[#1b221b] shadow-lg border-t border-[#dca844]/20">
            {/* Контент будет добавлен позже */}
          </div>
        )}
      </nav>
    </header>
  );
}