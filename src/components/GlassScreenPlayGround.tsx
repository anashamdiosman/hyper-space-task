import React, { useContext } from "react";
import styles from "../styles/homePage.module.css";
import Scene from "./general/Scene";
import Modal from "./general/Modal";
import PlayGroundScene from "./general/PlayGroundScene";

function GlassScreenPlayGround() {
  return (
    <div className={styles?.glassScreen}>
      <PlayGroundScene />
    </div>
  );
}

export default GlassScreenPlayGround;
