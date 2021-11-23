//front-end
import { forwardRef } from 'react'
//back-end

const HeaderScorecard = forwardRef(({ result }, ref) => {
  return (
    <div
      className='
    flex
    items-center
    space-x-8
    px-4
    py-3
    border
    border-gray-700
    bg-gray-600
    hover:animate-pulse
    cursor-pointer
    rounded-lg
    '
    >
      <div
        className='
      grid
      '
      >
        <h4 className='teamName text-blue-100'>{result.HomeTeam}</h4>
        <h2 className='teamScore text-blue-300'>{result.HomeTeamScore}</h2>
      </div>
      <div
        className='
      grid
      '
      >
        <h4 className='teamName text-red-300'>{result.AwayTeam}</h4>
        <h2 className='teamScore text-red-500'>{result.AwayTeamScore}</h2>
      </div>
    </div>
  )
})

export default HeaderScorecard
