'use client';
import { Popover } from '@headlessui/react';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import { ReactComponent as ChevronDown } from '../../../assets/ChevronDown.svg';
import { useAppDispatch, useAppSelector, useWindowWidth } from '../../../hooks';
import { BoardList, DarkModeSwitch } from '../../sidebar';
import { popoverSlice } from '../../../slices';
import { boardsSelector, selectedBoardSelector } from '../../../selectors';

interface MobileMenuContentProps {
  open: boolean;
  close: () => void;
}

const MobileMenuContent = ({ open, close }: MobileMenuContentProps) => {
  const dispatch = useAppDispatch();

  const boardListItems = useAppSelector(boardsSelector);
  const selectedBoard = useAppSelector(selectedBoardSelector);

  useEffect(() => {
    if (open) dispatch(popoverSlice.actions.popoverOpened('mobile-menu'));
    else dispatch(popoverSlice.actions.popoverClosed('mobile-menu'));
  }, [open, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(popoverSlice.actions.popoverClosed('mobile-menu'));
    };
  }, [dispatch]);

  const width = useWindowWidth();

  useEffect(() => {
    if (width && width >= 768) close();
  }, [width, close]);

  return (
    <>
      <Popover.Button
        as="div"
        className={clsx('inline-block cursor-pointer', open && 'rotate-180')}
      >
        <ChevronDown />
      </Popover.Button>
      <Popover.Panel
        as="div"
        className="flex flex-col items-stretch gap-4 p-4 rounded-lg absolute top-24 left-14 z-10 w-[16.5rem] bg-white dark:bg-kb-dark-gray"
      >
        <BoardList
          items={boardListItems}
          selectedItemId={selectedBoard?.boardId ?? 0}
        />
        <div className="mx-auto w-full">
          <DarkModeSwitch />
        </div>
      </Popover.Panel>
    </>
  );
};

export const MobileMenu = () => {
  return (
    <Popover as="div" className="inline-block md:hidden">
      {({ open, close }) => <MobileMenuContent open={open} close={close} />}
    </Popover>
  );
};
