import { Menu, User } from "lucide-react";
import React, { JSX } from "react";

export default function Navigation(): JSX.Element {
  const navItems = [
    { id: 1, text: "О нас", href: "#" },
    { id: 2, text: "Портфолио", href: "#portfolio" },
    { id: 3, text: "Услуги", href: "#services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="w-full h-20">
      <nav className="fixed w-full h-20 top-0 left-0 bg-[#1b221b] z-10">
        <div className="w-full h-[60px] mx-auto my-2.5 px-[100px] flex justify-between items-center">
          
          {/*Логотип и название*/}
          <button 
            onClick={scrollToTop}
            className="flex items-center focus:outline-none"
            aria-label="Вернуться на главную"
          >
            <img src="/Логотип.svg" alt="Polyform Logo" className="w-[52px] h-[60px]" />
            <img src="/POLYFORM.svg" alt="POLYFORM" className="ml-[23px] w-[204px] h-[29px]" />
          </button>

          {/*Навигация*/}
          <div className="flex items-center">
            <ul className="flex items-center space-x-[50px]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
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
}