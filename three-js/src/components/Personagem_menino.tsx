import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Corpo: THREE.Mesh
    Orelha: THREE.Mesh
    Mãos: THREE.Mesh
    NurbsPath084: THREE.Mesh
  }
  materials: {
    Materiais: THREE.MeshStandardMaterial
    ['Cabelo.001']: THREE.MeshStandardMaterial
  }
}

export function Model(props: React.ComponentProps<'group'>) {
  const { nodes, materials } = useGLTF('/personagem_menino.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.046, -0.168, 0]} scale={[1.037, 1, 1]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Materiais} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Cabelo.001']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Cabelo.001']} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials['Cabelo.001']} />
      </group>
      <mesh geometry={nodes.Corpo.geometry} material={materials.Materiais} position={[-0.01, 2.876, 0]} scale={[1.037, 1, 1]} />
      <mesh geometry={nodes.Orelha.geometry} material={materials.Materiais} position={[0.791, 3.384, 0.074]} rotation={[Math.PI, 0, 0]} />
      <mesh geometry={nodes.Mãos.geometry} material={materials.Materiais} position={[-0.046, -0.927, -0.974]} rotation={[0.004, 0, 0.003]} />
      <mesh geometry={nodes.NurbsPath084.geometry} material={materials['Cabelo.001']} position={[0.472, 3.201, -0.444]} rotation={[0, -1.422, -Math.PI / 2]} scale={-0.061} />
    </group>
  )
}

useGLTF.preload('/personagem_menino.glb')
