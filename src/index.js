import React from "react"
import { Scene as Sk8View } from "./components/Scene"
export default Sk8View

export const ExampleComponent = () => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: 0,
    }}
  >
    <Sk8View
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
