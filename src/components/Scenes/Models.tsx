import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Octahedron, RoundedBox, Torus, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export const SECTION_HEIGHT = 3;
export const NUMBER_OF_SECTIONS = 5;

export function Models(props: any) {
  const [animation, setAnimation] = useState<string>("");
  const ref = useRef<any>();
  const tl = useRef<any>();
  const boxRef = useRef<any>();
  const torRef = useRef<any>();
  const octRef = useRef<any>();

  const scroll = useScroll();

  const { size, camera } = useThree();

  useEffect(() => {
    // Adjust camera position or group position based on the size
    camera.position.z = size.width < 768 ? 10 : 5; // Further away on smaller screens
    if (ref.current) {
      ref.current.position.x = size.width < 768 ? 1 : 2; // Adjust position for smaller screens
    }
  }, [size, camera]);

  // Adjust camera position based on screen size
  // const scale = viewport.width < 350 ? 0.5 : viewport.width < 768 ? 0.5 : 1;

  useFrame(({ clock }) => {
    tl.current.seek(scroll.offset * tl.current.duration());

    if (animation === "box") {
      boxRef.current.rotation.y = Math.sin(clock.elapsedTime) * Math.PI * 0.6;
      boxRef.current.rotation.x = Math.sin(clock.elapsedTime) * Math.PI * 0.6;
    }
    if (animation === "tor") {
      torRef.current.rotation.y = Math.sin(clock.elapsedTime) * Math.PI * 0.6;
      // torRef.current.rotation.x = Math.sin(clock.elapsedTime) * Math.PI * 0.6;
    }
    if (animation === "oct") {
      octRef.current.rotation.y = Math.sin(clock.elapsedTime) * Math.PI * 0.6;
      octRef.current.rotation.x = Math.sin(clock.elapsedTime) * Math.PI * 0.6;
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.position,
      {
        duration: 3,
        y: SECTION_HEIGHT * (NUMBER_OF_SECTIONS - 1),
      },
      0
    );

    tl.current.to(
      boxRef.current.position,
      {
        duration: 0.1,
        z: -3,
        x: 1,
        y: 0.5,
        onStart: () => {
          setAnimation("box");
        },
        onComplete: () => {
          setAnimation("");
        },
      },
      0
    );

    tl.current.to(
      torRef.current.position,
      {
        duration: 0.4,
        onStart: () => {
          setAnimation("tor");
        },
      },
      1
    );

    tl.current.to(
      torRef.current.position,
      {
        duration: 0.4,
        z: -3,
        x: 1,
        y: -8,

        onComplete: () => {
          setAnimation("");
        },
      },
      1.2
    );

    tl.current.to(
      octRef.current.position,
      {
        duration: 0.4,
        onStart: () => {
          setAnimation("tor");
        },
      },
      2.2
    );

    tl.current.to(
      octRef.current.position,
      {
        duration: 0.1,
        z: -3,
        x: 1,
        y: -12,
        onStart: () => {
          setAnimation("oct");
        },
        // onComplete: () => {
        //   setAnimation("");
        // },
      },
      2.6
    );
  }, []);

  return (
    <group {...props} position={[3, 0, 0]} dispose={null} ref={ref}>
      {/* <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} /> */}
      <RoundedBox position={[0, 0.25, 0]} ref={boxRef}>
        <meshMatcapMaterial color={"#f26f66"} />
      </RoundedBox>
      <Torus args={[0.5, 0.125, 16, 100]} position={[0, -8.5, 0]} ref={torRef}>
        <meshMatcapMaterial color={"#a0fa9b"} />
      </Torus>
      <Octahedron position={[0, -12.5, 0]} args={[0.72, 0]} ref={octRef}>
        <meshMatcapMaterial color={"#73c6fa"} />
      </Octahedron>
    </group>
  );
}
