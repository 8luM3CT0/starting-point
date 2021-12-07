//front-end
import { forwardRef } from 'react'
//back-end
import { useState } from 'react'

const BettingResult = forwardRef(({ result }, ref) => {
  return (
    <>
      <div
        className='
        flex 
        items-center 
        justify-evenly 
        px-6
        py-4 
        rounded-lg
        hover:bg-[#c2f0ec]  
        hover:scale-105
        hover:transition
        duration-150 
        cursor-pointer
        my-5 '
      >
        <h3
          className='
          text-base 
          lg:text-xl 
            text-yellow-400 
            font-semibold'
        >
          {result.Name}
        </h3>
        <span
          className='
          space-x-6  
          lg:space-x-10
            text-lg 
            font-medium 
            flex 
            items-center
            text-center'
        >
          <h4 className='text-[14px] lg:text-xl text-gray-800'>Teams: </h4>
          <h5
            className='
                text-base 
                text-blue-300 
                font-normal'
          >
            {result.HomeTeam} - {result.HomeTeamScore}
          </h5>
          <h4 className='text-[14px] lg:text-xl text-gray-800'>vs</h4>
          <h5
            className='
                text-base 
                text-red-500 
                font-normal'
          >
            {result.AwayTeam} - {result.AwayTeamScore}
          </h5>
        </span>
      </div>
    </>
  )
})

export default BettingResult
