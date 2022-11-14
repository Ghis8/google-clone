import Link from 'next/link'
import {useRouter} from 'next/router'
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi'
function PaginationBtn() {
    const router=useRouter()
    const startIndex=Number(router.query.start) || 0
  return (
    <div className="">
        <div className='flex max-w-lg justify-between max-w-lg text-blue-700 mb-10'>
            {
                startIndex>=10 && (
                     <Link href={`/search?term=${router.query.term}&start=${startIndex-10 }`}>
                        <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                            <HiChevronLeft/>
                            <p>Previous</p>
                        </div>
                     </Link>
                )
            }
            <Link href={`/search?term=${router.query.term}&start=${startIndex+10 }`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                    <HiChevronRight/>
                    <p>Next</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default PaginationBtn