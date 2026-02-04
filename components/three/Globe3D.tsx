"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function GlobeCore() {
  const globeRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate globe points
  const globePoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 2000;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = 2 * Math.cos(theta) * Math.sin(phi);
      const y = 2 * Math.sin(theta) * Math.sin(phi);
      const z = 2 * Math.cos(phi);

      points.push(new THREE.Vector3(x, y, z));
    }

    return points;
  }, []);

  // Generate connection arcs
  const arcs = useMemo(() => {
    const connections = [
      { start: [1, 0.5, 1.5], end: [-1.5, 0.8, 0.8] },
      { start: [0.5, 1.2, 1.2], end: [1.8, -0.5, 0.5] },
      { start: [-1, -0.8, 1.5], end: [1, 1, 1] },
      { start: [1.5, 0, 1], end: [-0.5, -1.5, 1] },
    ];

    return connections.map((conn) => {
      const start = new THREE.Vector3(...(conn.start as [number, number, number]));
      const end = new THREE.Vector3(...(conn.end as [number, number, number]));
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(3);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      return curve.getPoints(50);
    });
  }, []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Main Globe Sphere */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a1628"
          transparent
          opacity={0.8}
          wireframe={false}
        />
      </Sphere>

      {/* Globe Wireframe */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
      </Sphere>

      {/* Globe Points */}
      <points ref={pointsRef} geometry={useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(
          new Float32Array(globePoints.flatMap((p) => [p.x, p.y, p.z])),
          3
        ));
        return geo;
      }, [globePoints])}>
        <pointsMaterial color="#3b82f6" size={0.02} transparent opacity={0.6} />
      </points>

      {/* Orbital Rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.8, 0.01, 16, 100]} />
          <meshBasicMaterial color="#1e40af" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 4, -Math.PI / 3, 0]}>
          <torusGeometry args={[3.1, 0.01, 16, 100]} />
          <meshBasicMaterial color="#2563eb" transparent opacity={0.15} />
        </mesh>
      </group>

      {/* Connection Arcs */}
      {arcs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={i % 2 === 0 ? "#3b82f6" : "#1e40af"}
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}

      {/* Hotspot Points */}
      {[
        { pos: [1, 0.5, 1.5], color: "#3b82f6" },
        { pos: [-1.5, 0.8, 0.8], color: "#1e40af" },
        { pos: [0.5, 1.2, 1.2], color: "#2563eb" },
        { pos: [1.8, -0.5, 0.5], color: "#1e3a8a" },
        { pos: [-1, -0.8, 1.5], color: "#3b82f6" },
        { pos: [1, 1, 1], color: "#1e40af" },
      ].map((hotspot, i) => (
        <mesh key={i} position={hotspot.pos as [number, number, number]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={hotspot.color} />
        </mesh>
      ))}

      {/* Ambient and Point Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e40af" />
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <GlobeCore />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
}
