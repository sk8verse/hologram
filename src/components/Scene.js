import React, { createRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Board from "./Board"
import SceneContext from "./SceneContext"
import Rotation from "./Rotation"

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"

export const Scene = ({
  controls,
  scale = [0.07, 0.07, 0.07],
  position = [0, 0, 0],
  sprite,
  camera,
  lightingAmbient,
  lightingPoint,
  rotate = true,
}) => {
  const cameraRef = createRef()

  return (
    <Canvas shadowMap style={{ width: "100%", height: "100%" }} dispose={null}>
      <ambientLight intensity={0.5} {...lightingAmbient} dispose={null} />
      <SceneContext.Provider
        value={{
          sprite: sprite || {},
          scale,
          camera,
          rotate,
          position,
        }}
      >
        <pointLight
          intensity={0.5}
          position={[0, 2, 10]}
          penumbra={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          {...lightingPoint}
        />

        <PerspectiveCamera ref={cameraRef} position={[0, 0, 0]} {...camera} />

        {controls && <OrbitControls camera={cameraRef.current} enableZoom />}

        <Suspense fallback={null}>
          <Rotation>
            <Board />
          </Rotation>

          <Environment
            background={false}
            files={["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]}
            path="https://sk8verse.sfo3.cdn.digitaloceanspaces.com/environment/"
          />
        </Suspense>
      </SceneContext.Provider>
    </Canvas>
  )
}

export default Scene
