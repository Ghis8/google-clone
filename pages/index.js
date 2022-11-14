import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import {HiOutlineSearch, HiViewGrid} from 'react-icons/hi'
import {FaMicrophoneAlt,FaTimes} from 'react-icons/fa'
import { useRef, useState } from 'react'
import {useRouter} from 'next/router'

const Home = () => {
  const [toggle,setToggle]=useState(false)
  const router=useRouter()
  const searchInputRef=useRef(null)
  const [searchInput,setSearchInput]=useState('')
  const handleSubmit=(e)=>{
    
    e.preventDefault()
    if(!searchInputRef.current.value) return

    router.push(`/search?term=${searchInputRef.current.value}`)
  }
  const handleChange=(e)=>{
    setSearchInput(e.target.value)
    setToggle(true)
  }
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div className='flex w-full p-5 justify-between'>
          {/* left */}
          <div className='flex space-x-4 items-center'>
              <p className='link'>About</p>
              <p className='link'>Store</p>
          </div>
          {/* Right */}
          <div className='flex space-x-4 items-center'>
              <p className='link'>Gmail</p>
              <p className='link'>Images</p>
              <HiViewGrid className='text-2xl  cursor-pointer hover:text-gray-400 transition duration-150 transform hover:scale-150'/>
              <Avatar url="/img/p.jpg" />
          </div>
        </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center mt-44 flex-grow'>
        <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" width={100} height={100} alt="google image" />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-500 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <HiOutlineSearch className='mr-3 text-gray-500'/>
          <input type="text" ref={searchInputRef} onChange={handleChange} className='flex-grow focus:outline-none ' />
          <div className='flex space-x-1 items-center'>
            {
             toggle ? <FaTimes onClick={()=>(searchInputRef.current.value == ' ')} /> : ''
            }
            <FaMicrophoneAlt />
          </div>
          

        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-x-4 sm:items-center md:items-center'>
            <button  className="btn mt-2">Google Search</button>
            <button  className="btn">I'm feeling Lucky</button>
          </div>
      </form>
      <Footer />
    </div>
  )
}

export default Home
