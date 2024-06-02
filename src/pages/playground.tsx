import SvgBlob from "@/components/general/SvgBlob";
import React from "react";
import styles from "@/styles/homePage.module.css";
import GlassScreenPlayGround from "@/components/GlassScreenPlayGround";

function playground() {
  return (
    <div className={`${styles?.mainScreen}`}>
      <SvgBlob
        src="/blobSvgs/green.svg"
        cssClass={styles?.greenBlob}
        name="green-svg"
      />
      <SvgBlob
        src="/blobSvgs/red.svg"
        cssClass={styles?.redBlob}
        name="red-svg"
      />
      <SvgBlob
        src="/blobSvgs/orange.svg"
        cssClass={styles?.orangeBlob}
        name="orange-svg"
      />
      <SvgBlob
        src="/blobSvgs/purple.svg"
        cssClass={styles?.purpleBlob}
        name="purple-svg"
      />
      <GlassScreenPlayGround />
    </div>
  );
}

export default playground;

export async function getServerSideProps() {
  return {
    props: {}, // Pass no data if you don't need to
  };
}
