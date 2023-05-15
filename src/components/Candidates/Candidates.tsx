import React from 'react'
import TableData from './TableData'

export default function Candidates() {
  return (
    <>
      <div className='flex justify-between pr-8 md:pr-20 mt-8 md:mt-9'>
        <h1 className='text-xl md:text-3xl font-bold'>Candidates</h1>

        <div className='flex items-center justify-center text-sm w-32 h-9 bg-lightblack rounded-full text-gray'>March 2023 ▼</div>
      </div>

      <div className='mt-5 mr-8'>
        <TableData />
      </div>
    </>
  )
}
