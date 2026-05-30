"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function ParticleField() {
  const ref = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  // Rotate particles slowly
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={1} 
        fade 
        speed={1} 
        // @ts-expect-error color prop is not in StarsProps but might work runtime
        color={theme === 'light' ? "#d90429" : "#ffffff"} 
      />
    </group>
  );
}

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
