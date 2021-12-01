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
      text-center 
      grid 
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
          <h3
            className='
          text-gray-300 
          font-medium
          text-xl '
          >
            {result.Name}
          </h3>
        </div>
        <div
          className='
        grid
        text-center'
        >
          <h4
            className='
            flex
            items-center
            text-lg
            font-[400]
          text-blue-200'
          >
            Wins - {result.Wins}
          </h4>
          <h4
            className='
            flex
            items-center
            text-lg
            font-[400]
          text-red-400'
          >
            Losses - {result.Losses}
          </h4>
        </div>
      </div>
    </div>
  )
})

export default TeamStandings
