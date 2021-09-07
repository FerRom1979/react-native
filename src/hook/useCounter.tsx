import { useState } from "react"

const useCounter = (initialValue: number = 10) => {
  const [value, setValue] = useState(initialValue)

  const Add = (num: number) => {
    setValue(value + num)
  }
  return { value, Add }
}

export default useCounter
