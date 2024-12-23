'use client';

import { JSX, useEffect, useState } from 'react';

import styles from './toast.module.css';

interface ToastProps {
  message: JSX.Element;
  isVisible: boolean;
}

export const Toast = ({ message, isVisible }: ToastProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`${styles.toast} ${isVisible ? styles.visible : ''}`}>
      {message}
    </div>
  );
};
