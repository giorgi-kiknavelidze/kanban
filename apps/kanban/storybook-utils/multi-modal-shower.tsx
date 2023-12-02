import { ModalShower, ModalShowerProps } from './modal-shower';

export interface MultiModalShowerProps {
  items: ModalShowerProps[];
}

export const MultiModalShower = ({ items }: MultiModalShowerProps) => (
  <div className="flex flex-col">
    {items.map(({ modalInput, label }) => (
      <ModalShower modalInput={modalInput} label={label} key={label} />
    ))}
  </div>
);
