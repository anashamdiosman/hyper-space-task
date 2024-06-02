import {
  Html,
  Octahedron,
  OrbitControls,
  RoundedBox,
  ScrollControls,
  Torus,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import React from "react";

function PlayGroundScene() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ThreeContainer />
    </Canvas>
  );
}

export default PlayGroundScene;

const ThreeContainer = () => {
  const router = useRouter();
  return (
    <>
      <directionalLight
        intensity={0.6}
        position={[-10, 1, 5]}
        color="white"
        castShadow
      />
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} enableRotate={true} />
      <group position={[0, 0, 0]} dispose={null}>
        <RoundedBox position={[-2, 0, 0]}>
          <meshMatcapMaterial color={"#f26f66"} />
        </RoundedBox>
        <Torus args={[0.5, 0.125, 16, 100]} position={[0, 0, 0]}>
          <meshMatcapMaterial color={"#a0fa9b"} />
        </Torus>
        <Octahedron position={[2, -0, 0]} args={[0.72, 0]}>
          <meshMatcapMaterial color={"#73c6fa"} />
        </Octahedron>
      </group>
      <Html fullscreen>
        <div className="w-screen absolute bottom-10 flex justify-center items-center">
          <button
            className="border-[#7FB776] border-2 rounded-md py-2 px-4 w-fit"
            onClick={() => router?.push("/")}
          >
            Home
          </button>
        </div>
      </Html>
    </>
  );
};
