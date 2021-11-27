import React, { useRef, useContext } from "react"
import { useFrame } from "@react-three/fiber"
import SceneContext from "./SceneContext"

const Rotation = ({ children }) => {
  const container = useRef()
  const meshRotation = useRef()
  const meshAngleRotation = useRef()
  const { scale, position, rotate } = useContext(SceneContext)

  useFrame(({ clock }) => {
    container.current.rotation.y = 1.6
    meshAngleRotation.current.rotation.x = 1
    meshAngleRotation.current.rotation.z = -1.6

    if (!rotate) return
    const elapsedTime = clock.getElapsedTime()
    meshRotation.current.rotation.z = -elapsedTime * 1
  })

  return (
    <group ref={container}>
      <group ref={meshAngleRotation}>
        <group ref={meshRotation} scale={scale} position={position}>
          {children}
        </group>
      </group>
    </group>
  )
}

export default Rotation
