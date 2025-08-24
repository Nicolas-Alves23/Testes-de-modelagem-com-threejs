"use client"; // se estiver no diretório app/ do Next 13+

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

const MyGLBModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  // Carregando o modelo GLB tipado
  const { scene } = useGLTF("/personagem_menino.glb") as GLTF;

  return <primitive ref={modelRef} object={scene} scale={1} position={[0, 0, 0]} />;
};

// Preload do modelo (opcional, ajuda no carregamento)
useGLTF.preload("/personagem_menino.glb");

const Scene: React.FC = () => {
  return (
    <main className="h-screen">

    <Canvas camera={{ position: [60, 2, 1], fov: 10 }}>
      {/* Luzes */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* Modelo GLB */}
      <MyGLBModel />

      {/* Controle da câmera */}
      <OrbitControls />
    </Canvas>
    </main>
  );
};

export default Scene;
