import React, { useContext } from "react";
import styles from "../styles/homePage.module.css";
import Scene from "./general/Scene";
import Modal from "./general/Modal";
import ModalContext from "@/context/ModalContext";
import { ModalContextType } from "@/types/types";

function GlassScreen() {
  const { state, dispatch } = useContext<ModalContextType>(ModalContext);
  return (
    <div className={styles?.glassScreen}>
      <Scene />
      <Modal
        isOpen={state?.isOpen}
        onClose={() => {
          dispatch({ type: "CLOSE_MODAL" });
        }}
      />
    </div>
  );
}

export default GlassScreen;
