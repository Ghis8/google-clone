import{
  HiMap,
  HiNewspaper,
    HiOutlineDotsVertical,
    HiOutlineMapPin,
    HiOutlineNewspaper,
    HiOutlinePhotograph,
    HiOutlinePlay,
    HiPhotograph,
    HiPlay,
    HiSearch
} from 'react-icons/hi'
import HeaderOption from './HeaderOption'

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-2 pb-2 shadow-smb">
        <div className="flex space-x-6">
            <HeaderOption Icon={HiSearch} title="Tous" selected/>
            <HeaderOption Icon={HiPhotograph} title="Images" />
            <HeaderOption Icon={HiPlay} title="Videos" />
            <HeaderOption Icon={HiNewspaper} title="News" />
            <HeaderOption Icon={HiMap} title="Maps" />
            <HeaderOption Icon={HiOutlineDotsVertical} title="More" />
            
        </div>
        <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions