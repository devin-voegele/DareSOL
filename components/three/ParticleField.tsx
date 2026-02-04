"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uScrollProgress;
  attribute float aScale;
  attribute float aRandomness;
  varying vec3 vColor;
  
  void main() {
    vec3 pos = position;
    
    // Animate based on time and scroll
    float wave = sin(pos.x * 0.5 + uTime * 0.5) * cos(pos.z * 0.5 + uTime * 0.3);
    pos.y += wave * 0.5 * aRandomness;
    pos.x += sin(uTime * 0.2 + aRandomness * 10.0) * 0.3;
    pos.z += cos(uTime * 0.15 + aRandomness * 8.0) * 0.3;
    
    // Scroll parallax effect
    pos.y -= uScrollProgress * 5.0 * aRandomness;
    
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
    gl_PointSize = aScale * 50.0 * (1.0 / -viewPosition.z);
    
    // Color gradient based on position
    float colorMix = (pos.y + 5.0) / 10.0;
    vColor = mix(vec3(0.2, 0.4, 0.8), vec3(0.1, 0.2, 0.5), colorMix);
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  
  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / distanceToCenter - 0.1;
    strength = clamp(strength, 0.0, 1.0);
    
    gl_FragColor = vec4(vColor, strength);
  }
`;

interface ParticleFieldProps {
  count?: number;
  scrollProgress?: number;
}

export default function ParticleField({ count = 2000, scrollProgress = 0 }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, scales, randomness } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const randomness = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 10;

      scales[i] = Math.random() * 0.5 + 0.5;
      randomness[i] = Math.random();
    }

    return { positions, scales, randomness };
  }, [count]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScrollProgress.value = scrollProgress;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geo.setAttribute("aRandomness", new THREE.BufferAttribute(randomness, 1));
    return geo;
  }, [positions, scales, randomness]);

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uScrollProgress: { value: 0 },
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
