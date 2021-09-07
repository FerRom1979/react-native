import useCounter from "../hook/useCounter"

const CounterHook = () => {
  const { value, Add } = useCounter(100)
  return (
    <div>
      <h3>
        counter:
        <small>{value}</small>
      </h3>
      <button onClick={() => Add(+1)}>+1</button>&nbsp;&nbsp;
      <button onClick={() => Add(-1)}>-1</button>
    </div>
  )
}

export default CounterHook
