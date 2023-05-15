import React, { useState } from 'react'
import { data } from './data'

export default function TableAccepted() {
  const [candidatesData, setCandidatesData] = useState(data);
  return (
    <div className='bg-lightblack rounded-2xl w-full p-4'>
      <div className='flex gap-9 border-b border-line'>
        <div className='w-16 pb-2.5 text-center cursor-pointer'>All</div>
        <div className='border-b border-green w-16 pb-2.5 text-center cursor-pointer'>Accepted</div>
        <div className='w-16 cursor-pointer'>Rejected</div>
      </div>

      <div className='relative overflow-x-auto mt-3.5'>
        <table className='w-full table-auto'>
          <thead className='whitespace-nowrap bg-[#262626] rounded-2xl'>
            <tr className='rounded-2xl uppercase text-gray text-left text-xs md:text-sm'>
              <th className='py-2 px-5'>Candidate Name</th>
              <th className='py-2 px-5'>Rating ★</th>
              <th className='py-2 px-5'>Stages</th>
              <th className='py-2 px-5'>Applied Role</th>
              <th className='py-2 px-5'>Application Date</th>
              <th className='py-2 px-5'>Attachments</th>
            </tr>
          </thead>

          <tbody>
            {candidatesData.map((candidate) =>
              candidate.accepted &&
              <tr className='border-b border-line text-left cursor-pointer hover:bg-black transition-all ease-in-out duration-500'>
                <th className='py-6 px-5 flex gap-2 items-center'>
                  <img className="w-8 h-8 rounded-full" src="/images/avatar.svg" alt="Profile avatar"></img>
                  {candidate.name}
                </th>
                <td className='py-6 px-5'>
                  <span className='text-yellow pr-0.5'>★</span>
                  {candidate.rating}
                </td>
                <td className='py-6 px-5'>{candidate.stages}</td>
                <td className='py-6 px-5'>{candidate.applied_role}</td>
                <td className='py-6 px-5'>{candidate.application_date}</td>
                <td className='py-6 px-5'>{candidate.attachments}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
