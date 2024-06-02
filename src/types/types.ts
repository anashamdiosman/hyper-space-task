import { Dispatch } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalState {
  isOpen: boolean;
}

export type ModalAction = { type: "OPEN_MODAL" } | { type: "CLOSE_MODAL" };

export interface ModalContextType {
  state: ModalState;
  dispatch: Dispatch<ModalAction>;
}
