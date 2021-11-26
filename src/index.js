import React from "react"
import { Scene } from "./components/Scene"
export default Scene

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
      objects={{
        deck: {
          texture:
            "https://sk8project.imgix.net/cryptoadz/1?w=2048&h=2048&fit=fill&fill-color=black",
        },
      }}
    />
  </div>
)
