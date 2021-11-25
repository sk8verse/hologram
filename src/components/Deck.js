import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const Deck = props => {
  const { nodes } = useGLTF(
    props.object ||
      "https://assets.takeshape.io/77c3167c-240a-4def-80b3-ff7670f8cd4d/dev/1712ea22-e8d1-4701-b52b-31deba600abf/sk8board.gltf"
  )

  const boardTexture = useTexture(
    "https://images.takeshape.io/77c3167c-240a-4def-80b3-ff7670f8cd4d/dev/83bafc72-318f-47c8-b764-d910525a2d4d/sk8deck-wood.jpg"
  )

  const deckTexture = useTexture(
    props.texture || `https://shop.sk8verse.xyz/sk8deck-wood.jpg`
  )
  deckTexture.flipY = false

  const meshRotation = useRef()
  const meshAngleRotation = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    meshRotation.current.rotation.z = -elapsedTime * 1 + 10
    meshAngleRotation.current.rotation.y = 1
    meshAngleRotation.current.rotation.x = 2
  })

  const geo = key => nodes[key].geometry

  const objects = props.objects || ["deck"]

  return (
    <group ref={meshAngleRotation}>
      <group ref={meshRotation} {...props}>
        {objects.includes("deck") && (
          <group>
            <mesh castShadow receiveShadow geometry={geo("deck-rim")}>
              <meshStandardMaterial
                metalness={0}
                roughness={0.85}
                map={boardTexture}
                attach="material"
                key="rim"
                toneMapped={false}
              />
            </mesh>
            <mesh castShadow receiveShadow geometry={geo("deck-wrap")}>
              <meshStandardMaterial
                metalness={0}
                roughness={0.85}
                map={deckTexture}
                attach="material"
                key="wrap"
                toneMapped={false}
              />
            </mesh>
          </group>
        )}

        <group position={[0, -10, 0]}>
          {objects.includes("wheels") && (
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

          {objects.includes("bearings") && (
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

          {objects.includes("trucks") && (
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

export default Deck
