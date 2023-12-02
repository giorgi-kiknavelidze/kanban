'use client';
import { useState } from 'react';
import { useIsomorphicEffect } from './use-isomorphic-effect';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  useIsomorphicEffect(() => {
    if (typeof window === 'undefined') return;
    const callback = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  });

  return width;
};
