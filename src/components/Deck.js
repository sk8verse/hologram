import React, { useContext } from "react"
import { useTexture } from "@react-three/drei"
import SceneContext from "./SceneContext"

const Deck = ({ geometry, rimGeometry, ...props }) => {
  const { objects } = useContext(SceneContext)

  const baseTexture = useTexture(
    "https://sk8verse.s3.us-west-1.amazonaws.com/sk8deck-wood.jpg"
  )

  const deckTexture = useTexture(
    objects?.deck?.texture ||
      `https://sk8verse.s3.us-west-1.amazonaws.com/sk8deck-wood.jpg`
  )
  deckTexture.flipY = false

  const deckProps = { metalness: 0, roughness: 0.85, ...objects.deck }

  return (
    <group>
      <mesh castShadow receiveShadow geometry={rimGeometry}>
        <meshStandardMaterial
          metalness={0}
          roughness={0.85}
          map={baseTexture}
          attach="material"
          key="rim"
          toneMapped={false}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={geometry}>
        <meshStandardMaterial
          {...deckProps}
          map={deckTexture}
          attach="material"
          key="wrap"
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

export default Deck
