import {useState,useEffect} from 'react'

export const useFetch = (url) =>{

  const [pending,setPending] = useState(false)
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)

  useEffect(()=>{

    const getData = async ()=>{

      setPending(true)

      try{
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
        if(result){
          setPending(false)
        }
      }catch(err){
        console.log(err)
        setError(err)
      } 


    }
    getData()


  },[url])

 return {data,error,pending} 
}
