import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useContext, useEffect} from 'react'
import UserContext from '../context/userContext'

const UserHeader = () => {
        // const {name, role, avater, handle, links} = data
        const router = useRouter()
        const handleLogout = () => {
        localStorage.removeItem('LinktreeToken')
        router.push('/login')
        
    }


    const {userData, setUserData} = useContext(UserContext)
    const {role, avater, handle,} = userData

    useEffect(() => {
      if (!localStorage.getItem("AuthToken"))
        return (window.location.href = "/login");
      fetch("http://localhost:8080/data/dashboard", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          tokenMail: localStorage.getItem("AuthToken"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") return toast.error("Error happened");
          setData(data.userData);
          setUserData(data.userData)
          localStorage.setItem("userHandle", data.userData.handle);
          toast.success(data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <>
     <header className='flex flex-row justify-between items-center'>
        <div className='flex flex-col md:flex-row p-5'>
           <Link href='/edit/links'>
           <button className='inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500'>
                <img src='/svg/url.svg' className='w-6 mr-3'/>    
                Edit Links
            </button> 
           </Link>   
            <Link href='/edit/profile'>
            <button className='inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500 md:ml-4'>
                <img src='/svg/profile.svg' className='w-6 mr-3'/>    
                Edit profile
            </button> 
            </Link>   
        </div>    
        <Link href={`http://localhost:3000/${handle}`}>
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
        </Link>
    </header> 
    </>
  )
}

export default UserHeader
