//front-end
//back-end

function HeaderScorecard () {
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
        <h4 className='teamName text-blue-100'>home team</h4>
        <h2 className='teamScore'>100</h2>
      </div>
      <div
        className='
      grid
      '
      >
        <h4 className='teamName text-red-300'>away team</h4>
        <h2 className='teamScore'>100</h2>
      </div>
    </div>
  )
}

export default HeaderScorecard
