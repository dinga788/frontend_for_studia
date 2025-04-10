'use client';
import { User, ChevronDown, ChevronUp, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { authAPI } from '@/services/api.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  emailOrPhone: string;
  password: string;
  confirmPassword: string;
};

type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

type Notification = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

export default function Navigation() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: ''
  });

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

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };
  
  const closeRegModal = () => {
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
  
  const handleAuthClick = () => {
    setShowAuthModal(true);
    setShowRegModal(false);
    setIsProfileOpen(false);
  };
  
  const handleRegClick = () => {
    setShowRegModal(true);
    setShowAuthModal(false);
    setIsProfileOpen(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      addNotification('Пароли не совпадают', 'error');
      return;
    }
  
    try {
      const response = await authAPI.register({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phone,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      
      localStorage.setItem('token', response.data.token);
      setCurrentUser(response.data.user);
      addNotification('Вы успешно зарегистрировались!', 'success');
      closeRegModal();
      setIsProfileOpen(false);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Ошибка регистрации';
      addNotification(errorMessage, 'error');
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isEmail = formData.emailOrPhone.includes('@');
      const login = isEmail ? formData.emailOrPhone : formData.emailOrPhone.replace(/\D/g, '');
      const response = await authAPI.login(login, formData.password);
      
      localStorage.setItem('token', response.data.token);
      setCurrentUser(response.data.user);
      addNotification('Вы успешно авторизовались!', 'success');
      closeAuthModal();
      setIsProfileOpen(false);
    } catch (error) {
      addNotification('Ошибка авторизации', 'error');
    }
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

              {currentUser ? (
                <div className="flex items-center ml-[48px]">
                  <button 
                    onClick={toggleProfile}
                    className="text-[#dca844] hover:text-yellow-300 transition-colors"
                  >
                    <User className="w-10 h-10" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={toggleProfile}
                  className="ml-[48px] text-[#dca844] hover:text-yellow-300 transition-colors"
                >
                  <User className="w-10 h-10" />
                </button>
              )}
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

      {/* Уведомления */}
      <div className="fixed top-4 right-4 z-[60] space-y-2">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className={`px-6 py-4 rounded-md shadow-lg flex items-center justify-between ${
              notification.type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}
          >
            <span>{notification.message}</span>
            <button 
              onClick={() => removeNotification(notification.id)}
              className="ml-4 text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {(isProfileOpen || showAuthModal || showRegModal) && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => {
            setIsProfileOpen(false);
            setShowAuthModal(false);
            setShowRegModal(false);
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
              
              <div className="flex items-center mb-12 cursor-pointer" onClick={handleRegClick}>
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
          <div className="relative w-[637px] h-[810px] bg-[#1b221b] rounded-md">
            <img
              className="absolute w-[327px] h-[51px] top-[100px] left-[155px]"
              alt="Union"
              src="/полоски_под_заголовком.svg"
            />

            <div className="w-[261px] top-[45px] left-[187px] [-webkit-text-stroke:1px_#dca844] text-[#dca844] text-[40px] text-center absolute [font-family:'Istok_Web-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              Авторизация
            </div>

            <form onSubmit={handleAuthSubmit} className="w-full h-full">
              <div className="absolute w-[558px] h-[42px] top-[234px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  placeholder="Телефон или E-mail"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[301px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Пароль"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[300px] h-[60px] top-[700px] left-[168px] rounded-md">
                <PrimaryButton type="submit">
                    Авторизироваться
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

      {showRegModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-[637px] h-[810px] bg-[#1b221b] rounded-md">
            <img
              className="absolute w-[327px] h-[51px] top-[100px] left-[155px]"
              alt="Union"
              src="/полоски_под_заголовком.svg"
            />

            <div className="w-[261px] top-[45px] left-[187px] [-webkit-text-stroke:1px_#dca844] text-[#dca844] text-[40px] text-center absolute [font-family:'Istok_Web-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              Регистрация
            </div>

            <form onSubmit={handleRegSubmit} className="w-full h-full">
              <div className="absolute w-[558px] h-[42px] top-[234px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[301px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Ваша фамилия"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[368px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Телефон"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[435px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[547px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Придумайте пароль"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[558px] h-[42px] top-[614px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Повторите пароль"
                  className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
                  required
                />
              </div>

              <div className="absolute w-[300px] h-[60px] top-[700px] left-[168px] rounded-md">
                <PrimaryButton type="submit">
                  Зарегистрироваться
                </PrimaryButton>
              </div>

              <button 
                type="button"
                onClick={closeRegModal}
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