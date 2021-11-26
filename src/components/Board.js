import React, { useContext, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import SceneContext from "./SceneContext"
import Deck from "./Deck"

const Board = () => {
  const { objects, scale, position } = useContext(SceneContext)

  const { nodes } = useGLTF(
    "https://sk8verse.s3.us-west-1.amazonaws.com/sk8board.gltf"
  )

  const meshRotation = useRef()
  const meshAngleRotation = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    meshRotation.current.rotation.z = -elapsedTime * 1 + 10
    meshAngleRotation.current.rotation.y = 1
    meshAngleRotation.current.rotation.x = 2
  })

  const geo = key => nodes[key].geometry
  const hasObject = key => Object.keys(objects).includes(key)
  const getGeometry = key => nodes[key].geometry

  return (
    <group ref={meshAngleRotation}>
      <group ref={meshRotation} scale={scale} position={position}>
        {hasObject("deck") && <Deck getGeometry={getGeometry} />}

        <group position={[0, -10, 0]}>
          {hasObject("wheels") && (
            <mesh castShadow receiveShadow geometry={geo("wheels")}>
              <meshStandardMaterial
                metalness={0}
                roughness={0.85}
                // map={deckTexture}
                attach="material"
                key="metal"
                toneMapped={false}
                color={0xe3d4ab}
              />
            </mesh>
          )}

          {hasObject("bearings") && (
            <mesh castShadow receiveShadow geometry={geo("bearings")}>
              <meshStandardMaterial
                metalness={1}
                roughness={0}
                // map={deckTexture}
                attach="material"
                key="metal"
                toneMapped={false}
                color={0x999999}
              />
            </mesh>
          )}

          {hasObject("trucks") && (
            <mesh castShadow receiveShadow geometry={geo("trucks")}>
              <meshStandardMaterial
                metalness={1}
                roughness={0.2}
                // map={deckTexture}
                attach="material"
                key="metal"
                toneMapped={false}
                color={0xcccccc}
              />
            </mesh>
          )}
        </group>
      </group>
    </group>
  )
}

export default Board
