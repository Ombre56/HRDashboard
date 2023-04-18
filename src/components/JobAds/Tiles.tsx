import React from 'react'
import Tile from './Tile'

const TileData = {
  1: {
    image: '/images/figmaIcon.svg',
    jobName: 'Sr. UX Designer',
    datePosted: 'Posted 2 days ago',
    location: 'Bengaluru',
    experience: '3 years exp.',
    amountApplications: 45,
    applicationsInMonth: 25,
  },
  2: {
    image: '/images/rocketIcon.svg',
    jobName: 'Growth Manager',
    datePosted: 'Posted 5 days ago',
    location: 'Remote',
    experience: '2+ years exp.',
    amountApplications: 38,
    applicationsInMonth: 10,
  },
  3: {
    image: '/images/coinIcon.svg',
    jobName: 'Financial Analyst',
    datePosted: 'Posted 10 days ago',
    location: 'Mumbai',
    experience: '5+ years exp.',
    amountApplications: 25,
    applicationsInMonth: 25,
  },
  4: {
    image: '/images/shieldIcon.svg',
    jobName: 'Security Analyst',
    datePosted: 'Posted 15 days ago',
    location: 'New Delhi',
    experience: '7 years exp.',
    amountApplications: 105,
    applicationsInMonth: 73,
  },
}

export default function Tiles() {
  return (
    <>
      <div className='max-w-80 min-h-48 bg-lightblack rounded-2xl border-l-4 border-[#29C5EE] hover:shadow-lg hover:shadow-[#29C5EE] transition-all ease-in-out duration-500 cursor-pointer hover:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-lg p-3.5'>
        <Tile
          image={TileData[1].image}
          jobName={TileData[1].jobName}
          datePosted={TileData[1].datePosted}
          location={TileData[1].location}
          experience={TileData[1].experience}
          amountApplications={TileData[1].amountApplications}
          applicationsInMonth={TileData[1].applicationsInMonth}
        />
      </div>

      <div className='max-w-80 min-h-48 bg-lightblack rounded-2xl border-l-4 border-[#CF1A2C] hover:shadow-lg hover:shadow-[#CF1A2C] transition-all ease-in-out duration-500 cursor-pointer hover:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-lg p-3.5'>
        <Tile
          image={TileData[2].image}
          jobName={TileData[2].jobName} 
          datePosted={TileData[2].datePosted}
          location={TileData[2].location}
          experience={TileData[2].experience}
          amountApplications={TileData[2].amountApplications}
          applicationsInMonth={TileData[2].applicationsInMonth}
        />
      </div>

      <div className='max-w-80 min-h-48 bg-lightblack rounded-2xl border-l-4 border-[#EAB04D] hover:shadow-lg hover:shadow-[#EAB04D] transition-all ease-in-out duration-500 cursor-pointer hover:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-lg p-3.5'>
        <Tile
          image={TileData[3].image}
          jobName={TileData[3].jobName} 
          datePosted={TileData[3].datePosted}
          location={TileData[3].location}
          experience={TileData[3].experience}
          amountApplications={TileData[3].amountApplications}
          applicationsInMonth={TileData[3].applicationsInMonth}
        />
      </div>
      
      <div className='max-w-80 min-h-48 bg-lightblack rounded-2xl border-l-4 border-[#19C8A7] hover:shadow-lg hover:shadow-[#19C8A7] transition-all ease-in-out duration-500 cursor-pointer hover:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-lg p-3.5'>
        <Tile
          image={TileData[4].image}
          jobName={TileData[4].jobName} 
          datePosted={TileData[4].datePosted}
          location={TileData[4].location}
          experience={TileData[4].experience}
          amountApplications={TileData[4].amountApplications}
          applicationsInMonth={TileData[4].applicationsInMonth}
        />
      </div>
    </>
  )
}
