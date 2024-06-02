import ModalContext from "@/context/ModalContext";
import { ModalContextType } from "@/types/types";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const Section = (props: any) => {
  return (
    <section
      className={`h-[90vh] flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

const Content = () => {
  const { state, dispatch } = useContext<ModalContextType>(ModalContext);
  const router = useRouter();

  const scroll = useScroll();
  const [showFirstSection, setShowFirstSection] = useState(1);
  const [showSecondSection, setShowSecondSection] = useState(1);
  const [showLastSection, setShowLastSection] = useState(1);

  useFrame(() => {
    setShowFirstSection(1 - scroll.range(0, 0.05));
    setShowSecondSection(scroll.range(0, 0.005));
    setShowLastSection(scroll.range(0.3, 0.45));
  });

  // console.log(opacityFirstSection, opacitySecondSection, opacityLastSection);

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={showFirstSection}>
          <h1 className="monoFont text-4xl font-bold tracking-wider">
            Hyper-space
          </h1>
          <div className="py-2">
            <p className="text-xl openSansFont">
              Physical parks for a digital world
            </p>
          </div>
          <div className="pt-2">
            <button
              className="border-[#DF6F61] border-2 rounded-md py-2 px-4  tracking-wider"
              onClick={() => {
                dispatch({ type: "OPEN_MODAL" });
              }}
            >
              Click To View
            </button>
          </div>
        </Section>
        <Section opacity={showSecondSection}>
          <h1 className="text-4xl tracking-wider">PROJECTS</h1>

          <p className="text-gray-500 text-2xl my-2">AYA universe</p>
          <p className="text-gray-500 text-2xl my-2">House Of Hype</p>

          <div className="pt-2 ">
            <button
              className="border-[#7FB776] border-2 rounded-md py-2 px-4 tracking-wider"
              onClick={() => router?.push("/playground")}
            >
              And More
            </button>
          </div>
        </Section>
        <Section opacity={showLastSection}>
          <h1 className="text-4xl tracking-wider">ABOUT</h1>
          <p className="text-gray-500 text-2xl my-2">
            The adventure began in late 2020 when three leaders from the
            experience design, technology and art worlds decided it was high
            time to shake up the entertainment attractions industry.
          </p>
        </Section>
      </div>
    </Scroll>
  );
};

export default Content;
