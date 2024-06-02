import styles from "../styles/homePage.module.css";
import SvgBlob from "@/components/general/SvgBlob";
import GlassScreen from "@/components/GlassScreen";
import ModalContext from "@/context/ModalContext";
import modalReducer from "@/reducers/modalReducer";
import { Major_Mono_Display, Open_Sans } from "next/font/google";
import { useReducer } from "react";

const major_mono_init = Major_Mono_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-major_mono_display",
  weight: "400",
});

const open_sans_init = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open_sans",
  weight: "400",
});

export default function Home() {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      <div
        className={`${styles?.mainScreen} ${major_mono_init?.variable} ${open_sans_init?.variable}`}
      >
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
        <GlassScreen />
      </div>
    </ModalContext.Provider>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // Pass no data if you don't need to
  };
}
