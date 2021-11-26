import React, { useContext } from "react"
import { useGLTF } from "@react-three/drei"
import SceneContext from "./SceneContext"
import Deck from "./Deck"

const Board = () => {
  const { objects } = useContext(SceneContext)

  const { nodes } = useGLTF(
    "https://sk8verse.s3.us-west-1.amazonaws.com/sk8board.gltf"
  )

  const geo = key => nodes[key].geometry
  const hasObject = key => Object.keys(objects).includes(key)

  return (
    <group>
      {hasObject("deck") && (
        <Deck geometry={geo("deck-wrap")} rimGeometry={geo("deck-rim")} />
      )}

      <group position={[0, -10, 0]}>
        {hasObject("wheels") && (
          <mesh castShadow receiveShadow geometry={geo("wheels")}>
            <meshStandardMaterial
              metalness={0}
              roughness={0.85}
              attach="material"
              key="wheels"
              toneMapped={false}
              color={0xe3d4ab}
              {...objects.wheels}
            />
          </mesh>
        )}

        {hasObject("bearings") && (
          <mesh castShadow receiveShadow geometry={geo("bearings")}>
            <meshStandardMaterial
              metalness={1}
              roughness={0}
              attach="material"
              key="bearings"
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
              attach="material"
              key="trucks"
              toneMapped={false}
              color={0xcccccc}
            />
          </mesh>
        )}
      </group>
    </group>
  )
}

export default Board
