import { useAppDispatch } from '../hooks';
import { ModalInput, modalSlice } from '../slices';

export interface ModalShowerProps {
  modalInput: ModalInput;
  label: string;
}

export const ModalShower = ({ modalInput, label }: ModalShowerProps) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(modalSlice.actions.modalOpened({ modalInput }))}
      className="text-kb-black dark:text-white"
    >
      {label}
    </button>
  );
};
