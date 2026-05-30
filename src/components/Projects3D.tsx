"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, Text, Html } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const projectsData = [
  {
    title: "Startup Connect",
    desc: "A full-stack consultation platform to connect founders with industry advisors.",
    image: "/Startup Connect.jpg",
    github: "https://github.com/VarunRaj060204/Startup-Connect",
  },
  {
    title: "Welth",
    desc: "An AI-powered personal finance platform for smart budgeting.",
    image: "/Welth.jpg",
    github: "https://github.com/VarunRaj060204/Welth--Full-Stack-AI-Finance-platform",
  },
  {
    title: "Bitezy",
    desc: "A modern food ordering and restaurant management platform.",
    image: "/Bitezy.jpg",
    github: "https://github.com/VarunRaj060204/Bitezy-",
  },
  {
    title: "Placement Buddy",
    desc: "An AI-powered mock interview platform designed to help students.",
    image: "/placement buddy.jpg",
    github: "https://github.com/VarunRaj060204/Placement-Buddy",
  },
  {
    title: "Churn Analysis",
    desc: "An end-to-end data science project analyzing customer churn.",
    image: "/Subscription churn analysis.jpg",
    github: "https://github.com/VarunRaj060204/Subscription-churn-Analysis",
  }
];

function CarouselItem({ project, index, total, radius }: { project: any, index: number, total: number, radius: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Calculate position in circle
  const angle = (index / total) * Math.PI * 2;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  // Make the image face outward
  const rotation = [0, angle, 0] as [number, number, number];

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Scale up slightly on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
    }
  });

  return (
    <group position={[x, 0, z]} rotation={rotation}>
      {/* @ts-ignore */}
      <Image
        ref={meshRef}
        url={project.image}
        transparent
        opacity={1}
        scale={[4, 2.5]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      {hovered && (
        <Html position={[0, -1.8, 0]} center transform className="pointer-events-auto">
          <div className="bg-canvas/90 backdrop-blur-md p-4 border border-batman-red rounded-xl w-64 text-center shadow-2xl">
            <h3 className="text-ink font-bold uppercase text-lg mb-2">{project.title}</h3>
            <p className="text-body text-xs mb-4">{project.desc}</p>
            <a href={project.github} target="_blank" rel="noreferrer" className="bg-batman-red text-white px-4 py-2 text-xs font-bold uppercase hover:bg-red-700 transition-colors">
              View Project
            </a>
          </div>
        </Html>
      )}
    </group>
  );
}

function CarouselScene() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const radius = Math.max(5, viewport.width / 2);

  // Slowly rotate the entire carousel
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -radius + 2]}>
      {projectsData.map((project, index) => (
        <CarouselItem 
          key={index} 
          project={project} 
          index={index} 
          total={projectsData.length} 
          radius={radius} 
        />
      ))}
    </group>
  );
}

export default function Projects3D() {
  return (
    <div className="w-full h-screen relative cursor-grab active:cursor-grabbing bg-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <CarouselScene />
      </Canvas>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-body-strong uppercase tracking-[2px] text-sm font-bold animate-pulse">
          Hover over projects to view details
        </p>
      </div>
    </div>
  );
}
