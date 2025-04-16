'use client';
import React, { useContext } from 'react';
import { NotificationContext } from '@/context/NotificationContext';
import { Notification } from './Notification';

type NotificationType = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

export const NotificationsContainer = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="fixed top-4 right-4 z-[60] space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onRemove={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};