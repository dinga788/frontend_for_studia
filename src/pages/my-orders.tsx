import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import { authAPI, ordersAPI } from '@/services/api.service';
import { X } from "lucide-react";
import { NotificationContext } from '@/context/NotificationContext';

interface Order {
  id: number;
  service: {
    title: string;
    price: number;
    image: string;
  };
  orderDate: string;
  deadline: string;
  status: string;
  paymentStatus: string;
}

const MyOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { addNotification } = useContext(NotificationContext);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/');
          return;
        }

        const userResponse = await authAPI.getProfile();
        setCurrentUser(userResponse.data);
        
        // Запрос к API для получения заказов
        const ordersResponse = await ordersAPI.getUserOrders(userResponse.data.id);
        setOrders(ordersResponse.data);
        
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        addNotification('Ошибка при загрузке заказов', 'error');
        router.push('/');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserOrders();
  }, [router, addNotification]);

  if (isLoading) {
    return (
      <div className="w-[1920px] h-[1080px] bg-[#1b221b] flex items-center justify-center">
        <div className="text-[#dca844] text-[40px]">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="w-[1920px] h-[1080px]">
      <div className="fixed w-[1922px] h-[1080px] top-0 left-0">
        <div className="relative w-[1920px] h-[1080px] bg-[#1b221b]">
          <div className="absolute w-[244px] top-[133px] left-[99px] [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] text-[40px] text-center tracking-[0] leading-[normal]">
            Ваши заказы
          </div>

          <button 
            onClick={() => router.push('/')}
            className="absolute top-5 right-5 text-[#dca844] hover:text-yellow-300 transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="absolute w-[1720px] h-[800px] top-[200px] left-[100px] overflow-y-auto">
            {orders.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[#dca844] text-[30px]">У вас пока нет заказов</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-8">
                {orders.map((order) => (
                  <div key={order.id} className="relative w-[800px] h-[336px]">
                    <div className="absolute w-[427px] h-[336px] top-0 left-[373px] bg-[#00000080] rounded-md" />

                    <img
                      className="absolute w-[373px] h-[336px] top-0 left-0 object-cover rounded-md"
                      alt="Service"
                      src={order.service.image}
                    />

                    <div className="absolute w-[348px] h-[276px] top-[30px] left-[403px]">
                      <div className="w-[313px] -top-px -left-px [-webkit-text-stroke:1px_#dca844] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-[#dca844] whitespace-nowrap absolute text-[25px] tracking-[0] leading-[normal]">
                        {order.service.title}
                      </div>

                      <div className="absolute w-[354px] h-[196px] top-20 left-0">
                        <div className="w-[180px] top-0 left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] absolute text-[25px] tracking-[0] leading-[normal]">
                          Цена: {order.service.price.toLocaleString('ru-RU')}р.
                        </div>

                        <div className="w-[298px] top-[54px] absolute left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px] tracking-[0] leading-[normal]">
                          Дата заказа: {order.orderDate}
                        </div>

                        <div className="w-[346px] top-[108px] absolute left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#dca844] text-[25px] tracking-[0] leading-[normal]">
                          Дата окончания: {order.deadline}
                        </div>

                        <p className="w-[211px] top-[162px] left-0 [font-family:'Istok_Web-Bold',Helvetica] font-bold text-transparent absolute text-[25px] tracking-[0] leading-[normal]">
                          <span className="text-[#dca844]">Статус: </span>
                          <span className={order.status === "Завершен" ? "text-[#a6c63c]" : "text-[#dca844]"}>
                            {order.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;