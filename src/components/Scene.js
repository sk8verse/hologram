import React, { createRef, Suspense, createContext, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Board from "./Board"
import SceneContext from "./SceneContext"
import { boards } from "."

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"

export const DEFAULTS = {
  DECK: { texture: "", metalness: 0, roughness: 0.85 },
  TRUCKS: { texture: "", metalness: 1, roughness: 0.2, color: 0xcccccc },
  WHEELS: { texture: "", metalness: 0, roughness: 0.85, color: 0xe3d4ab },
  BEARINGS: { texture: "", metalness: 1, roughness: 0, color: 0x999999 },
  RIM: { texture: "", metalness: 0, roughness: 0.85 },
}

export const DEFAULT = {
  lighting: {
    ambient: {
      intensity: 0.1,
    },
    point: {
      intensity: 0.5,
      position: [0, 2, 10],
      penumbra: 1,
      width: 512,
      height: 512,
    },
  },
  camera: {
    position: [0, 5, 5],
  },
  objects: {
    rim: DEFAULTS.RIM,
    deck: DEFAULTS.DECK,
  },
}

export const Scene = ({
  controls,
  texture,
  scale,
  objects,
  camera,
  ambientLight,
  pointLight,
}) => {
  const cameraRef = createRef()

  return (
    <SceneContext.Provider
      value={{ objects, ambientLight, pointLight, scale, camera }}
    >
      <Canvas
        shadowMap
        style={{ width: "100%", height: "100%" }}
        dispose={null}
      >
        <ambientLight intensity={ambientLight.intensity} dispose={null} />

        <pointLight
          intenstity={pointLight.intensity}
          position={pointLight.position}
          penumbra={pointLight.penumbra}
          castShadow
          shadow-mapSize-height={pointLight.height}
          shadow-mapSize-width={pointLight.width}
        />

        <PerspectiveCamera ref={cameraRef} position={camera.position} />

        {controls && <OrbitControls camera={cameraRef.current} enableZoom />}

        <Suspense fallback={null}>
          <Board />

          <Environment
            background={false}
            files={["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]}
            path="https://sk8verse.xyz/viewer/environment/"
          />
        </Suspense>
      </Canvas>
    </SceneContext.Provider>
  )
}

export default Scene
