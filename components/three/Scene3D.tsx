"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import ParticleField from "./ParticleField";
import FloatingCrypto, { CryptoRing, GlowingSphere } from "./FloatingCrypto";

interface Scene3DProps {
  scrollProgress?: number;
}

function SceneContent({ scrollProgress = 0 }: Scene3DProps) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#1e40af" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e3a8a" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
      />

      <ParticleField count={1500} scrollProgress={scrollProgress} />

      <FloatingCrypto
        position={[4, 2, -5]}
        color="#3b82f6"
        scale={0.8}
        speed={0.8}
        distort={0.4}
      />
      <FloatingCrypto
        position={[-5, -1, -8]}
        color="#1e40af"
        scale={1.2}
        speed={0.6}
        distort={0.3}
      />
      <FloatingCrypto
        position={[6, -3, -10]}
        color="#2563eb"
        scale={0.6}
        speed={1}
        distort={0.5}
      />

      <CryptoRing position={[0, 0, -15]} color="#3b82f6" scale={2} />
      <CryptoRing position={[-3, 2, -12]} color="#1e40af" scale={1} />

      <GlowingSphere position={[-6, 3, -6]} color="#2563eb" scale={0.5} />
      <GlowingSphere position={[5, -2, -7]} color="#1e3a8a" scale={0.7} />

      <Environment preset="night" />
      <Preload all />
    </>
  );
}

export default function Scene3D({ scrollProgress = 0 }: Scene3DProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneContent scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
