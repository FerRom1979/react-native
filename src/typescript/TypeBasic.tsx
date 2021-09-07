import React from "react"

const TypeBasic = () => {
  const name: string = "Fernando"
  const edad: number = 42
  const isActive: boolean = true
  const powers: string[] = [
    "Speed",
    "Fly",
    "breathe low in water",
    "super strength",
  ]

  return (
    <>
      <h3>Types Basic</h3>
      {name}, {edad}, {isActive ? "is active" : "is not active"}
      <br />
      {powers.join(", ")}
    </>
  )
}

export default TypeBasic
