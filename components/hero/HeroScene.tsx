"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlassShard({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.35, 0), []);

  useFrame((_, delta) => {
    if (!mesh.current || !mouse.current) return;
    const t = Math.min(delta, 0.05);
    mesh.current.rotation.x += (mouse.current.y * 0.45 - mesh.current.rotation.x) * t * 2.2;
    mesh.current.rotation.y += (mouse.current.x * 0.55 - mesh.current.rotation.y) * t * 2.2;
    mesh.current.rotation.z += t * 0.12;
  });

  return (
    <mesh ref={mesh} geometry={geo} scale={1.2}>
      <meshPhysicalMaterial
        color="#d8fff8"
        metalness={0.05}
        roughness={0.12}
        transmission={0.88}
        thickness={1.1}
        ior={1.45}
        transparent
        opacity={0.95}
        envMapIntensity={0.6}
      />
    </mesh>
  );
}

type HeroSceneProps = {
  mouse: React.RefObject<{ x: number; y: number }>;
};

export function HeroScene({ mouse }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
      }}
      frameloop="always"
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 3, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.9} color="#7B2CBF" />
      <pointLight position={[2, 2, -1]} intensity={0.7} color="#00F5D4" />
      <GlassShard mouse={mouse} />
    </Canvas>
  );
}
