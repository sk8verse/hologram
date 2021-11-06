import React from "react"
import Scene from "./components/Scene"
export { default as Scene } from "./components/Scene"

export default Scene

export const ExampleComponent = () => (
  <div style={{ height: "500px" }}>
    <Scene controls="enabled" />
  </div>
)
