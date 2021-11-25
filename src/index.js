import React from "react"
import { Scene } from "./components/Scene"
export { Scene } from "./components/Scene"

export const ExampleComponent = () => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: 0,
    }}
  >
    <Scene
      controls="enabled"
      object="/sk8board.gltf"
      texture="/toad.png"
      objects={["deck", "wheels", "trucks", "bearings"]}
    />
  </div>
)
