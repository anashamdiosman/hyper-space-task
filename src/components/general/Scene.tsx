import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Models } from "../Scenes/Models";
import Content from "./Content";

function Scene() {
  return (
    <Canvas
      camera={{
        fov: 60,
        position: [2, 1, 5],
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ThreeContainer />
    </Canvas>
  );
}

export default Scene;

const ThreeContainer = () => {
  return (
    <>
      <directionalLight
        intensity={0.6}
        position={[-10, 1, 5]}
        color="white"
        castShadow
      />
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Models />
        <Content />
      </ScrollControls>
    </>
  );
};
