import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF(
    props.object || "https://shop.sk8verse.xyz/sk8deck.gltf"
  )
  const groupOffsetRotation = useRef()
  const groupAngleRotation = useRef()

  const deckTexture = useTexture(
    props.texture || `https://shop.sk8verse.xyz/sk8deck-wood.jpg`
  )
  deckTexture.flipY = false
  deckTexture.flipX = true

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    groupOffsetRotation.current.rotation.x = -elapsedTime * 1 + 10
    groupAngleRotation.current.rotation.z = -1
  })

  return (
    <group ref={groupAngleRotation}>
      <group ref={groupOffsetRotation} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["sk8deck"].geometry}
          material={materials["sk8deck"]}
        >
          <meshStandardMaterial
            {...{ metalness: 0, roughness: 1 }}
            map={deckTexture}
            attach="material"
            key="metal"
          />
        </mesh>
      </group>
    </group>
  )
}

// useGLTF.preload("/viewer/sk8board.gltf")
