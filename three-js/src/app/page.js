"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Personagem_menino";

export default function Scene() {
  return (
    <main className="h-screen">
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Model scale={0.8} position={[0, -1.9, 0]} />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
