interface IPerson {
  name: string
  age: number
  direction: IDirection
}
interface IDirection {
  country: string
  city: string
}

const ObjectLiteral = () => {
  const person: IPerson = {
    name: "Fernando",
    age: 42,
    direction: {
      country: "Argentina",
      city: "Buenos Aires",
    },
  }

  return (
    <>
      <h3>Objects Literals</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  )
}

export default ObjectLiteral
