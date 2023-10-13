import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../context/userContext'
import UserHeader from '../../components/UserHeader'

const profile = () => {
    const {userData, setUserData} = useContext(UserContext)
    const [social, setSocial] = useState({
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        linkedin: '',
        github: ''
    })
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [avater, setAvater] = useState('https://cdn-icons-png.flaticon.com/128/924/924915.png')

    useEffect(()=>{
        if(userData){
            setName(userData.name)
            setBio(userData.bio)
            setAvater(userData.avater)
        }
    },[userData])
    
    return (
    <>
     <div>
        <UserHeader/>    
        <main>
            <section>
                <div>
                    <h4>
                        Edit Profile
                    </h4>
                    <div>
                        <form className='flex flex-col justify-center items-center'>
                        <span className="flex flex-row mb-5 w-11/12 m-auto shadow-md border-2 py-2 px-3 rounded-md focus:outline-none">
                    <img className="w-6 mr-4" src="/svg/profile.svg" alt="" />
                    <input
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    className="focus:outline-none w-full"
                    type="text"
                    placeholder="Set a name"
                    required
                    />
                </span>
                <span className="flex flex-row mb-5 w-11/12 m-auto shadow-md border-2 py-2 px-3 rounded-md focus:outline-none">
                    <img className="w-6 mr-4" src="/svg/bio.svg" alt="" />
                    <input
                    value={bio}
                    onChange={e=>setBio(e.target.value)}
                    className="focus:outline-none w-full"
                    type="text"
                    placeholder="Enter a bio"
                    required
                    />
                </span>
                <span className="flex flex-row mb-5 w-11/12 m-auto shadow-md border-2 py-2 px-3 rounded-md focus:outline-none">
                    <img className="w-6 mr-4" src="/svg/profile.svg" alt="" />
                    <input
                    value={avater}
                    onChange={e=>setAvater(e.target.value)}
                    className="focus:outline-none w-full"
                    type="text"
                    placeholder="Enter Image link"
                    required
                    />
                    <img className='w-10 rounded-full ' src={avater}/>
                </span>
                    <input className='bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white' type='button' value='save profile'/>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div> 
    </>
  )
}

export default profile
