'use client';
import { User, ChevronDown, ChevronUp, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthModal } from './AuthModal';
import { RegisterModal } from './RegisterModal';
import { NotificationsContainer } from './NotificationsContainer';
import { authAPI } from '@/services/api.service';

type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export default function Navigation() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [notifications, setNotifications] = useState<{id: number, message: string, type: 'success' | 'error'}[]>([]);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setCurrentUser(null);
        return;
      }
  
      const response = await authAPI.getProfile();
      setCurrentUser(response.data);
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    checkAuthStatus();
  }, []);

  if (!isMounted) {
    return <div className="w-full h-20 bg-[#1b221b]" />;
  }

  const addNotification = (message: string, type: 'success' | 'error') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeNotification(id), 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  const navItems = [
    { id: 1, text: "О нас", href: "#team" },
    { id: 2, text: "Портфолио", href: "#portfolio" },
    { id: 3, text: "Услуги", href: "#services" },
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeAllModals();
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeAllModals();
  };

  const toggleProfile = () => {
    setIsProfileOpen(prev => !prev);
    setIsDropdownOpen(false);
  };

  const closeAllModals = () => {
    setIsDropdownOpen(false);
    setIsProfileOpen(false);
    setShowAuthModal(false);
    setShowRegModal(false);
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    setCurrentUser(null);
    setIsProfileOpen(false);
    addNotification('Вы вышли из системы', 'success');
  };
  
  const handleAuthSuccess = () => {
    checkAuthStatus();
    addNotification('Вы успешно авторизовались!', 'success');
  };

  const handleRegSuccess = () => {
    checkAuthStatus();
    addNotification('Вы успешно зарегистрировались!', 'success');
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
              >
                <User className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <NotificationsContainer 
        notifications={notifications} 
        onRemove={removeNotification} 
      />

      {(isProfileOpen || showAuthModal || showRegModal) && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeAllModals}
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
          
          {currentUser ? (
            <>
              <div 
                className="flex items-center mb-12 cursor-pointer"
                onClick={() => {
                  addNotification('Раздел "Мои заказы" в разработке', 'success');
                  setIsProfileOpen(false);
                }}
              >
                <img 
                  src='/bag-2.svg'
                  alt="Мои заказы"
                  className="w-10 h-10 mr-8"
                />
                <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                  Мои заказы
                </span>
              </div>
              
              <Link href="/svasi" passHref>
                <div className="flex items-center mb-12 cursor-pointer">
                  <img 
                    src='/message-notif.svg'
                    alt="Связаться"
                    className="w-10 h-10 mr-8"
                  />
                  <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                    Связаться
                  </span>
                </div>
              </Link>
              
              <div className="flex items-center cursor-pointer" onClick={handleLogout}>
                <img 
                  src='/logout.svg'
                  alt="Выйти"
                  className="w-10 h-10 mr-8"
                />
                <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                  Выйти
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center mb-12 cursor-pointer" onClick={() => setShowAuthModal(true)}>
                <img 
                  src='/user-tick.svg' 
                  alt="авторизация" 
                  className="w-10 h-10 mr-8" 
                />
                <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                  авторизироватся
                </span>
              </div>
              
              <div className="flex items-center mb-12 cursor-pointer" onClick={() => setShowRegModal(true)}>
                <img 
                  src='/user-add.svg'
                  alt="Регистрация" 
                  className="w-10 h-10 mr-8" 
                />
                <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                  Регистрация
                </span>
              </div>
              
              <Link href="/svasi" passHref>
                <div className="flex items-center cursor-pointer">
                  <img 
                    src='/message-notif.svg' 
                    alt="Связаться" 
                    className="w-10 h-10 mr-8" 
                  />
                  <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                    Связаться
                  </span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>

      {showAuthModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <AuthModal 
            onClose={() => setShowAuthModal(false)}
            onSuccess={handleAuthSuccess}
            onSwitchToRegister={() => {
              setShowAuthModal(false);
              setShowRegModal(true);
            }}
          />
        </div>
      )}

      {showRegModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <RegisterModal 
            onClose={() => setShowRegModal(false)}
            onSuccess={handleRegSuccess}
            onSwitchToLogin={() => {
              setShowRegModal(false);
              setShowAuthModal(true);
            }}
          />
        </div>
      )}
    </>
  );
}