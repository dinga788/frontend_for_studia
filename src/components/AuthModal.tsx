'use client';
import React, { useState } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { authAPI } from '@/services/api.service';

type AuthModalProps = {
  onClose: () => void;
  onSuccess: () => void;
  showRegisterLink?: boolean;
  onSwitchToRegister?: () => void;
};

export const AuthModal = ({
  onClose,
  onSuccess,
  showRegisterLink = true,
  onSwitchToRegister
}: AuthModalProps) => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const isEmail = formData.emailOrPhone.includes('@');
      const login = isEmail ? formData.emailOrPhone : formData.emailOrPhone.replace(/\D/g, '');
      const response = await authAPI.login(login, formData.password);
      
      if (!response.data || !response.data.token) {
        throw new Error('Неверные учетные данные');
      }
      
      localStorage.setItem('token', response.data.token);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Auth failed:', error);
      setError('Неверный email/телефон или пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[637px] h-[810px] bg-[#1b221b] rounded-md">
      <img
        className="absolute w-[327px] h-[51px] top-[100px] left-[155px]"
        alt="Union"
        src="/полоски_под_заголовком.svg"
      />

      <div className="w-[261px] top-[45px] left-[187px] [-webkit-text-stroke:1px_#dca844] text-[#dca844] text-[40px] text-center absolute [font-family:'Istok_Web-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
        Авторизация
      </div>

      <form onSubmit={handleSubmit} className="w-full h-full">
        <div className="absolute w-[558px] h-[42px] top-[234px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleInputChange}
            placeholder="Телефон или E-mail"
            className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
            required
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        {error && (
          <div className="absolute w-[558px] top-[370px] left-1/2 transform -translate-x-1/2 text-red-500 text-center">
            {error}
          </div>
        )}

        {showRegisterLink && onSwitchToRegister && (
          <div className="absolute w-[558px] top-[400px] left-1/2 transform -translate-x-1/2 text-center">
            <button 
              type="button"
              onClick={onSwitchToRegister}
              className="text-[#dca844] hover:text-yellow-300 underline font-['Istok_Web-Regular',Helvetica]"
            >
              Нет аккаунта? Зарегистрироваться
            </button>
          </div>
        )}

        <div className="absolute w-[300px] h-[60px] top-[700px] left-[168px] rounded-md">
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Авторизироваться'}
          </PrimaryButton>
        </div>

        <button 
          type="button"
          onClick={onClose}
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
  );
};