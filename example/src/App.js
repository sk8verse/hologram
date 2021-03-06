import React from "react"
import { Sk8Hologram } from "@sk8verse/hologram"

const bento = "https://sk8bento.imgix.net/design/tart-broken-alligator"

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <div style={{ width: "600px", height: "600px" }}>
        <Sk8Hologram sprite={{ bento, deck: {} }} />
      </div>
    </div>
  )
}

export default App
