import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void, deps: unknown[]) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line
  }, deps);
};
