import React, {useEffect} from 'react'

const dashboard = () => {

  useEffect(()=>{
    if(!localStorage.getItem('LinkTreeToken')) return window.location.href = "/login"
  },[])

  return (
    <div>
       <section className='main flex justify-center'>
        <h1 className='text-white bg-gray-700'>dashboard</h1>
       </section>
    </div>
  )
}

export default dashboard
