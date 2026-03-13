"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";

function PracticeModel() {
  const scene = useFBX("/models/Practice01.fbx");
  return <primitive object={scene} scale={0.01} />;
}

export function Models3DClient() {
  return (
    <div className="px-6 py-10">
      <section className="container mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Modelos 3D – Test
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Aquí estamos probando el modelo `Practice01.fbx`. Podés rotarlo,
            hacer zoom y orbitar alrededor para comprobar que todo funciona
            antes de montar una galería real.
          </p>
        </header>

        <div className="mt-4 h-[480px] overflow-hidden rounded-3xl border border-border bg-card">
          <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
            <color attach="background" args={["#1A1625"]} />
            <ambientLight intensity={0.7} />
            <directionalLight
              intensity={1}
              position={[5, 5, 5]}
              castShadow
            />
            <Suspense
              fallback={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#7B68C4" />
                </mesh>
              }
            >
              <PracticeModel />
            </Suspense>
            <OrbitControls
              enablePan
              enableZoom
              enableRotate
              makeDefault
            />
          </Canvas>
        </div>

        <p className="text-xs text-muted-foreground">
          Tip: usa el ratón para rotar (click y arrastrar), la rueda para hacer
          zoom y click derecho para desplazar la cámara.
        </p>
      </section>
    </div>
  );
}

