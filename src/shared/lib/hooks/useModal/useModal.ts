import {
  MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay?: number
}

export const useModal = (props: UseModalProps) => {
  const {
    onClose,
    isOpen,
    animationDelay,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timeRef.current);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
