//front-end
import BettingResult from './BettingResult'
//back-end

function BettingDetails ({ betting_results }) {
  return (
    <div className='w-full grid items-center'>
      {betting_results.slice(0, 20).map(result => (
        /**BettingResult */
        <BettingResult key={result.BettingEventID} result={result} />
      ))}
    </div>
  )
}

export default BettingDetails
