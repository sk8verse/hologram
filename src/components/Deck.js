import React, { useContext } from "react"
import { useTexture } from "@react-three/drei"
import SceneContext from "./SceneContext"

const Deck = ({ geometry, rimGeometry, ...props }) => {
  const { sprite } = useContext(SceneContext)

  const baseTexture = useTexture(
    "https://sk8verse.sfo3.cdn.digitaloceanspaces.com/founder/sk8deck-wood.jpg"
  )

  const deckTexture = useTexture(
    sprite?.bento || `https://sk8bento.imgix.net/design/tart-broken-alligator`
  )
  deckTexture.flipY = false
  deckTexture.flipX = true

  const deckProps = { metalness: 0, roughness: 0.85, ...sprite.deck }

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
