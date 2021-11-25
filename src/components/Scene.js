import React, { createRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Deck from "./Deck"
import { boards } from "."
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"

export const Scene = ({ board, controls, object, texture, scale, objects }) => {
  const myCamera = createRef()

  return (
    <Canvas className="w-full h-full" dispose={null} shadowMap>
      <ambientLight intensity={0.1} dispose={null} />
      <pointLight
        intenstity={0.5}
        position={[0, 2, 10]}
        penumbra={1}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <PerspectiveCamera ref={myCamera} position={[0, 5, 5]} />
      {controls && <OrbitControls camera={myCamera.current} enableZoom />}
      <Suspense fallback={null}>
        <Deck
          position={[0, 0, 0]}
          scale={scale || [0.07, 0.07, 0.07]}
          board={board}
          boards={boards}
          object={object}
          texture={texture}
          objects={objects}
        />
        <Environment
          background={false}
          files={["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]}
          path="https://sk8verse.xyz/viewer/environment/"
        />
      </Suspense>
    </Canvas>
  )
}

export default Scene
