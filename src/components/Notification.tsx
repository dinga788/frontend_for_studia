'use client';
import React from "react";
import { X } from "lucide-react";

type NotificationType = 'success' | 'error';

type NotificationProps = {
  id: number;
  message: string;
  type: NotificationType;
  onRemove: (id: number) => void;
};

export const Notification = ({ id, message, type, onRemove }: NotificationProps) => {
  return (
    <div 
      className={`px-6 py-4 rounded-md shadow-lg flex items-center justify-between ${
        type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      }`}
    >
      <span>{message}</span>
      <button 
        onClick={() => onRemove(id)}
        className="ml-4 text-white hover:text-gray-200"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};