import { useCallback, useEffect, useState } from 'react';
import { LocalStorageService } from '../services';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    setIsDarkMode(LocalStorageService.getItem('dark') === 'true');
  }, [setIsDarkMode]);

  useEffect(() => {
    if (isDarkMode !== undefined) {
      LocalStorageService.setItem('dark', `${isDarkMode}`);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const onLocalStorageChange = () => {
      setIsDarkMode(LocalStorageService.getItem('dark') === 'true');
    };

    LocalStorageService.addEventListener(onLocalStorageChange);

    return () => {
      LocalStorageService.removeEventListener(onLocalStorageChange);
    };
  }, []);

  const toggle = useCallback(
    () => setIsDarkMode((prev) => !prev),
    [setIsDarkMode]
  );
  return { isDarkMode, toggle };
};
