'use client';
import React, { useState } from "react";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { authAPI } from '@/services/api.service';

type RegisterModalProps = {
  onClose: () => void;
  onSuccess: () => void;
  showLoginLink?: boolean;
  onSwitchToLogin?: () => void;
};

export const RegisterModal = ({
  onClose,
  onSuccess,
  showLoginLink = true,
  onSwitchToLogin
}: RegisterModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
  
    try {
      setLoading(true);
      const response = await authAPI.register({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phone,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      
      localStorage.setItem('token', response.data.token);
      onSuccess();
      onClose();
    } catch (error: any) {
      console.error('Registration failed:', error);
      const errorMessage = error.response?.data?.message || 'Ошибка регистрации';
      setError(errorMessage);
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
        Регистрация
      </div>

      <form onSubmit={handleSubmit} className="w-full h-full">
        <div className="absolute w-[558px] h-[42px] top-[234px] left-1/2 transform -translate-x-1/2 rounded-md border-[5px] border-solid border-[#dca844]">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Ваше имя"
            className="w-full h-full bg-transparent px-4 font-['Istok_Web-Regular',Helvetica] font-normal text-[#b58a36] text-xl focus:outline-none placeholder-[#b58a36]"
            required
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        {error && (
          <div className="absolute w-[558px] top-[670px] left-1/2 transform -translate-x-1/2 text-red-500 text-center">
            {error}
          </div>
        )}

        {showLoginLink && onSwitchToLogin && (
          <div className="absolute w-[558px] top-[500px] left-1/2 transform -translate-x-1/2 text-center">
            <button 
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#dca844] hover:text-yellow-300 underline font-['Istok_Web-Regular',Helvetica]"
            >
              Уже есть аккаунт? Войти
            </button>
          </div>
        )}

        <div className="absolute w-[300px] h-[60px] top-[700px] left-[168px] rounded-md">
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Зарегистрироваться'}
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