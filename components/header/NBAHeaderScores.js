//front-end
import HeaderScorecard from './HeaderScorecard'
//back-end
function NBAHeaderScores ({ nba_scores }) {
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
      {nba_scores.map(result => (
        <HeaderScorecard key={result.GameID} result={result} />
      ))}
    </div>
  )
}

export default NBAHeaderScores
