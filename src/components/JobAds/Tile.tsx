import React from 'react'
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineSchool } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';

interface ChildProps {
  image: string;
  jobName: string;
  datePosted: string;
  location: string;
  experience: string;
  amountApplications: number;
  applicationsInMonth: number;
}

export default function Tile({ image, jobName, datePosted, location, experience, amountApplications, applicationsInMonth }: ChildProps) {
  return (
    <div className='relative'>
      <div className='flex gap-3'>
        <img src={image} alt={jobName} />
        <div>
          <h2 className='text-lg font-bold'>{jobName}</h2>
          <span className='text-gray'>{datePosted}</span>
        </div>
      </div>

      <div className='absolute flex items-center justify-center top-0 right-0 w-12 h-12 rounded-full bg-[#343535] cursor-pointer shadow-2xl shadow-[#29C5EE]'>
        <FiArrowUpRight className='text-white w-5 h-5' />
      </div>

      <div className='flex py-5 gap-2'>
        <div className='min-w-min px-3 py-1.5 flex justify-center items-center gap-1 rounded-full bg-[#282828] text-gray text-sm'>
          <IoLocationOutline /> {location}
        </div>

        <div className='min-w-min px-3 py-1.5 flex justify-center items-center gap-1 rounded-full bg-[#282828] text-gray text-sm'>
          <MdOutlineSchool /> {experience}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex gap-1 items-end'>
          <span className='text-4xl'>{amountApplications}</span>
          <span className='text-gray'>applications</span>
        </div>

        <div className='flex gap-1'>
          <span className='text-green'>{applicationsInMonth}</span>
          <span className='text-green'>in last week</span>
        </div>
      </div>
    </div>
  )
}
