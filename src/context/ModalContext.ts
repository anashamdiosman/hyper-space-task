import { ModalContextType } from "@/types/types";
import React from "react";

const ModalContext = React.createContext<ModalContextType>({
  state: { isOpen: false },
  dispatch: () => undefined, // Placeholder function
});

export default ModalContext;
