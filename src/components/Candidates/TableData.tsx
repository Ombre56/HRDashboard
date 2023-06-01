import React, { useState } from 'react'
import { data } from './data'
import { AcceptedCandidates } from './AcceptedCandidates';
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

export default function TableData() {
  const [candidatesData, setCandidatesData] = useState(data);
  const [acceptedViewData, setAcceptedViewData] = useState<boolean>(true);
  const [allViewData, setAllViewData] = useState<boolean>(true);

  const [allFocus, setAllFocus] = useState<boolean>(true);
  const [acceptedFocus, setAcceptedFocus] = useState<boolean>(true);
  const [rejectedFocus, setRejectedFocus] = useState<boolean>(true);

  const handleChangeFocusAll = () => {
    setAllViewData(true)

    setAllFocus(true)
    setAcceptedFocus(true)
    setRejectedFocus(true)
  }

  const handleChangeFocusAccepted = () => {
    setAcceptedViewData(true)
    setAllViewData(false)

    setAllFocus(false)
    setAcceptedFocus(false)
    setRejectedFocus(true)
  }

  const handleChangeFocusRejected = () => {
    setAcceptedViewData(false)

    setAllFocus(false)
    setAcceptedFocus(true)
    setRejectedFocus(false)
  }

  return (
    <div className='bg-lightblack rounded-2xl w-full p-4'>
      <div className='flex gap-9 border-b border-line'>
        {allFocus ?
          <button
            className='border-b border-green w-16 pb-2.5 text-center cursor-pointer'
            onClick={handleChangeFocusAll}
          >All
          </button>
          : 
          <button
            className='w-16 pb-2.5 text-center cursor-pointer'
            onClick={handleChangeFocusAll}
          >All
          </button>
        }

        {acceptedFocus ?
          <button
            className='w-16 pb-2.5 cursor-pointer'
            onClick={handleChangeFocusAccepted}
          >Accepted
          </button>
          : 
          <button
            className='border-b border-green w-16 pb-2.5 text-center cursor-pointer'
            onClick={handleChangeFocusAccepted}
          >Accepted
          </button>
        }

        {rejectedFocus ?
          <button
            className='w-16 pb-2.5 cursor-pointer'
            onClick={handleChangeFocusRejected}
          >Rejected
          </button>
          : 
          <button
            className='border-b border-green w-16 pb-2.5 text-center cursor-pointer'
            onClick={handleChangeFocusRejected}
          >Rejected
          </button>
        }
        
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
            {allViewData ? candidatesData.map(({ id, name, rating, stages, applied_role, application_date, attachments }: dataTypes) =>
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
            ) : <AcceptedCandidates acceptedViewData={acceptedViewData} />}

          </tbody>
        </table>
      </div>
    </div>
  )
}