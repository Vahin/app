import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setIsTouchDevice(window.matchMedia('(pointer:coarse)').matches);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTouchDevice;
};
