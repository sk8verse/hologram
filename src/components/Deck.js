import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"

const Deck = ({ ...props }) => {
  const { nodes } = useGLTF(
    props.object || "https://shop.sk8verse.xyz/sk8deck.gltf"
  )

  const deckTexture = useTexture(
    props.texture || `https://shop.sk8verse.xyz/sk8deck-wood.jpg`
  )
  deckTexture.flipY = false

  const meshRotation = useRef()
  const meshAngleRotation = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    meshRotation.current.rotation.x = -elapsedTime * 1 + 10
    meshAngleRotation.current.rotation.z = 1
  })

  return (
    <group ref={meshAngleRotation}>
      <group ref={meshRotation} {...props}>
        <mesh castShadow receiveShadow geometry={nodes["sk8deck"].geometry}>
          <meshStandardMaterial
            metalness={0}
            roughness={0.85}
            map={deckTexture}
            attach="material"
            key="metal"
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  )
}

export default Deck
