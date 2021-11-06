import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { boardFromId, trucks, wheels } from "."

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF(
    props.object || "https://sk8verse.xyz/viewer/sk8board.gltf"
  )
  const groupSkateboard = useRef()
  const groupOffsetRotation = useRef()
  const groupAngleRotation = useRef()

  const deckTexture = useTexture(
    props.texture || `https://sk8verse.xyz/viewer/decks/wood.png`
  )
  deckTexture.flipY = false
  deckTexture.flipX = true

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    groupSkateboard.current.position.y = -0.7
    groupOffsetRotation.current.rotation.x = -elapsedTime * 1 + 10
    groupAngleRotation.current.rotation.z = -1
  })

  return (
    <group ref={groupAngleRotation}>
      <group ref={groupOffsetRotation}>
        <group ref={groupSkateboard} {...props}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["sk8board-deck"].geometry}
            material={materials["sk8board-deck"]}
          >
            <meshStandardMaterial
              {...{ metalness: 0, roughness: 1 }}
              map={deckTexture}
              attach="material"
              key="metal"
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["sk8board-trucks"].geometry}
            // material={materials["sk8board-trucks"]}
          >
            <meshStandardMaterial {...trucks} attach="material" key="trucks" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["sk8board-wheels"].geometry}
            material={materials["sk8board-rubber"]}
          >
            <meshStandardMaterial {...wheels} attach="material" key="wheels" />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/viewer/sk8board.gltf")
