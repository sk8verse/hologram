import React from "react"
import { Scene as Sk8Hologram } from "./components/Scene"
export { Sk8Hologram }

export const ExampleComponent = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    <Sk8Hologram
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
