"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function ParticleField() {
  const ref = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  // Rotate particles slowly and react slightly to mouse position (if we tracked it)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Stars 
        radius={50} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={1} 
        fade 
        speed={1} 
        color={theme === 'light' ? "#d90429" : "#ffffff"} 
      />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
