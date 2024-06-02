import { ModalState, ModalAction } from "@/types/types";

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    default:
      return { ...state, isOpen: false };
  }
}

export default modalReducer;
