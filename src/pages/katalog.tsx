import React, { useState, useEffect } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { authAPI, ordersAPI } from '@/services/api.service';
import { useRouter } from 'next/router';
import { AuthModal } from '@/components/AuthModal';
import { RegisterModal } from '@/components/RegisterModal';
import { NotificationsContainer } from '@/components/NotificationsContainer';
import { User, X } from "lucide-react";

type FormData = {
  emailOrPhone: string;
  password: string;
};

type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

const KatalogPage = () => {
  const [currentService, setCurrentService] = useState(0);
  const [expandedServices, setExpandedServices] = useState<Record<number, boolean>>({});
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState<{id: number, message: string, type: 'success' | 'error'}[]>([]);
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
    checkAuthStatus();
  }, []);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleOrder = async () => {
    if (currentUser) {
      try {
        // Создаем заказ
        const orderData = {
          userId: currentUser.id,
          serviceId: currentService + 1, // предполагая, что id сервисов начинаются с 1
          workerId: 1, // временно фиксированный workerId
          deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // +14 дней
          status: "В работе"
        };
  
        // Отправляем запрос на создание заказа
        await ordersAPI.createOrder(orderData);
        
        addNotification('Заказ успешно оформлен!', 'success');
        
        // Перенаправляем на страницу заказов
        router.push('/orders');
      } catch (error) {
        console.error('Order creation failed:', error);
        addNotification('Ошибка при оформлении заказа', 'error');
      }
    } else {
      setShowAuthModal(true);
    }
  };

  const handleImageHover = () => {
    setExpandedServices(prev => ({
      ...prev,
      [currentService]: true
    }));
  };

  const addNotification = (message: string, type: 'success' | 'error') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeNotification(id), 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleAuthSuccess = () => {
    checkAuthStatus();
    addNotification('Вы успешно авторизовались!', 'success');
    setShowAuthModal(false);
  };

  const handleRegSuccess = () => {
    checkAuthStatus();
    addNotification('Вы успешно зарегистрировались!', 'success');
    setShowRegModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    setIsProfileOpen(false);
    addNotification('Вы вышли из системы', 'success');
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

        {/* Кнопка профиля */}
        <button 
          onClick={() => setIsProfileOpen(true)}
          className="fixed top-5 right-5 text-[#dca844] hover:text-yellow-300 transition-colors z-50"
        >
          <User className="w-10 h-10" />
        </button>
      </div>

      {/* Профиль пользователя */}
      <div className={`fixed top-0 right-0 h-full w-[477px] bg-[#131613] z-50 transition-transform duration-300 ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button 
            onClick={() => setIsProfileOpen(false)}
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
              <div className="flex items-center mb-12 cursor-pointer" onClick={() => { setIsProfileOpen(false); setShowAuthModal(true); }}>
                <img 
                  src='/user-tick.svg' 
                  alt="авторизация" 
                  className="w-10 h-10 mr-8" 
                />
                <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                  авторизироватся
                </span>
              </div>
              
              <div className="flex items-center mb-12 cursor-pointer" onClick={() => { setIsProfileOpen(false); setShowRegModal(true); }}>
                <img 
                  src='/user-add.svg'
                  alt="Регистрация" 
                  className="w-10 h-10 mr-8" 
                />
                <span className="font-['Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px]">
                  Регистрация
                </span>
              </div>
              
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
            </>
          )}
        </div>
      </div>

      {/* Модальные окна авторизации и регистрации */}
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

      {/* Уведомления */}
      <NotificationsContainer 
        notifications={notifications} 
        onRemove={removeNotification} 
      />

      {/* Затемнение фона */}
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
    </div>
  );
};

export default KatalogPage;