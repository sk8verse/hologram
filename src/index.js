import React from "react"
import Scene from "./components/Scene"
export { default as Scene } from "./components/Scene"

export const ExampleComponent = () => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: 0,
    }}
  >
    <Scene controls="enabled" texture="/moon.jpg" />
  </div>
)
