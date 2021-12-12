//front-end
import HeaderScorecard from './HeaderScorecard'
import Button from '@material-tailwind/react/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
//modal
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { useState } from 'react'

function NBAHeaderScores ({ nba_scores }) {
  const [showMore, setShowMore] = useState(false)

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
      {nba_scores.slice(0, 20).map(result => (
        <HeaderScorecard key={result.GameID} result={result} />
      ))}
    </div>
  )
}

export default NBAHeaderScores
