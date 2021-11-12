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
    <Scene controls="enabled" texture="http://localhost:3000/sk8deck.jpg" />
  </div>
)
