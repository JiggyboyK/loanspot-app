import { useFetch } from "../hooks/useFetch"

const Test = () => {
  const url = 'https://gorest.co.in/public/v2/users'

  const {data,error,pending} = useFetch(url)

  return (
    <div>
      {pending && <p>Loading</p>}
      {error && <p>{error}</p>}
      {data && data.map((val,idx)=>(
        <div key={idx}>
          <p>{val.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Test
