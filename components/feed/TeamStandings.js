//front-end
import { forwardRef } from 'react'
//back-end

const TeamStandings = forwardRef(({ result }, ref) => {
  return (
    <div
      className='
      cursor-pointer
      hover:bg-gray-700
        grid
        px-7
        border
        border-gray-600
        place-items-center
        justify-evenly
        bg-gray-800
        '
    >
      <div
        className='
      text-center grid 
      items-center 
      justify-center 
      space-y-10'
      >
        <div
          className='
        flex 
        items-center 
        justify-evenly
        text-center 
        space-x-2'
        >
          <p
            className='
          font-semibold  
          text-blue-300'
          >
            {result.Key}
          </p>
          <p className='text-gray-100'>-</p>
          <h3
            className='
          text-gray-300 
          text-lg '
          >
            {result.Name}
          </h3>
        </div>
        <div
          className='
        flex 
        items-center 
        space-x-5'
        >
          <h4
            className='
          text-blue-200'
          >
            {result.Wins}
          </h4>
          <h2
            className='
          text-yellow-200'
          >
            v.
          </h2>
          <h4
            className='
          text-red-400'
          >
            {result.Losses}
          </h4>
        </div>
      </div>
    </div>
  )
})

export default TeamStandings
