import { useState, useCallback, JSX } from "react";

export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState<JSX.Element>();

  const showToast = useCallback((msg: JSX.Element) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return { isVisible, message, showToast };
}
