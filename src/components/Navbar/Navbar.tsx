import { RxDashboard } from 'react-icons/rx'
import { TbMessage, TbReportAnalytics } from 'react-icons/tb'
import { IoCalendar } from 'react-icons/io5'
import { BsBriefcaseFill } from 'react-icons/bs'
import { HiUsers, HiUser, HiDocumentText } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'

interface ChildProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isOpen, setIsOpen }: ChildProps) {
  return (
    <nav className='w-[277px] h-screen border-r border-line text-gray'>
      <ul className='pt-8 flex flex-col gap-4'>
        <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
          <div
            className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxDashboard className='w-5 h-5' />
            Dashboard
          </div>
        </li>
        <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
          <div
            className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
            onClick={() => setIsOpen(!isOpen)}
          >
            <TbMessage className='w-5 h-5' />
            Messages
          </div>
        </li>
        <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
          <div
            className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoCalendar className='w-5 h-5' />
            Calendar
          </div>
        </li>
      </ul>

      <figure className='py-9'>
        <figcaption className='uppercase pb-4 text-sm px-2.5 md:px-9'>Recruitment</figcaption>
          <ul className='flex flex-col gap-4 text-base pl-0.5'>
            <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
              <div
                className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
                onClick={() => setIsOpen(!isOpen)}
              >
                <BsBriefcaseFill className='w-5 h-5' />
                Jobs
              </div>
            </li>
            <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
              <div
                className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
                onClick={() => setIsOpen(!isOpen)}
              >
                <HiUsers className='w-5 h-5' />
                Candidates
              </div>
            </li>
            <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
              <div
                className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
                onClick={() => setIsOpen(!isOpen)}
              >
                <CgWebsite className='w-5 h-5' />
                Career Site
              </div>
            </li>
          </ul>
      </figure>

      <figure>
        <figcaption className='uppercase pb-4 text-sm px-2.5 md:px-9'>Organization</figcaption>
          <ul className='flex flex-col gap-4 text-base pl-0.5'>
            <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
              <div
                className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
                onClick={() => setIsOpen(!isOpen)}
              >
                <HiUser className='w-5 h-5' />
                Employees
              </div>
            </li>
            <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
              <div
                className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
                onClick={() => setIsOpen(!isOpen)}
              >
                <HiDocumentText className='w-5 h-5' />
                Documents
              </div>
            </li>
            <li className='bg-gradient-to-r hover:from-gradient-1 hover:to-gradient-2 hover:text-white transition-all duration-300 cursor-pointer mr-7 rounded-r-full'>
              <div
                className='flex items-center gap-2.5 px-2.5 md:px-9 h-10'
                onClick={() => setIsOpen(!isOpen)}
              >
                <TbReportAnalytics className='w-5 h-5' />
                Reports
              </div>
            </li>
          </ul>
      </figure>
    </nav>
  )
}