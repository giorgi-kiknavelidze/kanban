import { ModalInput } from './modal-inputs.types';

export interface OpenModalPayload {
  modalInput: ModalInput;
}

export interface CloseModalPayload {
  modalType: string;
}
