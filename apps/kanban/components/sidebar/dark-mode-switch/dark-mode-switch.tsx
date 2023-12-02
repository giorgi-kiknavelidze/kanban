'use client';
import { ReactComponent as DarkModeIcon } from '../../../assets/DarkModeIcon.svg';
import { ReactComponent as LightModeIcon } from '../../../assets/LightModeIcon.svg';
import { useDarkMode } from '../../../hooks';
import { Switch } from '../../design-system';

export const DarkModeSwitch = () => {
  const { toggle, isDarkMode } = useDarkMode();
  return (
    <div className="flex gap-6 items-center justify-around bg-kb-light-bg rounded-md dark:bg-kb-dark-bg px-14 py-3.5 w-[14.6875rem] xl:w-[15.6875rem]">
      <LightModeIcon />
      <Switch value={isDarkMode ? 'right' : 'left'} onChange={() => toggle()} />
      <DarkModeIcon />
    </div>
  );
};
