import Image from 'next/image'
import {useRef,useState} from 'react'
import { HiSearch,HiOutlineSearch } from 'react-icons/hi'
import {FaMicrophoneAlt, FaSearchengin} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Header() {
  const router=useRouter()
  const [toggle,setToggle]=useState(false)
  const searchInputRef=useRef(null)
  const [searchInput,setSearchInput]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!searchInputRef.current.value)return 
    router.push(`/search?term=${searchInputRef.current.value}`)
  }
  const handleChange=(e)=>{
    setSearchInput(e.target.value)
    setToggle(true)
  }
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Link href='/' className='cursor-pointer'>
          <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"  alt="google image" height={40} width={120} />
        </Link>
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          
          <input type="text" ref={searchInputRef} onChange={handleChange} className='flex-grow w-full focus:outline-none' />
          <div className='flex space-x-3 items-center'>
            {
             toggle ? <FaTimes onClick={()=>(searchInputRef.current.value == '')} /> : ''
            }

            <FaMicrophoneAlt className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300'/>
            <FaSearchengin  className='h-6 text-blue-500 hidden sm:inline-flex'/>
            <button hidden type="submit" onClick={handleSubmit}>Search</button>
          </div>
        </form>
        <Avatar url="/img/p.jpg" className="ml-auto" />
      </div>
      <HeaderOptions />
    </header>
  )
}

export default Header

export async function getServerSideProps(){
  const result=await fetch('')
}