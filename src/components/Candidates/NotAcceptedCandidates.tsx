import React, { useState } from 'react'
import { data } from './data'

interface dataTypes{
  id: number;
  name: string;
  rating: string;
  stages: string;
  applied_role: string;
  application_date: string;
  attachments: string;
  accepted: boolean;
}

export const NotAcceptedCandidates = () => {
  const [candidatesData, setCandidatesData] = useState(data);
  return (
    <>
      {candidatesData.map(({ id, name, rating, stages, applied_role, application_date, attachments, accepted }: dataTypes) =>
        !accepted &&
        <tr className='border-b border-line text-left cursor-pointer hover:bg-black transition-aease-in-out duration-500' key={id}>
          <th className='py-6 px-5 flex gap-2 items-center'>
            <img className="w-8 h-8 rounded-full" src="/images/avatar.svg" alt="Profile avatar"></img>
            {name}
          </th>
          <td className='py-6 px-5'>
            <span className='text-yellow pr-0.5'>★</span>
            {rating}
          </td>
          <td className='py-6 px-5'>{stages}</td>
          <td className='py-6 px-5'>{applied_role}</td>
          <td className='py-6 px-5'>{application_date}</td>
          <td className='py-6 px-5'>{attachments}</td>
        </tr>
      )}
    </>
  );
}