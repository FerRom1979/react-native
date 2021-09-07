import React, { useState } from "react"

const Counter = () => {
  const [value, setValue] = useState(10)

  const Add = (num: number) => {
    setValue(value + num)
  }

  return (
    <div>
      <h3>
        counter
        <small>{value}</small>
      </h3>
      <button onClick={() => Add(+1)}>+1</button>&nbsp;&nbsp;
      <button onClick={() => Add(-1)}>-1</button>
    </div>
  )
}

export default Counter
