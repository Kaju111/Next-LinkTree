import LinkTree from '@/components/LinkTree'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

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
        <div className='flex justify-center items-center h-screen'>
          <div className='not-found px-3'>
            <h1 className='font-bold text-lg'>User Not found 🙁</h1>
            <br/>
            <p>If you're looking for a page, double check the spelling.</p>
            Create your own<Link className='bg-indigo-600 px-2 ml-2 text-white hover:bg-indigo-400 transition-all duration-500' href="/apply"> LinkTree</Link>
          </div>
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

