'use client';
import React from "react";
import { Notification } from "./Notification";

type NotificationType = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

type NotificationsContainerProps = {
  notifications: NotificationType[];
  onRemove: (id: number) => void;
};

export const NotificationsContainer = ({ notifications, onRemove }: NotificationsContainerProps) => {
  return (
    <div className="fixed top-4 right-4 z-[60] space-y-2">
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};