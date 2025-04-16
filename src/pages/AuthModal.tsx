import React, { useState, useEffect } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import axios from 'axios';

const AuthModal = ({ show, onClose, onSuccess }: {
  show: boolean;
  onClose: () => void;
  onSuccess: (user: any) => void;
}) => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Проверяем, email это или телефон
      const isEmail = formData.emailOrPhone.includes('@');
      const loginData = isEmail 
        ? { email: formData.emailOrPhone, password: formData.password }
        : { phone: formData.emailOrPhone.replace(/\D/g, ''), password: formData.password };

      const response = await api.post('/auth/login', loginData);
      
      // Сохраняем токен
      localStorage.setItem('token', response.data.token);
      
      const profileResponse = await api.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${response.data.token}`
        }
      });
      
      setSuccess('Авторизация прошла успешно!');
      setTimeout(() => {
        onSuccess(profileResponse.data);
        onClose();
      }, 1000);
      
    } catch (err: any) {
      console.error('Ошибка авторизации:', err);
      
      let errorMessage = 'Ошибка авторизации';
      if (err.response) {
        if (err.response.status === 401) {
          errorMessage = 'Неверный email/телефон или пароль';
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err.request) {
        errorMessage = 'Нет ответа от сервера. Проверьте подключение к интернету';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-[#1b221b] rounded-lg shadow-xl z-50 overflow-hidden">
        <div className="p-6 text-center relative">
          <h2 className="text-2xl font-bold text-[#dca844] mb-2">
            Авторизация
          </h2>
          <div className="w-full flex justify-center mb-4">
            <img 
              src="/полоски_под_заголовком.svg" 
              alt="Декоративные полоски" 
              className="h-2"
            />
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#dca844] hover:text-yellow-300 transition-colors"
            disabled={loading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-8 pb-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="emailOrPhone" className="block text-[#dca844] mb-2">
                Email или телефон
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                placeholder="Введите email или телефон"
                className="w-full px-4 py-2 bg-transparent border-2 border-[#dca844] rounded-md text-[#b58a36] placeholder-[#b58a36] focus:outline-none focus:ring-2 focus:ring-[#dca844]"
                required
                disabled={loading}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-[#dca844] mb-2">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Введите пароль"
                className="w-full px-4 py-2 bg-transparent border-2 border-[#dca844] rounded-md text-[#b58a36] placeholder-[#b58a36] focus:outline-none focus:ring-2 focus:ring-[#dca844]"
                required
                disabled={loading}
              />
            </div>

            <div className="flex justify-center">
              <PrimaryButton 
                type="submit" 
                disabled={loading}
                className="w-full flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Обработка...
                  </>
                ) : 'Войти'}
              </PrimaryButton>
            </div>
          </form>

          <div className="mt-4 text-center">
            <button 
              type="button" 
              className="text-[#dca844] hover:underline"
              onClick={() => {
                setError('Функция восстановления пароля временно недоступна');
              }}
            >
              Забыли пароль?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;