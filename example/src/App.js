import React, { useState, useEffect } from "react"
import { Sk8Hologram } from "@sk8verse/hologram"
import { makeBento } from "@sk8verse/bento"

const App = () => {
  const [bottom, setBottom] = useState()
  const [top, setTop] = useState()
  const [texture, setTexture] = useState()

  useEffect(() => {
    const fn = async () => {
      setTexture((await makeBento(bottom, top)).toDataURL())
    }
    fn()
  }, [top, bottom])

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
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
        <Sk8Hologram objects={{ deck: { texture } }} />
      </div>
      <div className="">
        <h4>Bottom:</h4>
        <input
          type="file"
          onChange={e => setBottom(URL.createObjectURL(e.target.files[0]))}
        />

        <h4>Top:</h4>
        <input
          type="file"
          onChange={e => setTop(URL.createObjectURL(e.target.files[0]))}
        />
      </div>
    </div>
  )
}

export default App
