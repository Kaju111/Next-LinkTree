import { useRouter } from 'next/router'
import React from 'react'

const UserHeader = ({data}) => {
        const {name, role, avater, handle, links} = data
        const router = useRouter()
        const handleLogout = () => {
        localStorage.removeItem('LinktreeToken')
        router.push('/login')
    }
  return (
    <>
     <header className='flex flex-row justify-between items-center'>
        <div className='flex flex-col md:flex-row p-5'>
            <button className='inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500'>
                <img src='/svg/url.svg' className='w-6 mr-3'/>    
                Edit Links
            </button>    
            <button className='inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500 md:ml-4'>
                <img src='/svg/profile.svg' className='w-6 mr-3'/>    
                Edit profile
            </button>    
        </div>    
        <div className='flex flex-row'>
            <div className='inline-flex mr-5 text-right items-center bg-gray-200 rounded-lg py-2 px-5'>
                <div className='text-xs md:text-md flex flex-col flex-wrap '>
                    <span className='font-bold'>{handle}</span>
                    <span>{role} Pack</span>
                </div>
                <div className='user-img'>
                    <img className='w-10 ml-5' src={avater}/>
                </div>
            </div>
            <img src='/svg/notify.svg' className='w-6 mr-5 cursor-pointer'/>
            <img src='/svg/logout.svg' className='w-6 mr-5 cursor-pointer' onClick={handleLogout}/>
        </div>    
    </header> 
    </>
  )
}

export default UserHeader
