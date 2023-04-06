import { IoSettingsOutline } from 'react-icons/io5'
import { IoNotificationsOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <header className='flex justify-center px-2.5 md:px-9 h-20 border-b border-line'>
      <div className='w-16 md:w-60 items-center flex gap-2'>
        <div className='hidden md:block'>☆</div>
        <h1 className='text-sm md:text-2xl font-bold hidden md:block'>HRTool</h1>

        <button className="md:hidden space-y-2">
          <span className="block w-8 h-0.5 bg-gray"></span>
          <span className="block w-8 h-0.5 bg-gray"></span>
          <span className="block w-5 h-0.5 bg-gray"></span>
        </button>
      </div>


      <div className='grow flex'>
        <div className="bg-line w-px mr-4 md:mr-8" />
        <input
          className="search w-32 md:w-80 h-9 text-xs text-gray rounded-full px-3 bg-black border-2 self-center placeholder:truncate"
          type='search'
          placeholder='Search for jobs, candidates and more...'
        >
        </input>
      </div>

      <div className='flex items-center justify-center gap-1.5 md:gap-3.5'>
        <div className='bg-lightblack shadow-lg shadow-yellow-500/50 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer'>
          <IoSettingsOutline className='w-5 h-5' />
        </div>

        <div className='relative bg-lightblack w-9 h-9 rounded-full flex items-center justify-center cursor-pointer'>
          <IoNotificationsOutline className='w-5 h-5' />
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green border-black border rounded-full -top-2 -right-2">2</div>
        </div>

        <button className='cursor-pointer'>
          <img className="w-10 h-10 rounded-full" src="/images/avatar.svg" alt="Profile avatar"></img>
        </button>
      </div>
    </header>
  )
}
