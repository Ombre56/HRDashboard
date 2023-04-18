import React from 'react'
import Tiles from './Tiles'

export default function JobAds() {
  return (
    <>
      <div className='flex justify-between pr-8 md:pr-20'>
        <h1 className='text-xl md:text-3xl font-bold'>Current Openings</h1>

        <div className='flex items-center justify-center text-sm w-32 h-9 bg-lightblack rounded-full text-gray'>Sort by: Latest</div>
      </div>

      <div className='mt-5 mr-8 grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-x-6 snap-x'>
        <Tiles />
      </div>
    </>
  )
}
