//front-end
import HeaderScorecard from './HeaderScorecard'
//back-end
function NFLHeaderScores ({ mlb_scores }) {
  return (
    <div
      className='
        flex-1
        scrollbar-hide
        overflow-x-scroll
        whitespace-nowrap 
        flex
        items-center
        space-x-10
        py-5
        px-6
        text-gray-50
      bg-gray-600'
    >
      {mlb_scores.slice(0, 9).map(result => (
        <HeaderScorecard key={result.GameID} result={result} />
      ))}
    </div>
  )
}

export default NFLHeaderScores
