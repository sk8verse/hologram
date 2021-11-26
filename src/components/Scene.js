import React, { createRef, Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import Board from "./Board"
import SceneContext from "./SceneContext"

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"

export const Scene = ({
  controls,
  scale,
  position,
  objects,
  camera,
  ambientLight,
  pointLight,
  rotate = true,
}) => {
  const cameraRef = createRef()
  const meshRotation = useRef()
  const meshAngleRotation = useRef()

  useFrame(({ clock }) => {
    if (!rotate) return
    const elapsedTime = clock.getElapsedTime()
    meshRotation.current.rotation.z = -elapsedTime * 1 + 10
    meshAngleRotation.current.rotation.y = 1
    meshAngleRotation.current.rotation.x = 2
  })

  return (
    <SceneContext.Provider
      value={{ objects, ambientLight, pointLight, scale, camera }}
    >
      <Canvas
        shadowMap
        style={{ width: "100%", height: "100%" }}
        dispose={null}
      >
        <ambientLight {...ambientLight} intenstity={0.1} dispose={null} />

        <pointLight
          intenstity={0.5}
          position={[0, 2, 10]}
          penumbra={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          {...pointLight}
        />

        <PerspectiveCamera ref={cameraRef} position={camera.position} />

        {controls && <OrbitControls camera={cameraRef.current} enableZoom />}

        <Suspense fallback={null}>
          <group ref={meshAngleRotation}>
            <group ref={meshRotation} scale={scale} position={position}>
              <Board />
            </group>
          </group>

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
