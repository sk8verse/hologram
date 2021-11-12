import React, { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { OBJLoader } from "./OBJLoader"
import { TextureLoader } from "three"

export const Deck = ({ ...props }) => {
  const texture = useLoader(
    TextureLoader,
    props.texture ?? "https://shop.sk8verse.xyz/sk8deck-wood.jpg"
  )
  const obj = useLoader(OBJLoader, "https://shop.sk8verse.xyz/sk8deck.obj")
  const groupOffsetRotation = useRef()
  const groupAngleRotation = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    groupOffsetRotation.current.rotation.x = -elapsedTime * 1 + 10
    groupAngleRotation.current.rotation.z = -1
  })

  return (
    <group ref={groupAngleRotation}>
      <group ref={groupOffsetRotation} {...props}>
        <mesh castShadow receiveShadow geometry={obj.children[0].geometry}>
          <meshStandardMaterial
            {...{ metalness: 0, roughness: 1 }}
            map={texture}
            attach="material"
            key="metal"
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  )
}
