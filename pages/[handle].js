import LinkTree from '@/components/LinkTree'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Handle = () => {

const router = useRouter()
const [data, setData] = useState({})
const [userFound, setUserfound] = useState(false)

useEffect(()=>{
  if(router.query?.handle){
    fetch(`http://localhost:8080/get/${router.query.handle}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.status==='error') return toast.error(data.error)
      if(data.status === 'success'){
        setData(data.userData)
        setUserfound(true)
      }
    }).catch(err=>{
      console.log(err)
    })
  }
},[router.query])

    if(!userFound){
      return(
        <div>
          User not found
        </div>
      )
    }

  return (
    <div>
      <LinkTree data={data}/>
    </div>
  )
}

export default Handle

