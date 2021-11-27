import React from "react"
import { Scene as Sk8View } from "./components/Scene"
import { wrap } from "./components/Texture"
export { Sk8View, wrap }

export const ExampleComponent = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
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
