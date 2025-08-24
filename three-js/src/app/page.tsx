"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Personagem_menino from "./Personagem_menino"; // ajuste o caminho se necessário

const Scene: React.FC = () => {
  return (
    <main className="h-screen">
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Modelo convertido pelo gltfjsx */}
        <Personagem_menino scale={1} position={[0, 0, 0]} />

        <OrbitControls />
      </Canvas>
    </main>
  );
};

export default Scene;
